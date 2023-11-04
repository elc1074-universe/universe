import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import StatementService from 'src/app/services/statement.service';
import StatementRetrievalDTO from 'src/app/models/dto/statement/StatementRetrievalDTO';
import UserService from 'src/app/services/user.service';
import TestStatementSavingDTO from 'src/app/models/dto/test/TestStatementSavingDTO';
import TestService from 'src/app/services/test.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {

  statement!: StatementRetrievalDTO | null;
  currentStatementId: number = 1;
  userCode: any = "";
  testStatementSavingDTO!: TestStatementSavingDTO;

  constructor(
    private statementService: StatementService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private TestService: TestService
  ) {

  }

  ngOnInit(): void {
    this.userService.getCurrentUserCode().subscribe((code: string | null) => {
      this.userCode = code;
      console.log(this.userCode);
    });

    this.activatedRoute
      .paramMap
      .subscribe((params: ParamMap) => {
        console.log(Number(params.get('id')));
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

  saveAnswer(selectedOption: number) {
    if (this.statement) {
      this.testStatementSavingDTO = new TestStatementSavingDTO();
      this.testStatementSavingDTO.statementId = this.statement.id;
      this.testStatementSavingDTO.selectedOptionId = selectedOption;
      console.log(this.testStatementSavingDTO);

      this.TestService.saveStatement(this.userCode, this.testStatementSavingDTO).subscribe((data:any) => {
        console.log(data);
        this.goToNextStatement();
      });
    }
  }


  goToNextStatement(): void {
    this.currentStatementId = this.statement!.id + 1;
    this.statementService.setCurrentStatementId(this.statement!.id + 1);

    this.router.navigate(['/test/statement', this.currentStatementId]);
  }

  getQuestionImage(): string {
    return `assets/images/test/${this.currentStatementId}.png`;
  }

  goBack() {
    this.router.navigate(['/test/personality', this.userCode]);
  }

}
