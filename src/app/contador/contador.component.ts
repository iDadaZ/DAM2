import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: 'contador.component.html',
  standalone: true
})


export class ContadorComponent {
  title = 'Contador';
  contador : number = 0;
  valor : number = 1;

  aumentarContador(): void {
    this.contador += this.valor
  }
  decrementarContador(): void{
    this.contador -= this.valor
  }
  restartContador(): void{
    this.contador = 0
  }
  aumentarValor(): void {
    this.valor += 1
  }
  decrementarValor(): void {
    this.valor -= 1
  }
  restartValor(): void {
    this.valor =1
  }
}
