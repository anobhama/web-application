import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycompoComponent } from './mycompo/mycompo.component';
import { My1Component } from './my1/my1.component';

@NgModule({
  declarations: [
    AppComponent,
    MycompoComponent,
    My1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
