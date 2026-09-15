import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Atividade01 } from './atividade01/atividade01';

const routes: Routes = [
  {
    path: 'atividade01',
    component: Atividade01
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtividadesRoutingModule {}
