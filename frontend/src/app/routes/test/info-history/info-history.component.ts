import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import PersonalityService from "src/app/services/personality.service";
import PersonalityRetrievalDTO from "src/app/models/dto/personality/PersonalityRetrievalDTO";

@Component({
  selector: "app-info-history",
  templateUrl: "./info-history.component.html",
  styleUrls: ["./info-history.component.scss"],
})
export class InfoHistoryComponent implements OnInit {
  code: string;
  idQuestion: number;
  avatarPath: string = "";
  personalityData: PersonalityRetrievalDTO | null = null;
  style: {backgroundColor: string, imagePath: string} = {backgroundColor: '#ffffff', imagePath: '../../../../assets/images/items/default.png'};

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
            if (this.personalityData && this.personalityData.storyTitle) {
              this.style = this.getStyle(this.personalityData.storyTitle);
            }
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

  getStyle(storyTitle: string): {backgroundColor: string, imagePath: string} {
    const styleMappings: { [key: string]: {backgroundColor: string, imagePath: string} } = {
      "A Jornada na Vila dos Desafios": {backgroundColor: '#513754', imagePath: '../../../../assets/images/items/helmet.png'},
      "A Aventura Investigativa na Vila do Conhecimento": {backgroundColor: '#252C4A', imagePath: '../../../../assets/images/items/manifying.png'},
      "A Jornada Criativa na Vila das Artes e Expressão": {backgroundColor: '#51514C', imagePath: '../../../../assets/images/items/brush.png'},
      "A Missão de Ajuda na Vila da Solidariedade": {backgroundColor: '#2D6161', imagePath: '../../../../assets/images/items/social.png'},
      "A Aventura Empreendedora na Vila das Oportunidades": {backgroundColor: '#3D376E', imagePath: '../../../../assets/images/items/case.png'},
      "A Experiência na Vila da Organização e Eficiência": {backgroundColor: '#514343', imagePath: '../../../../assets/images/items/tie.png'},
    };
  
    return styleMappings[storyTitle] || {backgroundColor: '#ffffff', imagePath: '../../../../assets/images/items/default.png'};
  }  
}
