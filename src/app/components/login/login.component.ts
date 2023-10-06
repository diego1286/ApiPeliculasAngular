import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'diego';
  password = '12345';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
      console.log(this.onSubmit, 'metodo onSubmitdel login ')
  }
  onSubmit(): void {
    if (this.authService.login(this.username, this.password)) {
      
      localStorage.setItem('currentUser', JSON.stringify({ username: this.username }));
      this.router.navigate(['/movies']); 
    } else {
      alert('Error de inicio de sesión. Comprueba las credenciales.');
    }
  }
  
  
  
  

}
