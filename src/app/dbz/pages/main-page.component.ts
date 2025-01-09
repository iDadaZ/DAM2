import { Component} from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';
import { addPersonaje } from '../components/addPersonaje/add-personaje.component';

@Component({
  standalone: false,
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{
  constructor( private DbzService: DbzService){}

  get personajes():Personaje[]{
    return this.DbzService.personajes;
  }

  OnDeletePersonaje(id: String): void{
    this.DbzService.DeletePersonajeId(id);
  }
  onNewPersonaje(Personaje : Personaje):void{
    this.DbzService.addPersonaje(Personaje);
  }
}
