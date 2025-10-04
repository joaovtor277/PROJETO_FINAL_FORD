import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AgendamentoService } from '../../services/agendamento.service';


export interface Servico {
  id: number;
  nome: string;
  descricao: string;
  icone: string;
}

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent {
  private router = inject(Router);
  private agendamentoService = inject(AgendamentoService);


  servicos: Servico[] = [
    {
      id: 1,
      nome: 'Reforço Escolar',
      descricao: 'Apoio focado nas dificuldades específicas do aluno em matérias escolares.',
      icone: 'assets/icones/reforco-escolar.png' // Lembre-se de adicionar os ícones
    },
    {
      id: 2,
      nome: 'Acompanhamento Psicopedagógico',
      descricao: 'Intervenção completa para investigar e tratar as causas da dificuldade de aprendizagem.',
      icone: 'assets/icones/psicopedagogico.png'
    },
    {
      id: 3,
      nome: 'Orientação Familiar',
      descricao: 'Sessões com os pais para alinhar estratégias e criar um ambiente de apoio em casa.',
      icone: 'assets/icones/orientacao-familiar.png'
    }
  ];

  
  selecionarServico(servico: Servico): void {
    console.log('Serviço selecionado:', servico.nome);

    
    this.agendamentoService.setServico(servico);

    
    this.router.navigate(['/agendamento/data-hora']);
  }
}
