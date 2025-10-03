import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-como-posso-ajudar',
  imports: [CommonModule],
  templateUrl: './como-posso-ajudar.component.html',
  styleUrl: './como-posso-ajudar.component.css'
})
export class ComoPossoAjudarComponent {
  listaDeServicos = [
    {
      icone: 'imagens/icone lupa cerebro.png',
      titulo: 'Avaliação Psicopedagógica' 
    },
    {
      icone: 'imagens/icone individuo.png',
      titulo: 'Intervenção Individualizada'
    },
    {
      icone: 'imagens/icone familia.png',
      titulo: 'Orientação Parental'
    },
    {
      icone: 'imagens/icone consulta pedagogica.png',
      titulo: 'Consultoria Pedagógica'
    }
  ];
}
