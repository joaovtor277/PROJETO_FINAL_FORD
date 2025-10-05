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
      citacao: 'Desde o primeiro encontro, senti que a pedagoga realmente enxergava minha filha como uma criança cheia de potencial, e não apenas pelo diagnóstico. As estratégias que ela usou para estimular a atenção e a socialização da Joyce foram incríveis. Em poucos meses, notei avanços que não tinha visto antes: ela passou a interagir mais e a se expressar melhor nas tarefas. Ter esse acompanhamento pedagógico especializado foi um divisor de águas para a nossa família.',
      autor: 'Jucilene Peixoto.',
      descricao: 'mãe de Joyce (12 anos, Autismo)',
      imagemUrl: 'imagens/jucilene.jpg' 
    },
    {
      citacao: '“A dedicação e o carinho da pedagoga fizeram toda diferença na vida do meu filho. O Adriel sempre teve muita vontade de aprender, mas precisava de alguém que entendesse o seu ritmo e suas limitações sem deixá-lo de lado. Com o acompanhamento individualizado e as atividades adaptadas, ele ganhou mais autonomia e confiança. Hoje, ele se comunica melhor e participa de tudo com muito mais segurança. Sou muito grata por todo o apoio e paciência nesse processo.”',
      autor: 'Ana Paula Procopio.',
      descricao: 'mãe de Adriel (22 anos, Síndrome de Down)',
      imagemUrl: '/imagens/anapaula1.jpg' 
    },
    {
      citacao: '“O Enzo sempre foi muito agitado e tinha dificuldade de se concentrar nas tarefas. A pedagoga trouxe um olhar acolhedor e ao mesmo tempo firme, ajudando ele a entender seus limites e desenvolver hábitos de estudo com leveza. Ela também me orientou sobre como lidar com as crises e criar uma rotina mais tranquila em casa. Hoje, o Enzo está mais focado, se sente capaz e feliz por aprender. Só tenho a agradecer pelo carinho e profissionalismo!”',
      autor: 'Aline Freitas.',
      descricao: 'mãe de Enzo (9 anos, Hiperatividade e TOD)',
      imagemUrl: 'imagens/aline.jpg' 
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