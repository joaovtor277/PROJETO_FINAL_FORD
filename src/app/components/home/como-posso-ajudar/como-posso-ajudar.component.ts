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
      titulo: 'Avaliação Psicopedagógica',
      descricao: 'Uma análise detalhada para entender as forças e desafios do aprendizado, identificando as melhores estratégias para o desenvolvimento educacional.',
      isOpen: false
    },
    {
      icone: 'imagens/icone individuo.png',
      titulo: 'Intervenção Individualizada',
      descricao: 'Planos de ação personalizados com atividades e técnicas específicas para superar dificuldades de aprendizagem e potencializar habilidades.',
      isOpen: false
    },
    {
      icone: 'imagens/icone familia.png',
      titulo: 'Orientação Parental',
      descricao: 'Apoio e direcionamento para pais e responsáveis, oferecendo ferramentas para criar um ambiente estimulante e positivo para o aprendizado em casa.',
      isOpen: false
    },
    {
      icone: 'imagens/icone consulta pedagogica.png',
      titulo: 'Consultoria Pedagógica',
      descricao: 'Assessoria para escolas e educadores na implementação de práticas inclusivas e no desenvolvimento de currículos adaptados às diversas necessidades dos alunos.',
      isOpen: false
    }
  ];

  toggleServico(servicoClicado: any) {
    this.listaDeServicos.forEach(servico => {
      if (servico !== servicoClicado) {
        servico.isOpen = false;
      }
    });

    servicoClicado.isOpen = !servicoClicado.isOpen;
  }
}


