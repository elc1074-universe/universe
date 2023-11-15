import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  Router,
  ActivatedRoute,
  ParamMap,
  NavigationStart,
} from "@angular/router";
import { ChangeDetectorRef } from "@angular/core";
import { Subscription } from "rxjs";

import StatementService from "src/app/services/statement.service";
import StatementRetrievalDTO from "src/app/models/dto/statement/StatementRetrievalDTO";
import UserService from "src/app/services/user.service";
import TestStatementSavingDTO from "src/app/models/dto/test/TestStatementSavingDTO";
import TestService from "src/app/services/test.service";
import { MatDialog } from "@angular/material/dialog";
import { InfoCompletedComponent } from "../info-completed/info-completed.component";
import { InfoFaseComponent } from "../info-fase/info-fase.component";
import { InfoAlertComponent } from "../info-alert/info-alert.component";
import { InfoHistoryComponent } from "../info-history/info-history.component";

@Component({
  selector: "app-statement",
  templateUrl: "./statement.component.html",
  styleUrls: ["./statement.component.scss"],
})
export class StatementComponent implements OnInit, OnDestroy {
  statement!: StatementRetrievalDTO | null;
  currentStatementId: number = 1;
  userCode: any = "";
  username!: string;
  testStatementSavingDTO!: TestStatementSavingDTO;
  isTestCompleted: boolean = false;
  private subscriptions: Subscription[] = [];

  option = {
    options: [
      { description: "Primeira opção" },
      { description: "Segunda opção" },
    ],
  };

  private popupInfoArray: boolean[] = [
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  phases: { start: number; end: number }[] = [
    { start: 1, end: 7 },
    { start: 8, end: 14 },
    { start: 15, end: 21 },
    { start: 22, end: 28 },
    { start: 29, end: 35 },
    { start: 36, end: 42 },
  ];

  phaseNames: string[] = [
    "Realista",
    "Investigativo",
    "Artístico",
    "Social",
    "Empreendedor",
    "Convencional",
  ];

  currentPhaseIndex: number = 0;
  phaseStart: number = 1;
  phaseEnd: number = 7;
  phaseProgress: number = 0;
  currentQuestionNumber: number = 1;
  currentPhaseName: string = "";

  constructor(
    private statementService: StatementService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private TestService: TestService,
    public dialog: MatDialog,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.userService.getCurrentUserCode().subscribe((code: string | null) => {
        if (code) {
          this.userCode = code;
          this.userService.findByCode(this.userCode).subscribe((data: any) => {
            this.username = data.username;
          });
        } else {
          const storedUserCode = localStorage.getItem("userCode");
          if (storedUserCode) {
            this.userCode = storedUserCode;
            this.userService
              .findByCode(this.userCode)
              .subscribe((data: any) => {
                this.username = data.username;
              });
          } else {
            console.error(
              "Código do usuário não encontrado no serviço nem no armazenamento local."
            );
          }
        }
      })
    );

    this.subscriptions.push(
      this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
        this.statementService.setCurrentStatementId(Number(params.get("id")));
      })
    );

    this.subscriptions.push(
      this.statementService
        .getCurrentStatementId()
        .subscribe((currentStatementId) => {
          this.statementService.findById(currentStatementId).subscribe({
            next: (statement: StatementRetrievalDTO | null) => {
              this.statement = statement;

              if ([1, 8, 15, 22, 29, 36].includes(currentStatementId)) {
                let popupIndex = this.getPopupIndex(currentStatementId);

                if (!this.popupInfoArray[popupIndex]) {
                  this.dialog.open(InfoHistoryComponent, {
                    data: {
                      userCode: this.userCode,
                      idQuestion: this.currentStatementId,
                    },
                  });

                  this.popupInfoArray[popupIndex] = true;
                }
              }
            },
            error: (error) => {
              console.error(error);
              alert(
                `A declaração com o id ${currentStatementId} não foi encontrada.`
              );
            },
          });
          const newPhaseIndex = this.getPhaseIndex(currentStatementId);

          if (
            newPhaseIndex !== this.currentPhaseIndex ||
            this.currentPhaseIndex == 0
          ) {
            this.currentPhaseIndex = newPhaseIndex;
            this.phaseStart = this.phases[newPhaseIndex].start;
            this.phaseEnd = this.phases[newPhaseIndex].end;
            this.phaseProgress = 0;
            this.currentQuestionNumber = 1;
            this.currentPhaseName = this.phaseNames[newPhaseIndex];

            this.changeDetector.detectChanges();
          }

          this.calculatePhaseProgress(currentStatementId);

          this.currentQuestionNumber = currentStatementId - this.phaseStart + 1;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  calculatePhaseProgress(currentStatementId: number): void {
    const totalStatementsInPhase = this.phaseEnd - this.phaseStart;
    const statementsCompletedInPhase = Math.max(
      0,
      currentStatementId - this.phaseStart
    );
    this.phaseProgress =
      (statementsCompletedInPhase / totalStatementsInPhase) * 100;
  }

  getPhaseIndex(currentStatementId: number): number {
    for (let i = 0; i < this.phases.length; i++) {
      if (
        currentStatementId >= this.phases[i].start &&
        currentStatementId <= this.phases[i].end
      ) {
        return i;
      }
    }
    return -1;
  }

  private getPopupIndex(currentStatementId: number): number {
    const statementIds = [1, 8, 15, 22, 29, 36];

    let index = statementIds.indexOf(currentStatementId);

    if (index === -1) {
      console.error(
        `currentStatementId ${currentStatementId} não corresponde a nenhum popup`
      );
      return -1;
    }
    return index;
  }
  // handleButtonClick(optionIndex: number) {
  //   if (this.statement) {
  //     this.saveAnswer(optionIndex);
  //     if ([7, 14, 21, 28, 35, 42].includes(this.currentStatementId)) {
  //       const dialogRef = this.dialog.open(InfoFaseComponent, {
  //         data: {
  //           userCode: this.userCode,
  //           idQuestion: this.currentStatementId,
  //         },
  //       });
  //       dialogRef.afterClosed().subscribe((result) => {
  //         if (result === true) {
  //           this.goToNextStatement();
  //         }
  //       });
  //     }
  //   }
  // }

  saveAnswer(selectedOption: number) {
    if (!this.statement) {
      console.error("Declaração não encontrada.");
      return;
    }

    this.testStatementSavingDTO = new TestStatementSavingDTO();
    this.testStatementSavingDTO.statementId = this.statement.id;
    this.testStatementSavingDTO.selectedOptionId = selectedOption;

    this.TestService.saveStatement(
      this.userCode,
      this.testStatementSavingDTO
    ).subscribe(
      (data: any) => {
        this.isTestCompleted = data.isCompleted;
        console.log(this.userCode, "1");
        if (this.isTestCompleted) {
          this.showTestCompletedDialog();
        }

        if (this.currentStatementId < 42) {
          this.goToNextStatement();
        }
      },
      (error: any) => {
        console.error("Erro ao salvar resposta:", error);
      }
    );
  }

  showTestCompletedDialog() {
    this.dialog.open(InfoCompletedComponent, {
      data: { userCode: this.userCode },
    });
    console.log(this.userCode);
  }

  goToNextStatement(): void {
    this.currentStatementId = this.statement!.id + 1;
    this.statementService.setCurrentStatementId(this.statement!.id + 1);

    this.router.navigate(["/test/statement", this.currentStatementId]);
  }

  goToHome(): void {
    this.dialog.open(InfoAlertComponent, {
      data: {
        userCode: this.userCode,
        letter: this.statement?.personalityLetter,
      },
    });
  }

  getOptionLabel(index: number): string {
    return String.fromCharCode(65 + index) + ") ";
  }

  getBackgroundColor() {
    switch (this.currentPhaseName) {
      case "Realista":
        return { body: "#0C1020", edgeContainer: "#302132", card: "#513754" };
      case "Investigativo":
        return { body: "#0C1020", edgeContainer: "#1E314F", card: "#29436A" };
      case "Artístico":
        return { body: "#0C1020", edgeContainer: "#363633", card: "#51514C" };
      case "Social":
        return { body: "#0C1020", edgeContainer: "#214143", card: "#2D6161" };
      case "Empreendedor":
        return { body: "#0C1020", edgeContainer: "#2B274D", card: "#3D376E" };
      case "Convencional":
        return { body: "#0C1020", edgeContainer: "#3A3030", card: "#514343" };
      default:
        return { body: "#0C1020", edgeContainer: "#000000", card: "#000000" };
    }
  }
}
