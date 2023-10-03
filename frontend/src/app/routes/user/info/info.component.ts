import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  user : User;

  constructor(public dialogRef: MatDialogRef<InfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.user = data.user;
  }
}
