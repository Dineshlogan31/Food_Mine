import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

const VALIDATOR_ERROR_MSG:any={
  required:'Should not be empty',
  email:'email is not valid'

}

@Component({
  selector: 'input-validator',
  templateUrl: './input-validator.component.html',
  styleUrls: ['./input-validator.component.css']
})
export class InputValidatorComponent implements OnInit,OnChanges {

  @Input()
  control!:AbstractControl;

  @Input()
  showErrorWhen:boolean=true;

  errorMessages:string[]=[];

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.changeValidation()
  }

  ngOnInit(): void {
   this.control.statusChanges.subscribe(()=>{
    this.changeValidation()
   })
   this.control.valueChanges.subscribe(()=>{
    this.changeValidation()
   })
  }

  changeValidation()
  {
    const errors=this.control.errors
    if(!errors)
    {
      this.errorMessages=[];
      return;
    }
     const errorkey=Object.keys(errors)

     this.errorMessages=errorkey.map(key=> VALIDATOR_ERROR_MSG[key])

  }

}
