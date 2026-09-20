import { Component } from '@angular/core';

@Component({
  selector: 'app-atividade12',
  standalone: false,
  templateUrl: './atividade12.html',
  styleUrl: './atividade12.scss',
})
export class Atividade12 {

  nomeAluno = '';
  disciplinas = 1;
  mensagem = '';

  aumentar() {
    this.disciplinas++;
  }

  diminuir() {
    if (this.disciplinas > 1) {
      this.disciplinas--;
    }
  }

  realizarMatricula() {
    this.mensagem =
      'Matrícula realizada para ' +
      this.nomeAluno +
      ' com ' +
      this.disciplinas +
      ' disciplina(s).';
  }

}