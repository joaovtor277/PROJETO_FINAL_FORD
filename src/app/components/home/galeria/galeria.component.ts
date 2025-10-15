import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'] 
})
export class GaleriaComponent {
  
  indiceAtual = 0;

  
  imagensGaleria = [
    {
      caminho: 'imagens/imagem 1 galeria.jpg',
      alt: 'Criança sorrindo durante atividade',
    },
    {
      caminho: 'imagens/imagem 2 galeria.jpg',
      alt: 'Sala de aula inclusiva',
    },
    {
      caminho: 'imagens/imagem 3 galeria.jpg',
      alt: 'Profissional com família',
    },
    {
      caminho: 'imagens/imagem 4 galeria.jpg',
      alt: 'Crianças sorrindo juntas',
    },
    {
      caminho: 'imagens/imagem 5 galeria.jpg',
      alt: 'Atividade de artes',
    },
    {
      caminho: 'imagens/imagem 6 galeria.jpg',
      alt: 'Criança concentrada',
    },
    {
      caminho: 'imagens/imagem 7 galeria.jpg',
      alt: 'Momento de descoberta',
    }
  ];

  
  public slideAnterior(): void {
    if (this.indiceAtual > 0) {
      this.indiceAtual--;
    } else {
      
      this.indiceAtual = this.imagensGaleria.length - 1;
    }
  }

  
  public proximoSlide(): void {
    if (this.indiceAtual < this.imagensGaleria.length - 1) {
      this.indiceAtual++;
    } else {
     
      this.indiceAtual = 0;
    }
  }
}
