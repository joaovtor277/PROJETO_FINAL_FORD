import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendamentoService } from '../../services/agendamento.service';
import { Router } from '@angular/router';
import { Servico } from '../servicos/servicos.component';
import { FormsModule } from '@angular/forms'; // Precisamos para o ngModel

@Component({
  selector: 'app-data-hora',
  standalone: true,
  imports: [CommonModule, FormsModule], // Adicione FormsModule
  templateUrl: './data-hora.component.html',
  styleUrls: ['./data-hora.component.css']
})
export class DataHoraComponent implements OnInit {
  private router = inject(Router);
  private agendamentoService = inject(AgendamentoService);

  
  servicoSelecionado = signal<Servico | null>(null);

  
  horariosDisponiveis: string[] = [
    '08:00', '09:00', '10:00', '11:00',
    '14:00', '15:00', '16:00', '17:00'
  ];

 
  dataSelecionada: string = '';
  horarioSelecionado: string = '';

  ngOnInit(): void {
    
    const estadoAtual = this.agendamentoService.getAgendamentoState()();
    if (estadoAtual.servico) {
      this.servicoSelecionado.set(estadoAtual.servico);
    } else {
     
      this.router.navigate(['/agendamento/servicos']);
    }
  }

  continuarAgendamento(): void {
    if (this.dataSelecionada && this.horarioSelecionado) {
      
      this.agendamentoService.setData(this.dataSelecionada);
      this.agendamentoService.setHorario(this.horarioSelecionado);

     
      this.router.navigate(['/agendamento/formulario']);
    } else {
      alert('Por favor, selecione uma data e um horário.');
    }
  }
}