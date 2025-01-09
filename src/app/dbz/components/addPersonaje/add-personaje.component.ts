import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'add-personaje',
  templateUrl: 'add-personaje.component.html'
})

export class addPersonaje {

  @Output()
  public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter()

  public personaje: Personaje = {
    nombre: '',
    fuerza: 0
  };

  public verPersonaje():void{
    console.log(this.personaje)
    if ( this.personaje.nombre.length === 0) return;

    this.onNewPersonaje.emit(this.personaje);

    this.personaje={
      nombre: "",
      fuerza: 0
    };
    //this.personaje.nombre = '';
    //this.personaje.fuerza = 0;
  }
}
