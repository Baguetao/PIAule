import { Component } from '@angular/core';

@Component({
  selector: 'app-atividade09',
  standalone: false,
  templateUrl: './atividade09.html',
  styleUrl: './atividade09.scss',
})
export class Atividade09 {

  produto = 'Mouse Gamer';
  estoque = 10;

  aumentarEstoque() {
    this.estoque++;
  }

  diminuirEstoque() {
    if (this.estoque > 0) {
      this.estoque--;
    }
  }

}