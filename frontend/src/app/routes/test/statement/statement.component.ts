import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { ChangeDetectorRef } from '@angular/core';

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
export class StatementComponent implements OnInit {
  statement!: StatementRetrievalDTO | null;
  currentStatementId: number = 1;
  userCode: any = "";
  username!: string;
  testStatementSavingDTO!: TestStatementSavingDTO;
  isTestCompleted: boolean = false;

  option = {
    options: [
      { description: 'Primeira opção' },
      { description: 'Segunda opção' },
    ]
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
    private changeDetector: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.userService.getCurrentUserCode().subscribe((code: string | null) => {
      this.userCode = code;
    });

    this.userService.findByCode(this.userCode).subscribe((data: any) => {
      this.username = data.username;
    });

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.statementService.setCurrentStatementId(Number(params.get("id")));
    });

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
        if (newPhaseIndex !== this.currentPhaseIndex || this.currentPhaseIndex == 0) {
          this.currentPhaseIndex = newPhaseIndex;
          this.phaseStart = this.phases[newPhaseIndex].start;
          this.phaseEnd = this.phases[newPhaseIndex].end;
          this.phaseProgress = 0;
          this.currentQuestionNumber = 1;
          this.currentPhaseName = this.phaseNames[newPhaseIndex];
        
          this.changeDetector.detectChanges();
        }

        this.calculatePhaseProgress(currentStatementId);

        this.currentQuestionNumber =
        currentStatementId - this.phaseStart + 1;
        
      });
  }

  calculatePhaseProgress(currentStatementId: number): void {
    const totalStatementsInPhase = this.phaseEnd - this.phaseStart + 1;
    const statementsCompletedInPhase =
      currentStatementId - this.phaseStart + 1;
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
    if (this.statement) {
      this.testStatementSavingDTO = new TestStatementSavingDTO();
      this.testStatementSavingDTO.statementId = this.statement.id;
      this.testStatementSavingDTO.selectedOptionId = selectedOption;

      this.TestService.saveStatement(
        this.userCode,
        this.testStatementSavingDTO
      ).subscribe((data: any) => {
        this.isTestCompleted = data.isCompleted;

        if (this.isTestCompleted) {
          this.dialog.open(InfoCompletedComponent, {
            data: { userCode: this.userCode }
          });
        }

        if (this.currentStatementId < 42) {
          this.goToNextStatement();
        }
      });
    }
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

  composeStatementBackgroundImageUrl(): string {
    const backgroundImageId =
      this.currentStatementId <= 9
        ? `0${this.currentStatementId}`
        : `${this.currentStatementId}`;

    return `assets/images/statements/${backgroundImageId}.jpg`;
  }

  getOptionLabel(index: number): string {
    return String.fromCharCode(65 + index) + ') ';
  }
}
