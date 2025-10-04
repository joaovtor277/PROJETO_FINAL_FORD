import { Component } from '@angular/core';
import { CommonModule as commonModule } from '@angular/common';

@Component({
  selector: 'app-depoimentos',
  imports: [commonModule],
  templateUrl: './depoimentos.component.html',
  styleUrl: './depoimentos.component.css'
})
export class DepoimentosComponent {

  listaDepoimentos = [
    {
      citacao: '"A Alessandra foi um divisor de águas na jornada do nosso filho. Com sua abordagem sensível e técnicas eficazes, vimos uma melhora incrível não só nas notas, mas na confiança e no prazer em aprender. Somos eternamente gratos."',
      autor: 'Jucilene Peixoto.',
      descricao: 'Mãe do joyce, 12 anos',
      imagemUrl: 'assets/imagens/depoimento-1.jpg' 
    },
    {
      citacao: '"Como diretor de uma escola, posso afirmar que a consultoria da Alessandra transformou nossa abordagem de inclusão. Ela nos deu ferramentas práticas e uma nova perspectiva que beneficiaram toda a comunidade escolar."',
      autor: 'Ana Paula Procopio.',
      descricao: 'Diretor Escolar',
      imagemUrl: 'assets/imagens/depoimento-2.jpg' 
    },
    {
      citacao: '"Meu filho tinha muita dificuldade de concentração. O trabalho individualizado e o carinho da Alessandra o ajudaram a se encontrar nos estudos e a desenvolver seu potencial. Hoje ele é um aluno muito mais feliz e seguro."',
      autor: 'Aline Freitas.',
      descricao: 'Mãe da Sofia, 10 anos',
      imagemUrl: 'assets/imagens/depoimento-3.jpg' 
    }
  ];

  depoimentoAtualIndex = 0;

  constructor() { }


  mostrarProximo(): void {
    this.depoimentoAtualIndex = (this.depoimentoAtualIndex + 1) % this.listaDepoimentos.length;
  }

  
  mostrarAnterior(): void {
    if (this.depoimentoAtualIndex === 0) {
      
      this.depoimentoAtualIndex = this.listaDepoimentos.length - 1;
    } else {
      
      this.depoimentoAtualIndex = this.depoimentoAtualIndex - 1;
    }
  }

}