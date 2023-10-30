import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import StatementService from 'src/app/services/statement.service';
import StatementRetrievalDTO from 'src/app/models/dto/statement/StatementRetrievalDTO';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {

  statement!: StatementRetrievalDTO | null;

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
          .getStatementById(currentStatementId)
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

  goToNextStatement(): void {
    const currentStatementId = this.statement!.id + 1;
    this.statementService.setCurrentStatementId(this.statement!.id + 1);

    this.router.navigate(['/test/statement', currentStatementId]);
  }
};
