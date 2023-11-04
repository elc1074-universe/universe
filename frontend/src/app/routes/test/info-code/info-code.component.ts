import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-info-code',
  templateUrl: './info-code.component.html',
  styleUrls: ['./info-code.component.scss']
})
export class InfoCodeComponent {
  code: string;

  constructor(
    public dialogRef: MatDialogRef<InfoCodeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data.code) {
      this.code = `${data.code}`;
    } else {
      this.code = `Código não encontrado`;
    }
  }
};
