import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-fase',
  templateUrl: './info-fase.component.html',
  styleUrls: ['./info-fase.component.scss']
})
export class InfoFaseComponent {
  code: string;

  constructor(
    public dialogRef: MatDialogRef<InfoFaseComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.userCode) {
      console.log(data);
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
