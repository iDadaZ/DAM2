import { Component } from '@angular/core';
import { centro } from './centros.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-centros',
  templateUrl: 'centro.component.html',
  standalone: true,
  imports: [CommonModule]
})


export class CentroComponent {

  centros: centro[] = [
    {
      logo: 'https://iesplayamar.es/wp-content/uploads/2021/09/logo-ies-playamar.png',
      nombre: 'IES Playamar',
      localidad: 'Torremolinos',
      ciclos: ['Administración', 'Informática', 'Turismo']
    },
    {
      logo: 'https://i.ytimg.com/vi/h-OJaiznHWc/hqdefault.jpg',
      nombre: 'IES Jacaranda',
      localidad: 'Churriana',
      ciclos: ['Secundaria', 'Mates', 'Reposteria']
    },
    {
      logo: 'https://pbs.twimg.com/profile_images/1604311735/logo_400x400.png',
      nombre: 'IES Gerard Brenald',
      localidad: 'Alhaurin de la torre',
      ciclos: ['DAM', 'DAW', 'Secundaria'],
    }
  ];

  array : centro[] = [];
  posicion : number = 0;

  atras(){
    if(this.posicion > 0 )
      this.posicion = this.posicion -1 ;
  }

  paLante(){
    if(this.posicion < this.centros.length -1)
      this.posicion = this.posicion+ 1;
  }

  borrar(){
    if(this.centros.length > 0){
      const borrado = this.centros.splice(this.posicion,1)[0];
      this.array.push(borrado);

      if(this.posicion > this.centros.length){
        this.posicion = this.centros.length -1
    }
  }
}

anyadir(){
  if(this.array.length > 0){
    const añadido = this.array.pop()

    if(añadido){
      this.centros.splice(this.posicion,0,añadido)
    }
  }
}
}


