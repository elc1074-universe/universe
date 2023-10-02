import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  user : User;

  constructor(private http: HttpClient, private toastr : ToastrService, private userService : UserService) { 
    this.user = new User();
  }

  onSubmit(form: NgForm) {
    const value = form.value;

    this.userService.createUser(this.user).subscribe({
      next: (response) => {
        console.log(response);
        if (response.id) {
          this.toastr.success("O usuário foi criado com sucesso!", "Concluído");
        }
      },
      error: (error) => {
        this.toastr.error("Não foi possível cadastras o usuário.");
        console.log(error);
      }
    });
  
  }
}
