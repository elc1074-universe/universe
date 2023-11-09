import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-alert',
  templateUrl: './info-alert.component.html',
  styleUrls: ['./info-alert.component.scss']
})
export class InfoAlertComponent {
  code: string;

  constructor(
    public dialogRef: MatDialogRef<InfoAlertComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.userCode) {
      this.code = `${data.userCode}`;
    } else {
      this.code = `Código não encontrado`;
    }
  }

  goToPersonality() {
    this.router.navigate(['/test/personality', this.code]);
  }

  continue(){
    this.dialogRef.close(true);
  }
}
