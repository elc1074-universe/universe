import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user!: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
  }

  goToQuestion(id: number): void {
    this.router.navigate(['/question', id]);
  }

  getUser(username: string): void {
    this.userService.getUser(username)
      .subscribe((user: User) => this.user = user);
  } 
  
}
