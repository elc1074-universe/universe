import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importe o Router
import TestService from '../../../../../../frontend/src/app/services/test.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class TestResultComponent implements OnInit {
  results: any;
  userCode: string;

  constructor(private testService: TestService, private route: ActivatedRoute, private router: Router) { 
    this.userCode = '';
  }

  ngOnInit(): void {
    this.userCode = this.route.snapshot.paramMap.get('userCode') || '';
    if (this.userCode) {
      this.getResults(this.userCode);
    }
  }

  getResults(userCode: string): void {
    this.testService.getResultByUserCode(userCode).subscribe(
      data => {
        if (data) {
          this.results = data;
        } else {
          this.router.navigate(['/no-result']);
        }
      },
      error => {
        console.error(error);
        this.router.navigate(['/no-result']);
      }
    );
  }
}  