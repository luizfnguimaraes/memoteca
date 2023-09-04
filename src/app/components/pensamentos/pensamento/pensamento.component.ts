import { Component, Input } from '@angular/core';
import { Pensamento } from './pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {
  
  @Input() pensamentinho : Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo1'
}

larguraPensamento() : string {
  if(this.pensamentinho.conteudo.length >=256){
    return 'pensamento-g'
  }
  return 'pensamento-p'
}

}