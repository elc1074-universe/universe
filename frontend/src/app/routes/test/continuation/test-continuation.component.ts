import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import UserRetrievalDTO from 'src/app/models/dto/user/UserRetrievalDTO';
import UserService from 'src/app/services/user.service';

@Component({
  selector: 'app-test-continuation',
  templateUrl: './test-continuation.component.html',
  styleUrls: ['./test-continuation.component.scss']
})
export class TestContinuationComponent implements OnInit {

  userCode!: string;

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit() {

  }

  onSubmit(): void {
    this.userService
      .getUserByCode(this.userCode)
      .subscribe((user: UserRetrievalDTO | null) => {
        if (user) {
          this.userService.setCurrentUser(user);
          this.router.navigate(['/personality']);
        }
      });
  }
};
