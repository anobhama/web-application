import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  empList:Employee[]=[{empId:1,empName:"Anu",empSal:4000},
  {empId:2,empName:"Laksh",empSal:5000}];
  constructor() { }

  ngOnInit(): void {
  }

}
