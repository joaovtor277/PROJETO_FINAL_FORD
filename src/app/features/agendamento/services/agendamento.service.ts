import { Injectable, signal } from '@angular/core';
import { Servico } from '../components/servicos/servicos.component'; 


export interface DadosAluno {
  nomeAluno: string;
  idade: number | null;
  nomeResponsavel: string;
  telefone: string;
  email: string;
  observacoes?: string; 
}

export interface Agendamento {
  servico: Servico | null;
  data: string | null;
  horario: string | null;
  dadosAluno: DadosAluno | null;
  modalidade: string | null;

}

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  private agendamentoState = signal<Agendamento>({
    servico: null,
    data: null,
    horario: null,
    dadosAluno: null,
    modalidade: null,
  });

  constructor() { }


  setServico(servico: Servico) {
    this.agendamentoState.update(agendamentoAtual => ({
      ...agendamentoAtual,
      servico: servico
    }));
    console.log('Serviço salvo no service:', this.agendamentoState().servico?.nome);
  }

  setData(data: string) {
    this.agendamentoState.update(agendamentoAtual => ({
      ...agendamentoAtual,
      data: data
    }));
    console.log('Data salva no service:', this.agendamentoState().data);
  }

  setHorario(horario: string) {
    this.agendamentoState.update(agendamentoAtual => ({
      ...agendamentoAtual,
      horario: horario
    }));
    console.log('Horário salvo no service:', this.agendamentoState().horario);
  }

  setDadosAluno(dados: DadosAluno) {
    this.agendamentoState.update(agendamentoAtual => ({
      ...agendamentoAtual,
      dadosAluno: dados
    }));
    console.log('Dados do aluno salvos no service:', this.agendamentoState().dadosAluno);
  }

  setModalidade(modalidade: string) {
    this.agendamentoState.update(agendamentoAtual => ({
      ...agendamentoAtual,
      modalidade: modalidade
    }));
    console.log('Modalidade salva no service:', this.agendamentoState().modalidade);
  }

  getAgendamentoState() {
    return this.agendamentoState.asReadonly();
  }
}