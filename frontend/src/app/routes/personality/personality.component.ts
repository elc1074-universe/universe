import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { TestInfoComponent } from 'src/app/routes/test/info/test-info.component';
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

  private static readonly NUMBER_OF_STATEMENTS_BY_PERSONALITY: number = 7;

  private user!: UserRetrievalDTO | null;

  constructor(
    private userService: UserService,
    private personalityService: PersonalityService,
    private statementService: StatementService,
    public dialog: MatDialog,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();

    this.dialog.open(TestInfoComponent, { data: { username: this.user?.username } });
  }

  goToPersonality(personalityId: number): void {
    this.personalityService.setCurrentPersonalityId(personalityId);

    const currentStatementId = personalityId * PersonalityComponent.NUMBER_OF_STATEMENTS_BY_PERSONALITY - 6;
    this.statementService.setCurrentStatementId(currentStatementId);
    
    this.router.navigate(['/statement', currentStatementId]);
  }
};
