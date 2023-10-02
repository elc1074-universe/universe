import { Component, OnInit  } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Statement } from '../../models/statement';
import { Personality } from '../../models/personality';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  statement!: Statement;
  personality!: Personality;

  constructor(private questionService: QuestionService) { } 

  ngOnInit(): void {
    this.getStatement(1);
    this.getPersonality(1);
  }

  getStatement(id: number): void {
    this.questionService.getStatement(id).subscribe(statement => this.statement = statement); 
  }

  getPersonality(id: number): void {
    this.questionService.getPersonality(id).subscribe(personality => this.personality = personality);
  }
  

  nextQuestion(): void {
  }
}
