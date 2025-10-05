import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Agendamento, AgendamentoService } from '../../services/agendamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.css']
})
export class ConfirmacaoComponent implements OnInit {
  private router = inject(Router);
  private agendamentoService = inject(AgendamentoService);

  // Sinal para guardar todos os dados do agendamento finalizado
  agendamentoFinal = signal<Agendamento | null>(null);

  ngOnInit(): void {
    const estadoFinal = this.agendamentoService.getAgendamentoState()();

    // Verificamos se todos os dados necessários existem
    if (estadoFinal.servico && estadoFinal.data && estadoFinal.horario && estadoFinal.dadosAluno) {
      this.agendamentoFinal.set(estadoFinal);
    } else {
      // Se o usuário chegou aqui sem passar pelas outras etapas,
      // o redirecionamos para o início para evitar erros.
      this.router.navigate(['/agendamento/servicos']);
    }
  }

  // Função para iniciar um novo agendamento
  novoAgendamento(): void {
    // Aqui poderíamos limpar o estado no serviço, se necessário.
    // Por enquanto, apenas navegamos para o início do fluxo.
    this.router.navigate(['/agendamento/servicos']);
  }

  // Função para finalizar e ir para a página inicial
  finalizar(): void {
    this.router.navigate(['/']); // Navega para a Home
  }
}
