import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Binding';

myMsg:string="hello";

isDisabled:boolean=true;

num1:number=100;
num2:number=200;

addTwoNum()
{
  return this.num1+this.num2;
}

getTitle():string
{
  return this.title;
}

count: number = 0;
  buttonClicked():void {
    this.count += 1;
    console.log("Button Clicked");
  }
}