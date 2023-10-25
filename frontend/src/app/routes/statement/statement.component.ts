import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import StatementService from 'src/app/services/statement.service';
import StatementRetrievalDTO from 'src/app/models/dto/statement/StatementRetrievalDTO';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {

  currentStatement!: StatementRetrievalDTO | null;

  constructor(
    private statementService: StatementService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.statementService
      .getCurrentStatementId()
      .subscribe(currentStatementId => {
        this.getStatement(currentStatementId);
      });
  }

  getStatement(id: number): void {
    this.statementService
      .getStatement(id)
      .subscribe({
        next: statement => this.currentStatement = statement,
        error: error => {
          console.error(error);
          alert('Declaração não encontrada');
          this.router.navigate(['/login']);
        }
      });
  }

  goToNextStatement(): void {
    this.statementService.setCurrentStatementId(this.currentStatement!.id + 1);
  }
}
