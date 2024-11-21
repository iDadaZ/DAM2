import { Component } from '@angular/core';
import { escenario } from './lista-model';

@Component({
  selector: 'app-lista',
  standalone: false,
 // imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  escenarios : escenario[] = [{
    logo: 'https://media.vandal.net/i/620x480/10-2024/18/202410188375945_1.jpg',
    nombre: 'Namek'
  },{
    logo: 'https://media.vandal.net/i/620x475/10-2024/18/202410188375945_4.jpg',
    nombre: 'Ciudad'
  },{
    logo: 'https://media.vandal.net/i/620x474/10-2024/18/202410188375945_7.jpg',
    nombre:'Camara del tiempo'
  }
]
  array: escenario[] = [];
  posicion : number = 0;

  retroceder(){
    if(this.posicion > 0 )
      this.posicion = this.posicion -1
  }

  avanzar(){
    if(this.posicion < this.escenarios.length)
      this.posicion = this.posicion +1
  }
}
