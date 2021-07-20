import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.css']
})
export class IfElseComponent implements OnInit {


    showAction:boolean=true;

    contacts:any=[
      {name:"Anu",email:"anu@gmail.com"},
      {name:"Aji",email:"aji@gmail.com"},
      {name:"Asu",email:"asu@gmail.com"},
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
