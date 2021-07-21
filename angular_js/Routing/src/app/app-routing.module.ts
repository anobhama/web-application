import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ProductByIdComponent } from './product-by-id/product-by-id.component';
import { ProductComponent } from './product/product.component';
import { Routing1Component } from './routing1/routing1.component';
import { Routing2Component } from './routing2/routing2.component';

const routes: Routes = [

  {path:"Routing1",component:Routing1Component},
  {path:"Routing2",component:Routing2Component},
  {path:"Product",component:ProductComponent},
  {path:"Product/byid/:id", component:ProductByIdComponent},
  {path:"",component:HomeComponent},
  {path:"**",component:ErrorComponent}, //always at end 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
