import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProprietarioListaComponent } from './proprietario-lista/proprietario-lista.component';
import { ProprietarioDetalheComponent } from './proprietario-detalhe/proprietario-detalhe.component';

const proprietarioRoutes = [
  {path: 'proprietario', component: ProprietarioListaComponent},
  {path: 'proprietario/cadastrar', component: ProprietarioDetalheComponent},
  {path: 'proprietario/:id', component: ProprietarioDetalheComponent},
  {path: 'proprietario/:id/editar', component: ProprietarioDetalheComponent}

];

@NgModule({
  imports: [RouterModule.forChild(proprietarioRoutes)],
  exports: [RouterModule]
})

export class ProprietarioRoutingModule { }
