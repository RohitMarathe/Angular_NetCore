import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  private f_boolStatus=false;

  constructor() { }

  IsPrime(iNumber:number)
  {
    var iCount = 1;
    var iCountOfFactors = 0;

    if(iNumber <= 1)
      return this.f_boolStatus;

    for(iCount = 1;iCount <= iNumber;iCount++)
    {
      if(iCountOfFactors > 2)
        break;

      if(iNumber%iCount == 0)
        iCountOfFactors++;
    }
    if(iCountOfFactors == 2)
      this.f_boolStatus = true;

    return this.f_boolStatus;
  }

}
