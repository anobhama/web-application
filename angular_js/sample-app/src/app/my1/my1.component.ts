import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my1',
  template: '<h3> no template </h3>',
})
export class My1Component implements OnInit {

  userMsg:string="Hi all its the 2nd component created";

  constructor() { }

  ngOnInit(): void {
  }

}
