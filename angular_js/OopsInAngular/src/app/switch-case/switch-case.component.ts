import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.css']
})
export class SwitchCaseComponent implements OnInit {

  Cars:any[]=[
    { name :"BMW",      average:12,     color:"blue"},

    { name :"Ford",     average:10,     color:"yellow"},

    { name :"Suzuki",     average:18,    color:"silver"},

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
