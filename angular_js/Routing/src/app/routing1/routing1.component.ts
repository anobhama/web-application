import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-routing1',
  templateUrl: './routing1.component.html',
  styleUrls: ['./routing1.component.css']
})
export class Routing1Component implements OnInit {

  Routing1Title="I am component routing 1";
  result: number=0;
  
  constructor(service:SampleService) 
  {
    this.result=service.multi(40,2);
   }

  ngOnInit(): void {
  }

}
