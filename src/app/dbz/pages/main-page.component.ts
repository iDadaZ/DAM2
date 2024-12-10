import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Component({
  standalone: false,
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent implements OnInit {
  public personajes: Personaje[] = [{

    nombre : 'Goku',
    fuerza : 100000
  },
{
  nombre : 'Krilin',
  fuerza : 5000
}];

public onNewPersonaje(personaje: Personaje): void {
  console.log('MainPage');
  console.log(personaje);
}

  constructor() { }

  ngOnInit() { }
}
