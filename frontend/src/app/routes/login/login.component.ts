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
        console.log(user);
        if (this.user) {
          this.userService.setCurrentUser(this.user);
          console.log('URL a ser navegada:', ['/user', this.user.username]);
          this.router.navigate(['/user', this.user.username]);
        }
      });
  }
}
