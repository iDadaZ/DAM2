import { Component } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';
import { CentroComponent } from './centros/centro.component';
import { HeroesModule } from './heroes/heroes.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[ ContadorComponent, CentroComponent, HeroesModule]
})

export class AppComponent {
  public title : string = 'El work del dada'
}

