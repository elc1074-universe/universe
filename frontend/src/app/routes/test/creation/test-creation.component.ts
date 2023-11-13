import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";
import { BehaviorSubject, Observable } from "rxjs";
import { MatDialog } from "@angular/material/dialog";

import TestCreationDTO from "src/app/models/dto/test/TestCreationDTO";
import TestRetrievalDTO from "src/app/models/dto/test/TestRetrievalDTO";
import TestService from "src/app/services/test.service";
import UserService from "src/app/services/user.service";
import { MailService } from "src/app/services/mail.service";
import { InfoCodeComponent } from "../info-code/info-code.component";

@Component({
  selector: "app-test-creation",
  templateUrl: "./test-creation.component.html",
  styleUrls: ["./test-creation.component.scss"],
})
export class TestCreationComponent {
  testCreationDTO: TestCreationDTO;

  private createdTest: BehaviorSubject<TestRetrievalDTO | null>;

  constructor(
    private testService: TestService,
    private userService: UserService,
    private toastr: ToastrService,
    private mailService: MailService,
    private http: HttpClient,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.testCreationDTO = new TestCreationDTO();
    this.createdTest = new BehaviorSubject<TestRetrievalDTO | null>(null);
  }

  onSubmit() {
    this.testService.create(this.testCreationDTO).subscribe({
      next: (test: TestRetrievalDTO | null) => {
        if (test) {
          this.createdTest.next(test);

          let userCode: string = test.user.code;

          this.userService.setCurrentUserCode(userCode);
          this.dialog.open(InfoCodeComponent, {
            data: { code: userCode },
          });

          if (this.testCreationDTO.email) {
            const message = `
            <h1>🚀 Bem-vindo ao Universe! 🚀</h1>
            <p>Olá,</p>
            <p>Obrigado por jogar Universe! Estamos muito felizes por ter você conosco.</p>
            <p>Seu código de acesso exclusivo é: <b>${userCode}</b></p>
            <p>Guarde este código com segurança, pois você precisará dele para acessar o jogo.</p>
            <p>Se você tiver alguma dúvida ou precisar de ajuda, não hesite em nos contatar.</p>
            <p>Boa sorte e divirta-se explorando o Universe!</p>
            <p>Atenciosamente,</p>
            <p>Equipe Universe</p>
          `;
            this.mailService
              .sendMail(
                this.testCreationDTO.email,
                "Seu código de acesso ao Universe",
                message
              )
              .subscribe({
                next: () => {
                  this.toastr.success("Email enviado com sucesso!");
                },
                error: (error) => {
                  console.error(error);
                  this.toastr.error("Não foi possível enviar o e-mail...");
                },
              });
          } else {
            this.toastr.error(
              "Por favor, insira um endereço de e-mail válido."
            );
          }
        }
      },
      error: (error) => {
        console.error(error);
        this.toastr.error("Não foi possível iniciar um novo teste...");
      },
    });
  }

  getCreatedTest(): Observable<TestRetrievalDTO | null> {
    return this.createdTest.asObservable();
  }
}
