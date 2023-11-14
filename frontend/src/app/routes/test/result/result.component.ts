import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
          const interestMapping: Record<string, string> = {
            'R': 'Realista',
            'I': 'Investigativo',
            'A': 'Artístico',
            'S': 'Social',
            'E': 'Empreendedor',
            'C': 'Convencional'
          };
          this.results.mostInterested = interestMapping[this.results.interestCode[0]];
          const descriptionMapping: Record<string, any> = {
            'R': {
              1: 'práticas e adoram trabalhar com suas mãos, com muita habilidade e força de vontade.',
              2: 'tem uma paixão por atividades físicas e gosta de trabalhar com objetos e máquinas.',
              3: 'um toque realista e preferem atividades que envolvem habilidade e coordenação.',
            },
            'I': {
              1: 'curiosidadas e possuem um intelecto notável! Adoram observar, aprender e resolver problemas.',
              2: 'uma mente analítica e gosta de explorar ideias e conceitos complexos.',
              3: 'espírito de investigação, gosta de atividades que envolvem pensamento e observação.',
            },
            'A': {
              1: 'criativas e originais. A imaginação e expressão artística são verdadeiramente inspiradoras!',
              2: 'um toque artístico e gosta de atividades que envolvem criatividade e expressão pessoal.',
              3: 'espírito artístico, gosta de atividades onde você pode expressar sua criatividade.',
            },
            'S': {
              1: 'amigáveis e adoram ajudar os outros, sempre com muita empatia e compaixão.',
              2: 'um toque social e gosta de atividades que envolvem interação social e ajudar os outros.',
              3: 'espírito social, opta por atividades que permitem trabalhar com outras pessoas e que façam a diferença.',
            },
            'E': {
              1: 'líderes natos! A energia, ambição e habilidades de comunicação são sensacionais!',
              2: 'um toque empreendedor e gosta de atividades que envolvem liderança e persuasão.',
              3: 'espírito empreendedor, gosta de desafiar a assumir a liderança, além de influenciar os outros.',
            },
            'C': {
              1: 'organizadas e detalhistas. A capacidade de manter a ordem e seguir planos é evidente!',
              2: 'um toque convencional e gosta de atividades que envolvem ordem e rotina.',
              3: 'espírito convencional, prefere trabalhar dentro de diretrizes claramente definidas.',
            }
          };
          const interestLetters = this.results.interestCode.split('');
          let interestWords = interestLetters.map((letter: string) => interestMapping[letter]);
          if (interestWords.length > 1) {
            interestWords = interestWords.map((word: string, index: number) => index > 0 ? word.toLowerCase() : word);
          }
          if (interestWords.length === 3) {
            this.results.interestWords = `${interestWords[0]}, ${interestWords[1]} e ${interestWords[2]}`;
          } else {
            this.results.interestWords = interestWords.join(' e ');
          }
          this.results.description1 = descriptionMapping[interestLetters[0]][1];
          this.results.description2 = descriptionMapping[interestLetters[1]][2];
          this.results.description3 = descriptionMapping[interestLetters[2]][3];
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
  goToStatistics(): void {
    console.log('Navigating to statistics');
    this.router.navigate(['/test/statistics', this.userCode]);
  }
  
}
