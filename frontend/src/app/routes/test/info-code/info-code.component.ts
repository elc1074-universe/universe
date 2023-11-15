import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { transition, trigger, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-info-code',
  templateUrl: './info-code.component.html',
  styleUrls: ['./info-code.component.scss'],

})
export class InfoCodeComponent {
  code: string;

  constructor(
    public dialogRef: MatDialogRef<InfoCodeComponent>, 
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.code) {
      this.code = `${data.code.toUpperCase()}`;
    } else {
      this.code = `Código não encontrado`;
    }
  }

  goToTest() {
    this.router.navigate(['/test/personality', this.code]);
  }
};
