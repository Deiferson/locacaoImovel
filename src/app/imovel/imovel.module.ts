import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImovelListaComponent } from './imovel-lista/imovel-lista.component';
import { ImovelDetalheComponent } from './imovel-detalhe/imovel-detalhe.component';
import { ImovelRoutingModule } from './imovel.routing.module';



@NgModule({
  declarations: [
    ImovelListaComponent,
    ImovelDetalheComponent
  ],
  imports: [
    CommonModule,
    ImovelRoutingModule
  ]
})
export class ImovelModule { }
