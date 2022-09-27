import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImovelListaComponent } from './imovel/imovel-lista/imovel-lista.component';

const routes: Routes = [
  {path: '', component: ImovelListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
