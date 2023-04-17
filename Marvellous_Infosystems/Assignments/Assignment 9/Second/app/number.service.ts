import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  ChkPrime(num:number)
  {
    let f_boolStatus= false;
    let f_iCountOfFactors:number = 0;
    let f_iCount:number = 0;

    if(num == 1)
      return f_boolStatus=false;

    for(f_iCount=1;f_iCount<=num;f_iCount++)
    {
      if(f_iCountOfFactors > 2)
        break;

      if(num % f_iCount == 0)
        f_iCountOfFactors++; 
    }

    if(f_iCountOfFactors == 2)
      f_boolStatus = true;

    return f_boolStatus;
  }
}
