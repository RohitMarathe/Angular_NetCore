import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithematicService {

  constructor() { }

  Addition(number1:number,number2:number):number
  {
    return number1+number2;
  }

  Substraction(number1:number,number2:number):number
  {
    return number1-number2;
  }
}
