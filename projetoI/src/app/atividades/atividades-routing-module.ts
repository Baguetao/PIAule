import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [

  {
    path: 'atividade01',
    component: Atividade01
  },

  {
    path: 'atividade02',
    component: Atividade02
  },

  {
    path: 'atividade03',
    component: Atividade03
  },

  {
    path: 'atividade04',
    component: Atividade04
  },

  {
    path: 'atividade05',
    component: Atividade05
  },

  {
    path: 'atividade06',
    component: Atividade06
  },

  {
    path: 'atividade07',
    component: Atividade07
  },

  {
    path: 'atividade08',
    component: Atividade08
  },

  {
    path: 'atividade09',
    component: Atividade09
  },

  {
    path: 'atividade10',
    component: Atividade10
  },

  {
    path: 'atividade11',
    component: Atividade11
  },

  {
    path: 'atividade12',
    component: Atividade12
  }

];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class AtividadesRoutingModule {}