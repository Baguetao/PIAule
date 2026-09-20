import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Atividade01 } from './atividade01/atividade01';
import { Atividade02 } from './atividade02/atividade02';
import { Atividade03 } from './atividade03/atividade03';
import { Atividade04 } from './atividade04/atividade04';


const routes: Routes = [
  {
    path: 'atividade01',
    component: Atividade01
  },


  {
    path: 'atividade02',
    component: Atividade02
  }
,

  {
    path: 'atividade03',
    component: Atividade03
  }
  ,

  {
    path: 'atividade04',
    component: Atividade04
  }


];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtividadesRoutingModule {}
