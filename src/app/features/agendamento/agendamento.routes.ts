// Conteúdo para: src/app/features/agendamento/agendamento.routes.ts

import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { DataHoraComponent } from './components/data-hora/data-hora.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ConfirmacaoComponent } from './components/confirmacao/confirmacao.component';

export const AGENDAMENTO_ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Rota padrão do agendamento
    { path: 'login', component: LoginComponent },
    { path: 'servicos', component: ServicosComponent },
    { path: 'data-hora', component: DataHoraComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'confirmacao', component: ConfirmacaoComponent },
];