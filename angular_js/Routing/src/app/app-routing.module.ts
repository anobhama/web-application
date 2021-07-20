import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Routing1Component } from './routing1/routing1.component';
import { Routing2Component } from './routing2/routing2.component';

const routes: Routes = [

  {path:"Routing1",component:Routing1Component},
  {path:"Routing2",component:Routing2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
