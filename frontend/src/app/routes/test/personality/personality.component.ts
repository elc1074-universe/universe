import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { forkJoin } from 'rxjs';

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
            if (this.user?.username) {
              this.username = this.user.username;
            }
            this.usercode = currentUserCode!;
       
            const letters = ["R", "I", "A", "S", "E", "C"];
            const observables = [];
  
            for (let i = 0; i < letters.length; i++) {
              observables.push(
                this.TestService.findPersonality(
                  this.usercode,
                  letters[i]
                )
              );
            }
  
            forkJoin(observables).subscribe((personalities: (TestRetrievalDTO | null)[]) => {
              let allCompletionStatusFalse = true;
  
              for (let i = 0; i < letters.length; i++) {
                const personality = personalities[i];
  
                if (personality) {
                  this.completionStatus[letters[i]] = personality.isCompleted;
                  allCompletionStatusFalse = allCompletionStatusFalse && !personality.isCompleted;
                  console.log(letters[i], this.completionStatus[letters[i]]);
                }
              }
  
              if (!this.popupInfo && allCompletionStatusFalse) {
                const dialogRef = this.dialog.open(TestInfoComponent, {
                  data: { username: user?.username },
                });
                console.log(this.usercode);
                this.popupInfo = true;
              }
            });
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

  areAllCompletionStatusFalse(): boolean {
    return Object.values(this.completionStatus).every(status => !status);
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
