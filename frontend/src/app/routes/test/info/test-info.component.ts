import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-test-info',
  templateUrl: './test-info.component.html',
  styleUrls: ['./test-info.component.scss']
})
export class TestInfoComponent {

  username: string;

  constructor(
    public dialogRef: MatDialogRef<TestInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data.username) {
      this.username = data.username;
    } else {
      this.username = "";
    }
  }
};
