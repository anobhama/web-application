import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing1',
  templateUrl: './routing1.component.html',
  styleUrls: ['./routing1.component.css']
})
export class Routing1Component implements OnInit {

  Routing1Title="I am component routing 1";
  constructor() { }

  ngOnInit(): void {
  }

}
