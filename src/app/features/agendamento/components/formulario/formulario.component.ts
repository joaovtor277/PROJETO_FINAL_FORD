import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Agendamento, AgendamentoService, DadosAluno } from '../../services/agendamento.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Servico } from '../servicos/servicos.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  private router = inject(Router);
  private agendamentoService = inject(AgendamentoService);
  agendamentoResumo = signal<Agendamento | null>(null);
  

  
  dadosAluno: DadosAluno = {
    nomeAluno: '',
    idade: null,
    nomeResponsavel: '',
    telefone: '',
    email: '',
    observacoes: ''
  };

  ngOnInit(): void {
    const estadoAtual = this.agendamentoService.getAgendamentoState()();
    if (estadoAtual.servico && estadoAtual.data && estadoAtual.horario) {
      this.agendamentoResumo.set(estadoAtual);
    } else {
      
      this.router.navigate(['/agendamento/servicos']);
    }
  }

  confirmarAgendamento(): void {
    
    if (this.dadosAluno.nomeAluno && this.dadosAluno.idade && this.dadosAluno.nomeResponsavel && this.dadosAluno.telefone && this.dadosAluno.email) {
      
      this.agendamentoService.setDadosAluno(this.dadosAluno);

      
      this.router.navigate(['/agendamento/confirmacao']);
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }
}


