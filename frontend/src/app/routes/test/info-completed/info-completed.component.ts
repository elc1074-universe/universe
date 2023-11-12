import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-completed',
  templateUrl: './info-completed.component.html',
  styleUrls: ['./info-completed.component.scss']
})
export class InfoCompletedComponent {
  code: string;

  constructor(
    public dialogRef: MatDialogRef<InfoCompletedComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.code) {
      this.code = `${data.userCode}`;
    } else {
      this.code = `Código não encontrado`;
    }
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  goToResult() {
    this.router.navigate(['/test/result', this.code]);
  }
}
