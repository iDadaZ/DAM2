import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { addPersonaje } from './components/addPersonaje/add-personaje.component';
import { dbzLista } from './components/lista/lista.component';




@NgModule({
  declarations: [MainPageComponent,dbzLista,addPersonaje],
  exports:[MainPageComponent],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
