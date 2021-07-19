import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my1',
  templateUrl: './my1.component.html',
  styleUrls: ['./my1.component.css']
})
export class My1Component implements OnInit {

  userMsg:string="Hi all its the 2nd component created";

  constructor() { }

  ngOnInit(): void {
  }

}
