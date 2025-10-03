import { Component } from '@angular/core';
import { FormacoesComponent } from "../../components/sobre/formacoes/formacoes.component";
import { QuemSouComponent } from "../../components/sobre/quem-sou/quem-sou.component";
import { InstituicoesComponent } from "../../components/sobre/instituicoes/instituicoes.component";
import { ObjetivoComponent } from "../../components/sobre/objetivo/objetivo.component";

@Component({
  selector: 'app-sobre-mim',
  imports: [FormacoesComponent, QuemSouComponent, InstituicoesComponent, ObjetivoComponent],
  templateUrl: './sobre-mim.component.html',
  styleUrl: './sobre-mim.component.css'
})
export class SobreMimComponent {

}
