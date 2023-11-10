import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-info-history',
  templateUrl: './info-history.component.html',
  styleUrls: ['./info-history.component.scss']
})
export class InfoHistoryComponent {
  code: string;
  idQuestion: string;
  avatarPath: string = '';

  constructor(
    public dialogRef: MatDialogRef<InfoHistoryComponent>,

    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.idQuestion) {
      this.code = `${data.userCode}`;
      this.idQuestion = `${data.idQuestion}`;
    } else {
      this.code = `Código não encontrado`;
      this.idQuestion = `Question não encontrada`;
    }
  }

  ngOnInit(): void {
    this.avatarPath = 'assets/images/personality-avatar/' + this.idQuestion + '.png';
    };

  continue(){
    this.dialogRef.close();
  }
}
