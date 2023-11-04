import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { TestInfoComponent } from 'src/app/routes/test/info/test-info.component';
import { InfoCodeComponent } from 'src/app/routes/test/info-code/info-code.component';
import UserRetrievalDTO from 'src/app/models/dto/user/UserRetrievalDTO';
import UserService from 'src/app/services/user.service';
import PersonalityService from 'src/app/services/personality.service';
import StatementService from 'src/app/services/statement.service';

@Component({
  selector: 'app-personality',
  templateUrl: './personality.component.html',
  styleUrls: ['./personality.component.scss']
})
export class PersonalityComponent implements OnInit {

  private user!: UserRetrievalDTO | null;
  username! : string;
  usercode! : string

  constructor(
    private userService: UserService,
    private personalityService: PersonalityService,
    private statementService: StatementService,
    public dialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.activatedRoute
      .paramMap
      .subscribe((params: ParamMap) => {
        this.userService.setCurrentUserCode(params.get('userCode')!);
      });
    
    this.userService
      .getCurrentUserCode()
      .subscribe((currentUserCode: string | null) => {
        this.userService
          .findByCode(currentUserCode!)
          .subscribe({
            next: (user: UserRetrievalDTO | null) => {
              this.user = user;
              const dialogRef = this.dialog.open(TestInfoComponent, { data: { username: user?.username } });
              if (this.user?.username) {
                this.username = this.user.username;
              }
              this.usercode = currentUserCode!;
            },
            error: error => {
              console.error(error);
              alert(`O usuário com o código ${currentUserCode} não foi encontrado.`);
              this.router.navigate(['/test/continue']);
            }
          });
      });
  }

  goToPersonality(personalityId: number): void {
    this.personalityService.setCurrentPersonalityId(personalityId);

    const currentStatementId = personalityId * PersonalityService.NUMBER_OF_STATEMENTS_BY_PERSONALITY - 6;
    this.statementService.setCurrentStatementId(currentStatementId);
    
    this.router.navigate(['/test/statement', currentStatementId]);
  }
};
