import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import TestService from 'src/app/services/test.service';

@Component({
  selector: 'app-info-alert',
  templateUrl: './info-alert.component.html',
  styleUrls: ['./info-alert.component.scss']
})
export class InfoAlertComponent {
  code: string;
  letter: string;

  constructor(
    public dialogRef: MatDialogRef<InfoAlertComponent>,
    private router: Router,
    private testService : TestService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.userCode) {
      this.code = `${data.userCode}`;
      this.letter = `${data.letter}`
    } else {
      this.code = `Código não encontrado`;
      this.letter = "";
    }
  }

  goToPersonality() {
    this.testService.deletePersonality(this.code, this.letter).subscribe(
      () => {
        this.router.navigate(['/test/personality', this.code]);
      },
      error => {
        console.error('Erro ao excluir personalidade:', error);
      }
    );
  }

  continue(){
    this.dialogRef.close(true);
  }
}
