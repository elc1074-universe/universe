import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import UserService from 'src/app/services/user.service';

@Component({
  selector: 'app-code-result',
  templateUrl: './code-result.component.html',
  styleUrls: ['./code-result.component.scss']
})
export class CodeResultComponent implements OnInit {

  userCode!: string;

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit() {

  }

  onSubmit(): void {
    this.userService.setCurrentUserCode(this.userCode.toLocaleUpperCase());
    this.router.navigate(['test/result', this.userCode.toLocaleUpperCase()]);
  }
};
