import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user!: User;

  constructor(private userService: UserService,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user.username = params['username'];

      this.userService.getUser(this.user.username)
      .subscribe((user: User) => this.user = user);
     
    });

    this.user = this.userService.getCurrentUser();
    console.log(this.user);
  }

  getUser(username: string): void {
    this.userService.getUser(username)
      .subscribe((user: User) => this.user = user);
  }
  
}
