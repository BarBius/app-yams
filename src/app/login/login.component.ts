import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.auth(this.email, this.password)
      .then((authenticated) => {
        if (authenticated) {

          this.router.navigate(['/dashboard']);
        } else {

          this.errorMessage = 'Invalid email or password';
        }
      })
      .catch(error => {
        console.error('Error', error);
        this.errorMessage = 'An unexpected error';
      });
  }
}
