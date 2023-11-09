import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import StatementService from 'src/app/services/statement.service';
import StatementRetrievalDTO from 'src/app/models/dto/statement/StatementRetrievalDTO';
import UserService from 'src/app/services/user.service';
import TestStatementSavingDTO from 'src/app/models/dto/test/TestStatementSavingDTO';
import TestService from 'src/app/services/test.service';
import { MatDialog } from '@angular/material/dialog';
import { InfoCompletedComponent } from '../info-completed/info-completed.component';
import { InfoFaseComponent } from '../info-fase/info-fase.component';
import { InfoAlertComponent } from '../info-alert/info-alert.component';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {

  statement!: StatementRetrievalDTO | null;
  currentStatementId: number = 1;
  userCode: any = "";
  username!: string;
  testStatementSavingDTO!: TestStatementSavingDTO;
  isTestCompleted: boolean = false;

  constructor(
    private statementService: StatementService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private TestService: TestService,
    public dialog: MatDialog,
  ) {

  }

  ngOnInit(): void {
    this.userService.getCurrentUserCode().subscribe((code: string | null) => {
      this.userCode = code;
    });

    this.userService.findByCode(this.userCode).subscribe((data: any) => {
      this.username = data.username;
    });

    this.activatedRoute
      .paramMap
      .subscribe((params: ParamMap) => {
        this.statementService.setCurrentStatementId(Number(params.get('id')));
      });

    this.statementService
      .getCurrentStatementId()
      .subscribe(currentStatementId => {
        this.statementService
          .findById(currentStatementId)
          .subscribe({
            next: (statement: StatementRetrievalDTO | null) => {
              this.statement = statement;
            },
            error: error => {
              console.error(error);
              alert(`A declaração com o id ${currentStatementId} não foi encontrada.`);
            }
          });
      });
  }

  handleButtonClick(optionIndex: number) {
    if (this.statement) {
      if ([7, 14, 21, 28, 35, 42].includes(this.currentStatementId)) {
        const dialogRef = this.dialog.open(InfoFaseComponent, { data: { userCode: this.userCode, idQuestion : this.currentStatementId } });
        dialogRef.afterClosed().subscribe((result) => {
          // Verifique se o valor retornado é `true`
          if (result === true) {
            // Chame a função para ir para a próxima declaração
            this.goToNextStatement();
          }
        });

      } else {
        this.saveAnswer(optionIndex);
      }
    }
  }

  saveAnswer(selectedOption: number) {
    if (this.statement) {
      this.testStatementSavingDTO = new TestStatementSavingDTO();
      this.testStatementSavingDTO.statementId = this.statement.id;
      this.testStatementSavingDTO.selectedOptionId = selectedOption;

      this.TestService.saveStatement(this.userCode, this.testStatementSavingDTO).subscribe((data:any) => {
        this.isTestCompleted = data.isCompleted;

        if (this.isTestCompleted) {
          this.dialog.open(InfoCompletedComponent, { data: { userCode: this.userCode } });
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

    this.router.navigate(['/test/statement', this.currentStatementId]);
  }

  goToHome(): void {
    this.dialog.open(InfoAlertComponent, { data: { userCode: this.userCode } });
  }

  composeStatementBackgroundImageUrl(): string {
    const backgroundImageId = this.currentStatementId <= 9 ? `0${this.currentStatementId}` : `${this.currentStatementId}`;

    return `assets/images/statements/${backgroundImageId}.png`;
  }
};
