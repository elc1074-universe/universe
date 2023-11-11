import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";

import { TestInfoComponent } from "src/app/routes/test/info/test-info.component";
import UserRetrievalDTO from "src/app/models/dto/user/UserRetrievalDTO";
import UserService from "src/app/services/user.service";
import PersonalityService from "src/app/services/personality.service";
import StatementService from "src/app/services/statement.service";
import TestService from "src/app/services/test.service";
import TestRetrievalDTO from "src/app/models/dto/test/TestRetrievalDTO";
@Component({
  selector: "app-personality",
  templateUrl: "./personality.component.html",
  styleUrls: ["./personality.component.scss"],
})
export class PersonalityComponent implements OnInit {
  completionStatus: Record<string, boolean> = {};
  private user!: UserRetrievalDTO | null;
  username!: string;
  usercode!: string;
  private popupInfo: boolean = false;
  lastCompletedStatementId!: number;

  constructor(
    private userService: UserService,
    private personalityService: PersonalityService,
    private statementService: StatementService,
    private TestService: TestService,
    public dialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.userService.setCurrentUserCode(params.get("userCode")!);
    });

    this.userService
      .getCurrentUserCode()
      .subscribe((currentUserCode: string | null) => {
        this.userService.findByCode(currentUserCode!).subscribe({
          next: (user: UserRetrievalDTO | null) => {
            this.user = user;
            //terminar isso, falta arrumar o lastCompletedStatementId = 0
            if (!this.popupInfo) {
              this.TestService.findPersonality(this.usercode, "R").subscribe({
                next: (personality: TestRetrievalDTO | null) => {
                  if (personality) {
                    this.lastCompletedStatementId =
                      personality.lastCompletedStatementId;
                    console.log(personality);
                    if (this.lastCompletedStatementId == 0) {
                      const dialogRef = this.dialog.open(TestInfoComponent, {
                        data: { username: user?.username },
                      });
                      console.log(this.usercode);
                      this.popupInfo = true;
                    }
                  }
                },
              });
            }
            if (this.user?.username) {
              this.username = this.user.username;
            }
            this.usercode = currentUserCode!;
            const letters = ["R", "I", "A", "S", "E", "C"];

            for (let i = 0; i < letters.length; i++) {
              this.TestService.findPersonality(
                this.usercode,
                letters[i]
              ).subscribe({
                next: (personality: TestRetrievalDTO | null) => {
                  if (personality) {
                    this.completionStatus[letters[i]] = personality.isCompleted;
                  }
                },
              });
            }
          },
          error: (error) => {
            console.error(error);
            alert(
              `O usuário com o código ${currentUserCode} não foi encontrado.`
            );
            this.router.navigate(["/test/continue"]);
          },
        });
      });
  }

  goToPersonality(personalityId: number): void {
    this.personalityService.setCurrentPersonalityId(personalityId);

    const currentStatementId =
      personalityId * PersonalityService.NUMBER_OF_STATEMENTS_BY_PERSONALITY -
      6;
    this.statementService.setCurrentStatementId(currentStatementId);

    this.router.navigate(["/test/statement", currentStatementId]);
  }
}
