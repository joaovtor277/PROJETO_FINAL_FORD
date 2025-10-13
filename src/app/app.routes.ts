

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreMimComponent } from './pages/sobre-mim/sobre-mim.component';
import { FaqComponent } from './pages/faq/faq.component';
import { TermosDeUsoComponent } from './pages/termos-de-uso/termos-de-uso.component';

export const routes: Routes = [
 
    { path: '', component: HomeComponent },      
    { path: 'sobre', component: SobreMimComponent },
    { path: 'faq', component: FaqComponent }, 
    { path: 'termos-de-uso', component: TermosDeUsoComponent },
    
    {path: 'agendamento', 
    loadChildren: () => import('./features/agendamento/agendamento.routes')
                            .then(m => m.AGENDAMENTO_ROUTES) },
    { path: '**', redirectTo: '', pathMatch: 'full' } 
];

