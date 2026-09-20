import { Component } from '@angular/core';

@Component({
  selector: 'app-atividade06',
  standalone: false,
  templateUrl: './atividade06.html',
  styleUrl: './atividade06.scss',
})
export class Atividade06 {

  quantidade = 0;

  aumentar() {
    this.quantidade++;
  }

  diminuir() {
    if (this.quantidade > 0) {
      this.quantidade--;
    }
  }

}