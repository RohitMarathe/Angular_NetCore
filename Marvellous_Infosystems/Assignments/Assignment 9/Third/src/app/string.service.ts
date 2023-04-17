import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  

  constructor() { }

  CountCapital(p_strInput:string):number
  {
      var iCount = 0;
      var iAsciiCode = 0;
      var iCountOfAlphabets:number = 0;

      for(iCount = 0;iCount<p_strInput.length;iCount++)
      {
          iAsciiCode = p_strInput.charCodeAt(iCount);

          if(iAsciiCode >= 65 && iAsciiCode <= 91)
          {
            iCountOfAlphabets++;
          }
      }

      return iCountOfAlphabets;
  }
}
