import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';

import TestCreationDTO from 'src/app/models/dto/test/TestCreationDTO';
import TestRetrievalDTO from 'src/app/models/dto/test/TestRetrievalDTO';
import TestService from 'src/app/services/test.service';
import UserService from 'src/app/services/user.service';

@Component({
  selector: 'app-test-creation',
  templateUrl: './test-creation.component.html',
  styleUrls: ['./test-creation.component.scss']
})
export class TestCreationComponent {

  testCreationDTO: TestCreationDTO;

  private createdTest: BehaviorSubject<TestRetrievalDTO | null>;

  constructor(
    private testService: TestService,
    private userService: UserService,
    private toastr: ToastrService,
    private http: HttpClient,
    private router: Router
  ) {
    this.testCreationDTO = new TestCreationDTO();
    this.createdTest = new BehaviorSubject<TestRetrievalDTO | null>(null)
  }

  onSubmit() {
    this.testService
      .create(this.testCreationDTO)
      .subscribe({
        next: (test: TestRetrievalDTO | null)  => {
          if (test) {
            this.createdTest.next(test);
            
            const userCode: string = test.user.code.toLocaleLowerCase();
            
            this.userService.setCurrentUserCode(userCode);
            this.router.navigate(['/test/personality', userCode]);
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
