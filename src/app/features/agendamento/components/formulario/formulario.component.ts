import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Agendamento, AgendamentoService, DadosAluno } from '../../services/agendamento.service';
import { Router } from '@angular/router';
// NOVOS IMPORTS para Reactive Forms
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  // ADICIONADO ReactiveFormsModule aos imports
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  private router = inject(Router);
  private agendamentoService = inject(AgendamentoService);
  private fb = inject(FormBuilder); // Injeta o FormBuilder

  agendamentoResumo = signal<Agendamento | null>(null);

  // A propriedade do formulário
  formulario!: FormGroup;

  ngOnInit(): void {
    // Criação do formulário com suas regras de validação
    this.formulario = this.fb.group({
      nomeAluno: ['', [Validators.required, Validators.minLength(3)]],
      idade: [null, [Validators.required, Validators.min(1)]],
      nomeResponsavel: ['', [Validators.required, Validators.minLength(3)]],
      telefone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\)\s\d{5}-\d{4}$/)]],
      email: ['', [Validators.required, Validators.email]],
      observacoes: [''], // Campo opcional
      modalidade: ['', Validators.required],
      aceiteLgpd: [false, Validators.requiredTrue] // Validador para garantir que o checkbox seja marcado
    });

    const estadoAtual = this.agendamentoService.getAgendamentoState()();
    if (estadoAtual.servico && estadoAtual.data && estadoAtual.horario) {
      this.agendamentoResumo.set(estadoAtual);
    } else {
      this.router.navigate(['/agendamento/servicos']);
    }
  }

  // Getters para facilitar o acesso no HTML
  get nomeAluno() { return this.formulario.get('nomeAluno'); }
  get idade() { return this.formulario.get('idade'); }
  get nomeResponsavel() { return this.formulario.get('nomeResponsavel'); }
  get telefone() { return this.formulario.get('telefone'); }
  get email() { return this.formulario.get('email'); }
  get modalidade() { return this.formulario.get('modalidade'); }
  get aceiteLgpd() { return this.formulario.get('aceiteLgpd'); }

  confirmarAgendamento(): void {
    if (this.formulario.valid) {
      // Se o formulário for válido, extraímos os dados
      const dadosAluno: DadosAluno = {
        nomeAluno: this.formulario.value.nomeAluno,
        idade: this.formulario.value.idade,
        nomeResponsavel: this.formulario.value.nomeResponsavel,
        telefone: this.formulario.value.telefone,
        email: this.formulario.value.email,
        observacoes: this.formulario.value.observacoes
      };

      this.agendamentoService.setDadosAluno(dadosAluno);
      this.agendamentoService.setModalidade(this.formulario.value.modalidade);

      this.router.navigate(['/agendamento/confirmacao']);
    } else {
      // Se for inválido, marca todos os campos para exibir os erros
      this.formulario.markAllAsTouched();
      console.log('Formulário inválido');
    }
  }
}