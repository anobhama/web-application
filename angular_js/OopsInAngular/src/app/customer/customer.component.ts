import { Component, OnInit } from '@angular/core';
import { Customer } from './Customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  custList:Customer[] = [{custNo:1,custName:"Anu",custAdd:"PN Colony",city:"Nagercoil",country:"India"},
  {custNo:2,custName:"Tilak",custAdd:"Porur",city:"Chni",country:"India"},
  {custNo:3,custName:"Asu",custAdd:"Vadasery",city:"Nagercoil",country:"India"}];


  constructor() { }

  ngOnInit(): void {
  }

}
