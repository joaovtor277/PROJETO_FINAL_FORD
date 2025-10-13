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


  agendamentoFinal = signal<Agendamento | null>(null);

  ngOnInit(): void {
    const estadoFinal = this.agendamentoService.getAgendamentoState()();

    if (estadoFinal.servico && estadoFinal.data && estadoFinal.horario && estadoFinal.dadosAluno) {
      this.agendamentoFinal.set(estadoFinal);
    } else {
      
      this.router.navigate(['/agendamento/servicos']);
    }
  }


  novoAgendamento(): void {
  
    this.router.navigate(['/agendamento/servicos']);
  }

  finalizar(): void {
    this.router.navigate(['/']); 
  }
}
