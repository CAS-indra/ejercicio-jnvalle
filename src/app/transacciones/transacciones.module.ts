import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrHeadComponent } from './tr-head/tr-head.component';



@NgModule({
  declarations: [
    TrHeadComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TrHeadComponent
  ]
})
export class TransaccionesModule { }
