function Fibonaci(p_iNumber:number):void
{
	var iNumber1:number = 0;
	var iNumber2:number = 1;
	
	var Sum:number = 0;
	
	while(Sum < p_iNumber)
	{
		console.log(iNumber2);
		Sum = iNumber1+iNumber2;
		iNumber1 = iNumber2;
		iNumber2 = Sum;
	}
}

Fibonaci(12);

/*

Output:

F:\Angular MEAN Stack\Assignments\Assignment 1>tsc Assignment_FIVE.ts

F:\Angular MEAN Stack\Assignments\Assignment 1>node Assignment_FIVE.js
1
1
2
3
5
8

F:\Angular MEAN Stack\Assignments\Assignment 1>

*/