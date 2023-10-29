import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import StatementService from 'src/app/services/statement.service';
import StatementRetrievalDTO from 'src/app/models/dto/statement/StatementRetrievalDTO';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {

  statement!: StatementRetrievalDTO | null;

  private static readonly NUMBER_OF_STATEMENTS: number = 42;

  constructor(
    private statementService: StatementService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute
      .paramMap
      .subscribe((params: ParamMap) => {
        this.statementService.setCurrentStatementId(Number(params.get('id')));
      });

    this.statementService
      .getCurrentStatementId()
      .subscribe(currentStatementId => {
        this.statementService
          .getStatement(currentStatementId)
          .subscribe({
            next: (statement: StatementRetrievalDTO | null) => {
              this.statement = statement;
            },
            error: error => {
              console.error(error);
              alert(`A declaração com o id ${currentStatementId} não foi encontrada.`);
              this.router.navigate(['/personality']);
            }
          });
      });
  }

  goToNextStatement(): void {
    const currentStatementId = this.statement!.id + 1;
    this.statementService.setCurrentStatementId(this.statement!.id + 1);

    this.router.navigate(['/statement', currentStatementId]);
  }
};
