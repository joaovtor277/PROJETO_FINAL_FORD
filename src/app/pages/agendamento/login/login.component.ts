import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule 
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  private router = inject(Router);

  
  loginData = {
    email: '',
    password: ''
  };

  
  onSubmit(): void {
    console.log('Dados do login:', this.loginData);

    if (this.loginData.email === 'admin' && this.loginData.password === '123456') {
    
      this.router.navigate(['/consultas']);

    } else {
      alert('Por favor, preencha o e-mail e a senha corretamente');
    }
  }
}