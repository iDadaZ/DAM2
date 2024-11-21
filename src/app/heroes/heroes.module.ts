import { NgModule } from '@angular/core';

import { HeroeComponent } from './components/heroe/heroe.component';
import { ListaComponent } from './components/lista/lista.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ CommonModule],
  exports: [HeroeComponent, ListaComponent],
  declarations: [HeroeComponent, ListaComponent ],
  providers: [],
})
export class HeroesModule { }
