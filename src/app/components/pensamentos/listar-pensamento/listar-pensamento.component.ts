import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  constructor(private service : PensamentoService){}
  listaPensamentos : Pensamento[] = []

  ngOnInit():void {
    this.service.listar().subscribe((data) => {
      this.listaPensamentos = data
    })
  }
}