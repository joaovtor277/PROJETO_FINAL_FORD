import { Routes } from '@angular/router';
import { ServicosComponent } from './components/servicos/servicos.component';
import { DataHoraComponent } from './components/data-hora/data-hora.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ConfirmacaoComponent } from './components/confirmacao/confirmacao.component';

export const AGENDAMENTO_ROUTES: Routes = [
    
    { path: '', redirectTo: 'servicos', pathMatch: 'full' },
    { path: 'servicos', component: ServicosComponent },
    { path: 'data-hora', component: DataHoraComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'confirmacao', component: ConfirmacaoComponent },
];