import { Component } from '@angular/core';

@Component({
  selector: 'app-atividade10',
  standalone: false,
  templateUrl: './atividade10.html',
  styleUrl: './atividade10.scss',
})
export class Atividade10 {

  usuario = '';
  senha = '';
  mensagem = '';

  entrar() {
    this.mensagem = 'Bem-vindo, ' + this.usuario + '!';
  }

}