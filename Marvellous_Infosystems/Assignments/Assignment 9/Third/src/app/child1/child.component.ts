import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  iNumber = 0;
  iNumberPrime = 0;
  bStatus = false;

  constructor(private obj:NumberService,private obj1:StringService) { }

  ngOnInit(): void {
  }

  CheckPrimeOrNot(p_iNumber:any)
  {
    this.iNumberPrime = Number(p_iNumber);
    this.bStatus = this.obj.IsPrime(Number(p_iNumber));
  }

  CountAlphabets(p_strInput:string)
  {
      this.iNumber = this.obj1.CountCapital(p_strInput);
  }

}
