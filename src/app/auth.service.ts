import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  auth(email: string, password: string): Promise<boolean> {
    const isValidUser = email === 'test@user.com' && password === 'password';

    return new Promise((resolve) => {
      setTimeout(() => {
        this.isAuthenticated = isValidUser;
        resolve(isValidUser);
      }, 1000);
    });
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isAuth(): boolean {
    return this.isAuthenticated;
  }
}
