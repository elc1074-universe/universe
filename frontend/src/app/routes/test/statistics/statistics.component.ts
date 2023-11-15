import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import TestService from '../../../../../../frontend/src/app/services/test.service';
import { Chart, RadarController, BarController, BarElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

Chart.register(RadarController, BarController, BarElement, PointElement, LinearScale, CategoryScale);

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
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
          this.results = data;
          const interestMapping: Record<string, string> = {
            'R': 'Realista',
            'I': 'Investigativo',
            'A': 'Artístico',
            'S': 'Social',
            'E': 'Empreendedor',
            'C': 'Convencional'
          };
          this.results.mostInterested = interestMapping[this.results.interestCode[0]];
          this.createChart();
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

  createChart(): void {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['R', 'I', 'A', 'S', 'E', 'C'],
            datasets: [{
              label: 'Pontuação',
              data: [this.results.rScore, this.results.iScore, this.results.aScore, this.results.sScore, this.results.eScore, this.results.cScore],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }
  }
  goToResults(): void {
    console.log('Navigating to results');
    this.router.navigate(['/test/result', this.userCode]);
  }
}
