import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {


  myForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group(
      {
      //  var_name: [''],
      //  var_psw: ['']
        //validation step 1: add import //associate  validator to control
        var_name: ['', [Validators.required, Validators.minLength(10)]],
       var_psw: ['', [Validators.maxLength(5)]]
      });

  }

  //validation step 2: 
  get var_name() {
    return this.myForm.get('var_name');
  }
 
  get var_psw() {
    return this.myForm.get('var_psw');
  }
  //FormGroup - contains value that is a object 
  //this value object that contains your formControl properties
  
  onSubmit(value:string)
  {
console.log(' you submited data:'+value);
  }

  ngOnInit(): void {
  }

}
