import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user!: User;
  username!: string;

  constructor(
    private userService: UserService,
    private router: Router 
  ) { }

  ngOnInit() {
  }

  onSave(): void {
    this.userService.getUser(this.username)
      .subscribe(user => {
        this.user = user;

        if (this.user) {
          this.router.navigate(['/user']);
        }
      });
  }
}
