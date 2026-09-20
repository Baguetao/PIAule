import { Component } from '@angular/core';

@Component({
  selector: 'app-atividade11',
  standalone: false,
  templateUrl: './atividade11.html',
  styleUrl: './atividade11.scss',
})
export class Atividade11 {

  produto = 'Mouse Gamer';
  preco = 120;
  quantidade = 1;
  mensagem = '';

  aumentar() {
    this.quantidade++;
  }

  diminuir() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarCarrinho() {
    this.mensagem =
      'Adicionado ao carrinho: ' +
      this.quantidade +
      'x ' +
      this.produto;
  }

}