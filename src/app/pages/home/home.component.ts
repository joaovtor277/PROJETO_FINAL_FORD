import { Component } from '@angular/core';
import { HeroComponent } from '../../components/home/hero/hero.component';
import { ComoPossoAjudarComponent } from '../../components/home/como-posso-ajudar/como-posso-ajudar.component';
import { GaleriaComponent } from '../../components/home/galeria/galeria.component';
import { DepoimentosComponent } from '../../components/home/depoimentos/depoimentos.component';
import { BotaoCtaComponent } from '../../components/home/botao-cta/botao-cta.component';


@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    HeroComponent,
    ComoPossoAjudarComponent,
    GaleriaComponent,
    DepoimentosComponent,
    BotaoCtaComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { }