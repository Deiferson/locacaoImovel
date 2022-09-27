import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ImovelListaComponent } from './imovel-lista/imovel-lista.component';
import { ImovelDetalheComponent } from './imovel-detalhe/imovel-detalhe.component';

const imovelRoutes = [
  {path: 'imovel', component: ImovelListaComponent},
  {path: 'imovel/cadastrar', component: ImovelDetalheComponent},
  {path: 'imovel/:id', component: ImovelDetalheComponent},
  {path: 'imovel/:id/editar', component: ImovelDetalheComponent}

];

@NgModule({
  imports: [RouterModule.forChild(imovelRoutes)],
  exports: [RouterModule]
})

export class ImovelRoutingModule { }
