import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: []
})
export class PrimeiroComponenteComponent implements OnInit {

  meutitulo = "Vai Corinthians!";

  clientes = [
    {
      id: 1,
      nome: "José Trajano",
      ativo: true
    },
    {
      id: 2,
      nome: "Ulisses Costa",
      ativo: false
    },
    {
      id: 10,
      nome: "Craque Neto",
      ativo: true
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
