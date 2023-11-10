import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-history',
  templateUrl: './info-history.component.html',
  styleUrls: ['./info-history.component.scss']
})
export class InfoHistoryComponent {
  code: string;

  constructor(
    public dialogRef: MatDialogRef<InfoHistoryComponent>,
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
    this.dialogRef.close();
  }
}
