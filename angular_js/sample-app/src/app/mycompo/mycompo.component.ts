import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycompo',
  templateUrl: './mycompo.component.html',
  styleUrls: ['./mycompo.component.css']
})
export class MycompoComponent implements OnInit {

  myMsg:string="I created 1st component in angular";
  constructor() { }

  ngOnInit(): void {
  }

}
