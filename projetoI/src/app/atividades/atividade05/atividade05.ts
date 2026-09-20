import { Component } from '@angular/core';

@Component({
  selector: 'app-atividade05',
  standalone: false,
  templateUrl: './atividade05.html',
  styleUrl: './atividade05.scss',
})
export class Atividade05 {

  curtidas = 0;

  curtir() {
    this.curtidas++;
  }

}