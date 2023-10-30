import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    this.userService.setCurrentUserCode(this.userCode);
    this.router.navigate(['/test', this.userCode]);
  }
};
