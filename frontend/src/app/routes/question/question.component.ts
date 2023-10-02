import { Component, OnInit  } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Statement } from '../../models/statement';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  statement!: Statement;
  id!: number;

  constructor(private questionService: QuestionService, private router: Router, private route: ActivatedRoute) { } 

  ngOnInit(): void {
    this.questionService.currentId.subscribe(id => {
      this.id = id;
      this.getStatement(this.id);
    });
  }

  getStatement(id: number): void {
    this.questionService.getStatement(id).subscribe(statement => this.statement = statement);
  }

  goToNextQuestion(): void {
    this.questionService.changeId(this.id + 1);
  }
}

