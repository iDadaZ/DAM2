import { Component } from '@angular/core';
import { heroe } from './heroe-model';

@Component({
  selector: 'app-heroes-heroe',
  standalone: false,
 // imports: [  ],
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})

export class HeroeComponent {

  heroes: heroe[] = [{
    bando: 'DC',
    nombre: 'Batman',
    edad: 34,
    planeta: 'Negro',
    hp: 100,
    poder: 'Dinero'
  },
  {
    bando: 'Marvel',
    nombre: 'Spider-Man',
    edad: 29,
    planeta: 'Tierra',
    hp: 85,
    poder: 'Hombre araña'
  },
  {
    bando: 'Toei Animation',
    nombre: 'Kakarot',
    edad: 29,
    planeta: 'Namek',
    hp: 120,
    poder: 'SSJ'
  }
]
}
