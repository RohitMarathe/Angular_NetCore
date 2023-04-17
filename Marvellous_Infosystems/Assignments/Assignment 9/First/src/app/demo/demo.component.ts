import { Component, OnInit } from '@angular/core';
import { ArithematicService } from '../arithematic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public result:number = 0;
  public space:string = "\t  ";

  constructor(private arith:ArithematicService) { }

  ngOnInit(): void {
    
  }

  Addition(iNumber1:any,iNumber2:any):number
  {
    this.result = this.arith.Addition(Number(iNumber1),Number(iNumber2));
    return this.result;
  }

  Substraction(iNumber1:any,iNumber2:any):number
  {
    this.result = this.arith.Substraction(Number(iNumber1),Number(iNumber2));
    return this.result;
  }

}
