import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import PersonalityService from "src/app/services/personality.service";
import PersonalityRetrievalDTO from "src/app/models/dto/personality/PersonalityRetrievalDTO";

@Component({
  selector: "app-info-history",
  templateUrl: "./info-history.component.html",
  styleUrls: ["./info-history.component.scss"],
})
export class InfoHistoryComponent {
  code: string;
  idQuestion: number;
  avatarPath: string = "";
  personalityData: PersonalityRetrievalDTO | null = null;

  constructor(
    public dialogRef: MatDialogRef<InfoHistoryComponent>,
    private personalityService: PersonalityService,

    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data.idQuestion) {
      this.code = `${data.userCode}`;
      this.idQuestion = data.idQuestion;
    } else {
      this.code = `Código não encontrado`;
      this.idQuestion = -1;
    }
  }

  ngOnInit(): void {
    if (this.idQuestion !== -1) {
      const letter = this.mapIdToLetter(this.idQuestion);
      if (letter) {
        this.personalityService
          .findByLetter(letter)
          .subscribe((data: PersonalityRetrievalDTO | null) => {
            this.personalityData = data;
          });
      } else {
        console.log("error");
      }
    }
  }

  continue() {
    this.dialogRef.close();
  }

  private mapIdToLetter(id: number): string {
    const idMappings: { [key: number]: string } = {
      1: "R",
      8: "I",
      15: "A",
      22: "S",
      29: "E",
      36: "C",
    };

    return idMappings[id] || "";
  }
}
