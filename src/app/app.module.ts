import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImovelModule } from './imovel/imovel.module';
import { ProprietarioModule } from './proprietario/proprietario.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProprietarioModule,
    ImovelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
