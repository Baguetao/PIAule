import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AtividadesRoutingModule } from './atividades-routing-module';

import { Atividade01 } from './atividade01/atividade01';
import { Atividade02 } from './atividade02/atividade02';
import { Atividade03 } from './atividade03/atividade03';
import { Atividade04 } from './atividade04/atividade04';
import { Atividade05 } from './atividade05/atividade05';
import { Atividade06 } from './atividade06/atividade06';
import { Atividade07 } from './atividade07/atividade07';
import { Atividade08 } from './atividade08/atividade08';
import { Atividade09 } from './atividade09/atividade09';
import { Atividade10 } from './atividade10/atividade10';
import { Atividade11 } from './atividade11/atividade11';
import { Atividade12 } from './atividade12/atividade12';

@NgModule({
  declarations: [
    Atividade01,
    Atividade02,
    Atividade03,
    Atividade04,
    Atividade05,
    Atividade06,
    Atividade07,
    Atividade08,
    Atividade09,
    Atividade10,
    Atividade11,
    Atividade12
  ],

  imports: [
    CommonModule,
    FormsModule,
    AtividadesRoutingModule
  ]
})
export class AtividadesModule {}