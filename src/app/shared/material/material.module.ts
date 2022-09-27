import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

const modules = [
  CommonModule,
  MatTableModule
]


@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})

export class MaterialModule { }
