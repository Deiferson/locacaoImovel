import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImovelListaComponent } from './imovel-lista/imovel-lista.component';
import { ImovelDetalheComponent } from './imovel-detalhe/imovel-detalhe.component';



@NgModule({
  declarations: [
    ImovelListaComponent,
    ImovelDetalheComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ImovelModule { }
