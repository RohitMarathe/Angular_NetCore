import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  status = false;
  InputNumber:number = 0;
  space:string="         ";

  constructor(private numberObj:NumberService) { }

  ngOnInit(): void {
  }

  IsPrime(iNumber:any)
  {
    this.InputNumber = Number(iNumber);
    this.status = this.numberObj.ChkPrime(iNumber);
  }

}
