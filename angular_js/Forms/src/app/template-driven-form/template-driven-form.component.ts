import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {


  vname:string="";
  vpsw:string="";
  constructor() { }

  onSubmit(myForm:any)
  {
    console.log('Form data :' ,myForm);
    this.vname=myForm.var_name;
    this.vpsw=myForm.var_psw;
  }

  ngOnInit(): void {
  }

}
