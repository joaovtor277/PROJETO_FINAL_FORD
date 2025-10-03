import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
imagensGaleria = [
    {
      caminho: 'imagens/imagem 1 galeria.jpg',
      alt: 'Criança sorrindo durante atividade',
      classeCss: 'item-1'
    },
    {
      caminho: 'imagens/imagem 2 galeria.jpg',
      alt: 'Sala de aula inclusiva',
      classeCss: 'item-2'
    },
    {
      caminho: 'imagens/imagem 3 galeria.jpg',
      alt: 'Profissional com família',
      classeCss: 'item-3'
    },
    {
      caminho: 'imagens/imagem 4 galeria.jpg',
      alt: 'Crianças sorrindo juntas',
      classeCss: 'item-4'
    },
    {
      caminho: 'imagens/imagem 5 galeria.jpg',
      alt: 'Atividade de artes',
      classeCss: 'item-5'
    },
    {
      caminho: 'imagens/imagem 6 galeria.jpg',
      alt: 'Criança concentrada',
      classeCss: 'item-6'
    },
    {
      caminho: 'imagens/imagem 7 galeria.jpg',
      alt: 'Momento de descoberta',
      classeCss: 'item-7'
    }
  ];
}
