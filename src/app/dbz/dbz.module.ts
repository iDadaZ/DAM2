import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { addPersonaje } from './components/addPersonaje/add-personaje.component';
import { dbzLista } from './components/lista/lista.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [MainPageComponent,dbzLista,addPersonaje],
  exports:[MainPageComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
