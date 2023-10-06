import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  private users = [
    { username: 'diego', password: '12345' },
    { username: 'carlos', password: '54321' },
    { username: 'pedro', password: 'abcde' },
  ];

  constructor() {}

  login(username: string, password: string): boolean {
 
    const user = this.users.find((u) => u.username === username && u.password === password);
    if (user) {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
  }

  
  
  


