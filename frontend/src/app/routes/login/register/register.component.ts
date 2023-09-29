import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private http: HttpClient) { }

  onSubmit(form: NgForm) {
    const value = form.value;

    const payload = {
      username: value.username,
      email: value.email
    };

    this.http.post('http://localhost:3000/api/users', payload).subscribe(response => {
      console.log(response);
    }, error => {
      console.error(error);
    });
  }
}
