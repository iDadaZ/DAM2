import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }


    public personajes: Personaje[] = [{

      id : uuid(),
      nombre : 'Goku',
      fuerza : 100000
    },
  {
    id : uuid(),
    nombre : 'Krilin',
    fuerza : 5000
  }];

  public addPersonaje(personaje: Personaje): void {
    const newPersonaje: Personaje = {id : uuid(), ...personaje}
    this.personajes.push(personaje);

  }

  public DeletePersonajeId(id: String) {
    this.personajes = this.personajes.filter ( personaje => personaje.id ! == id)
  }
}
