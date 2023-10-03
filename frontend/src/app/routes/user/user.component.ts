import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { QuestionService } from '../../services/question.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { InfoComponent } from './info/info.component';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user!: User;
  username! : string;
  user1!: Observable<User>;

  constructor(private userService: UserService, private questionService: QuestionService, private route: ActivatedRoute, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    
    this.user1 = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.userService.getUser(params.get('username')!))
    );

    this.user1.subscribe((user: User) => {
      this.user = user;

      this.dialog.open(InfoComponent, {
        data: {
          user: this.user
        }
      });
    });
  }

  goToLevel(level: number): void {
    this.questionService.changeId(level);
    this.router.navigate(['/question', level]);
  }

}
