import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-lista',
  templateUrl: 'lista.component.html',
  standalone:false
})

export class dbzLista  {

  @Input('miLista')
  public listaPersonajes : Personaje[] = [{
    nombre: 'Trunks',
    fuerza : 5453354
  }]
}
