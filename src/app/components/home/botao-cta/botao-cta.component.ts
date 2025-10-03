import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-botao-cta',
  imports: [CommonModule],
  templateUrl: './botao-cta.component.html',
  styleUrl: './botao-cta.component.css'
})
export class BotaoCtaComponent {
listaBeneficios = [
    {
      icone: 'imagens/diagnostico.png',
      alt: 'Ícone de diagnóstico',
      texto: 'Diagnóstico claro'
    },
    {
      icone: 'imagens/estrategias.png',
      alt: 'Ícone de estratégias',
      texto: 'Estratégias eficazes'
    },
    {
      icone: 'imagens/autoconfiança.png',
      alt: 'Ícone de confiança',
      texto: 'Mais autoconfiança'
    }
  ];

}
