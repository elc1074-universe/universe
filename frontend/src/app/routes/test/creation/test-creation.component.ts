import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';

import TestCreationDTO from 'src/app/models/dto/test/TestCreationDTO';
import TestRetrievalDTO from 'src/app/models/dto/test/TestRetrievalDTO';
import TestService from 'src/app/services/test.service';

@Component({
  selector: 'app-test-creation',
  templateUrl: './test-creation.component.html',
  styleUrls: ['./test-creation.component.scss']
})
export class TestCreationComponent {

  testCreationDTO: TestCreationDTO;

  private createdTest: BehaviorSubject<TestRetrievalDTO | null>;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private testService: TestService
  ) {
    this.testCreationDTO = new TestCreationDTO();
    this.createdTest = new BehaviorSubject<TestRetrievalDTO | null>(null)
  }

  onSubmit(form: NgForm) {
    this.testService
      .createTest(this.testCreationDTO)
      .subscribe({
        next: (response: TestRetrievalDTO | null)  => {
          if (response) {
            this.createdTest.next(response);
            this.toastr.success('Um novo teste foi iniciado!');
          }
        },
        error: error => {
          console.error(error);
          this.toastr.error('Não foi possível iniciar um novo teste...');
        }
      });
  }

  getCreatedTest(): Observable<TestRetrievalDTO | null> {
    return this.createdTest.asObservable();
  }
};
