import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './User/add-user/add-user.component';
import { DisplayUserComponent } from './User/display-user/display-user.component';
import { IfElseComponent } from './if-else/if-else.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    EmployeeComponent,
    UserComponent,
    AddUserComponent,
    DisplayUserComponent,
    IfElseComponent,
    SwitchCaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
