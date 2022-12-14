import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProprietarioListaComponent } from './proprietario-lista/proprietario-lista.component';
import { ProprietarioDetalheComponent } from './proprietario-detalhe/proprietario-detalhe.component';
import { ProprietarioRoutingModule } from './proprietario.routing.module';



@NgModule({
  declarations: [
    ProprietarioListaComponent,
    ProprietarioDetalheComponent
  ],
  imports: [
    CommonModule,
    ProprietarioRoutingModule
  ]
})
export class ProprietarioModule { }
