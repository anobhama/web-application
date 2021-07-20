import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routing1Component } from './routing1/routing1.component';
import { Routing2Component } from './routing2/routing2.component';

@NgModule({
  declarations: [
    AppComponent,
    Routing1Component,
    Routing2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
