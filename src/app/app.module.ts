import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [AppComponent, BodyComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
