import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { switchMap } from 'rxjs/operators';

import { InfoComponent } from './info/info.component';
import UserRetrievalDTO from 'src/app/models/dto/user/UserRetrievalDTO';
import UserService from 'src/app/services/user.service';
import StatementService from '../../services/statement.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private user!: UserRetrievalDTO | null;

  constructor(
    private userService: UserService,
    private statementService: StatementService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.route
      .paramMap
      .pipe(switchMap((params: ParamMap) => {
          return this.userService.getUserByCode(params.get('code')!);
        }
      ))
      .subscribe((user: UserRetrievalDTO | null) => {
        this.user = user;
        this.dialog.open(InfoComponent, { data: { user: user } });
      });
  }

  goToPersonality(level: number): void {
    this.statementService.setCurrentStatementId(level);
    this.router.navigate(['/statements', level]);
  }
};
