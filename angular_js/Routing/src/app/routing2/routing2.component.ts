import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-routing2',
  templateUrl: './routing2.component.html',
  styleUrls: ['./routing2.component.css']
})
export class Routing2Component implements OnInit {

  Routing2Title="I am component routing 2";
  result: number=0;

  //creating reference to service
  //dependancy injection
  constructor(service: SampleService)
   { 
     this.result=service.add(10,20,30,40,50);
   }

  ngOnInit(): void {
  }

}
