import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-lista',
  templateUrl: 'lista.component.html'
})

export class dbzLista implements OnInit {

  public listaPersonajes : Personaje[] = [{
    nombre: 'Trunks',
    fuerza : 5453354
  }]
  constructor() { }

  ngOnInit() { }
}
