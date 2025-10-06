import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- MUITO IMPORTANTE: Usaremos este

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterModule ], // <-- Garantimos que tudo relacionado a rotas está importado
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { }