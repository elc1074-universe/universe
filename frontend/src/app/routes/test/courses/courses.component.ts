import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import TestService from 'src/app/services/test.service';

interface Course {
    id: number;
    name: string;
}

const courses: Course[] = [
  { id: 1, name: 'ABI - Artes Cênicas' },
  { id: 2, name: 'ABI - Ciências Biológicas' },
  { id: 3, name: 'Administração' },
  { id: 4, name: 'Agronegócio' },
  { id: 5, name: 'Agronomia' },
  { id: 6, name: 'Alimentos' },
  { id: 7, name: 'Arquitetura e Urbanismo' },
  { id: 8, name: 'Arquivologia' },
  { id: 9, name: 'Artes Cênicas - Direção Teatral' },
  { id: 10, name: 'Artes Cênicas - Interpretação Teatral' },
  { id: 11, name: 'Artes Visuais' },
  { id: 12, name: 'Ciência da Computação' },
  { id: 13, name: 'Ciências Biológicas' },
  { id: 14, name: 'Ciências Contábeis' },
  { id: 15, name: 'Ciências Econômicas' },
  { id: 16, name: 'Ciências Sociais' },
  { id: 17, name: 'Comunicação Social - Produção Editorial' },
  { id: 18, name: 'Comunicação Social - Publicidade e Propaganda' },
  { id: 19, name: 'Comunicação Social - Relações Públicas' },
  { id: 20, name: 'Dança - Bacharelado' },
  { id: 21, name: 'Dança - Licenciatura' },
  { id: 22, name: 'Desenho Industrial' },
  { id: 23, name: 'Direito' },
  { id: 24, name: 'Educação Especial' },
  { id: 25, name: 'Educação Física' },
  { id: 26, name: 'Eletrônica Industrial' },
  { id: 27, name: 'Enfermagem' },
  { id: 28, name: 'Engenharia Acústica' },
  { id: 29, name: 'Engenharia Aeroespacial' },
  { id: 30, name: 'Engenharia Ambiental e Sanitária' },
  { id: 31, name: 'Engenharia Civil' },
  { id: 32, name: 'Engenharia Elétrica' },
  { id: 33, name: 'Engenharia Florestal' },
  { id: 34, name: 'Engenharia Mecânica' },
  { id: 35, name: 'Engenharia Química' },
  { id: 36, name: 'Engenharia da Computação' },
  { id: 37, name: 'Engenharia de Controle e Automação' },
  { id: 38, name: 'Engenharia de Produção' },
  { id: 39, name: 'Engenharia de Telecomunicações' },
  { id: 40, name: 'Estatística' },
  { id: 41, name: 'Fabricação Mecânica' },
  { id: 42, name: 'Farmácia' },
  { id: 43, name: 'Filosofia' },
  { id: 44, name: 'Fisioterapia' },
  { id: 45, name: 'Fonoaudiologia' },
  { id: 46, name: 'Física' },
  { id: 47, name: 'Geografia' },
  { id: 48, name: 'Geoprocessamento' },
  { id: 49, name: 'Gestão Ambiental' },
  { id: 50, name: 'Gestão de Cooperativas' },
  { id: 51, name: 'Gestão de Turismo' },
  { id: 52, name: 'História' },
  { id: 53, name: 'Jornalismo' },
  { id: 54, name: 'Letras - Espanhol' },
  { id: 55, name: 'Letras - Inglês' },
  { id: 56, name: 'Letras - Língua Portuguesa' },
  { id: 57, name: 'Letras - Português' },
  { id: 58, name: 'Matemática' },
  { id: 59, name: 'Medicina' },
  { id: 60, name: 'Medicina Veterinária' },
  { id: 61, name: 'Meteorologia' },
  { id: 62, name: 'Música' },
  { id: 63, name: 'Música e Tecnologia' },
  { id: 64, name: 'Nutrição' },
  { id: 65, name: 'Odontologia' },
  { id: 66, name: 'Pedagogia' },
  { id: 67, name: 'Processos Químicos' },
  { id: 68, name: 'Programa Especial de Graduação de Formação de Professores para A Educação Profissional' },
  { id: 69, name: 'Psicologia' },
  { id: 70, name: 'Química' },
  { id: 71, name: 'Química Industrial' },
  { id: 72, name: 'Redes de Computadores' },
  { id: 73, name: 'Relações Internacionais' },
  { id: 74, name: 'Serviço Social' },
  { id: 75, name: 'Sistemas de Informação' },
  { id: 76, name: 'Sistemas para Internet' },
  { id: 77, name: 'Teatro' },
  { id: 78, name: 'Terapia Ocupacional' },
  { id: 79, name: 'Zootecnia' }
];

const coursesByTrait = {
    "R": [4, 5, 6, 7, 22, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 48, 49, 60, 61, 67, 68, 70, 71, 75, 79],
    "I": [2, 12, 13, 15, 16, 40, 42, 43, 46, 47, 48, 49, 60, 61, 61, 62, 64, 65, 66, 70, 73],
    "A": [1, 7, 9, 10, 11, 17, 18, 20, 21, 22, 54, 55, 56, 57, 62, 63, 77],
    "S": [3, 8, 17, 18, 19, 23, 24, 25, 27, 44, 45, 50, 51, 52, 53, 54, 55, 56, 57, 59, 64, 66, 68, 69, 73, 74, 78],
    "E": [3, 4, 14, 15, 17, 18, 19, 23, 38, 49, 50, 51, 53, 73],
    "C": [3, 8, 14, 15, 17, 18, 19, 23, 38, 26, 40, 50, 51, 53, 58, 67, 70, 71, 73]
};

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
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
          this.results.courseRecommendations = this.recommendCourses(this.results.interestCode);
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

  recommendCourses(userProfile: string, numRecommendations = 5): Course[] {
    let commonCourses = coursesByTrait[userProfile[0] as keyof typeof coursesByTrait];
    for (let i = 1; i < userProfile.length; i++) {
        commonCourses = commonCourses.filter(id => coursesByTrait[userProfile[i] as keyof typeof coursesByTrait].includes(id));
    }

    if (commonCourses.length >= numRecommendations) {
        return commonCourses.slice(0, numRecommendations).map(id => courses.find(course => course.id === id)!);
    }

    let recommendations = [...commonCourses];
    for (let i = 0; i < userProfile.length; i++) {
        for (let j = i + 1; j < userProfile.length; j++) {
            let doubleCourses = coursesByTrait[userProfile[i] as keyof typeof coursesByTrait].filter(id => coursesByTrait[userProfile[j] as keyof typeof coursesByTrait].includes(id));
            for (let id of doubleCourses) {
                if (!recommendations.includes(id)) {
                    recommendations.push(id);
                }
                if (recommendations.length >= numRecommendations) {
                    return recommendations.map(id => courses.find(course => course.id === id)!);
                }
            }
        }
    }
    return recommendations.map(id => courses.find(course => course.id === id)!);
  }

  goToCode(): void {
    console.log('Returning');
    this.router.navigate(['/test/code-result']);
  } 
}
