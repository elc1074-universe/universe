import { Component, OnInit  } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Statement } from '../../models/statement';
import { Option } from '../../models/option';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})

export class QuestionComponent implements OnInit {
  statement!: Statement;
  options!: Option[]; 
  id!: number;

  constructor(private questionService: QuestionService, private router: Router, private route: ActivatedRoute) { } 

  ngOnInit(): void {
    this.questionService.currentId.subscribe(id => {
      this.id = id;
      this.getStatement(this.id);
      this.getOptions(this.id)
    });
  }

  getStatement(id: number): void {
    this.questionService.getStatement(id).subscribe({
      next: statement => this.statement = statement,
      error: err => {
        console.error(err);
        alert('Pergunta não encontrada');
        this.router.navigate(['/login']);
      }
    });
  }

  getOptions(id: number): void { 
    this.questionService.getOption(id).subscribe(options => this.options = options);
  }

  goToNextQuestion(): void {
    this.questionService.changeId(this.id + 1);
  }
}


