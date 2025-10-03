import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
    if (this.loginData.email === 'admin' && this.loginData.password === '123456') {
      alert('Login realizado com sucesso! (Admin)');
      this.router.navigate(['/agendamento/servicos']);
    } else {
      alert('Usuário ou senha inválidos.');
    }
  }
}