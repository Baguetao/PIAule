import { Component } from '@angular/core';

@Component({
  selector: 'app-atividade02',
  standalone: false,
  templateUrl: './atividade02.html',
  styleUrl: './atividade02.scss',
})
export class Atividade02 {

produto = 'teclado';
preco = 150;
quantidade = 3;


get total(): number {
    return this.preco * this.quantidade;


}

}