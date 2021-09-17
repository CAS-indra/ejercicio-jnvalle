import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { BodyComponent } from './body/body.component';
import { TransaccionesModule } from './transacciones/transacciones.module';

@NgModule({
  declarations: [AppComponent, BodyComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, TransaccionesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
