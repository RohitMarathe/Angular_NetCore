import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  iCount:number = 0;
  space:string = "    \t";

  constructor(private stringObj:StringService) { }

  ngOnInit(): void {
  }

  CountNumberOfAlphabets(p_strInput:string):number
  {
    this.iCount = this.stringObj.CountNumberOfCharactersInAlphabets(p_strInput);
    return this.iCount;
  }

}
