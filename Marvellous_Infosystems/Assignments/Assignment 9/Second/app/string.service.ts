import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  CountNumberOfCharactersInAlphabets(p_strInput:string):number
  {

    let iCntOfAlphabets:number = 0;
    let iCount = 0;
    let iAsciiCode = 0;

    for(iCount=0;iCount<p_strInput.length;iCount++)
    {
      iAsciiCode = p_strInput.charCodeAt(iCount);
     // alert(iAsciiCode);

      if(iAsciiCode <= 65 || iAsciiCode <= 91)
        iCntOfAlphabets++;
    }

    return iCntOfAlphabets;

  }
}
