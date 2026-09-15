import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AtividadesRoutingModule } from './atividades-routing-module';
import { Atividade01 } from './atividade01/atividade01';

@NgModule({
  declarations: [Atividade01],
  imports: [CommonModule, AtividadesRoutingModule],
})
export class AtividadesModule {}
