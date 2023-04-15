function IsItPrimeNumber(p_iNumber:number):boolean
{
	var f_boolStatus:boolean = false;
	var iCount:number = 1;
	
	if(p_iNumber == 2)
	{
		f_boolStatus = true;
		return f_boolStatus;
	}
	else if(IsEvenNumber(p_iNumber))
	{
		f_boolStatus = false;
		return f_boolStatus;
	}	
	
	var iDivisibleCount:number = 0;
	
	for(iCount=1;iCount<=p_iNumber;iCount++)
	{
		if(p_iNumber % iCount == 0)
			iDivisibleCount++;
	}
	if(iDivisibleCount == 2)
	{
		f_boolStatus = true;
		return f_boolStatus;
	}
	else if(iDivisibleCount > 2)
	{
		f_boolStatus = false;
		return f_boolStatus;
	}
		
	return f_boolStatus;
}

function IsEvenNumber(p_iNumber:number):boolean
{
	if(p_iNumber % 2 == 0)
		return true;
	else
		return false;
}

var InputNumber:number = 12;

if(InputNumber == 1)
	console.log("1 is a non-prime number");
else
{
	if(IsItPrimeNumber(InputNumber))
		console.log(InputNumber+ " is Prime Number");
	else	
		console.log(InputNumber + " is not Prime Number");
		
}

/*

outerput:

F:\Angular MEAN Stack\Assignments\Assignment 1>tsc Assignment_FOUR.ts

F:\Angular MEAN Stack\Assignments\Assignment 1>node Assignment_FOUR.js
9 is not Prime Number

F:\Angular MEAN Stack\Assignments\Assignment 1>tsc Assignment_FOUR.ts

F:\Angular MEAN Stack\Assignments\Assignment 1>node Assignment_FOUR.js
11 is Prime Number

F:\Angular MEAN Stack\Assignments\Assignment 1>tsc Assignment_FOUR.ts

F:\Angular MEAN Stack\Assignments\Assignment 1>node Assignment_FOUR.js
12 is not Prime Number

F:\Angular MEAN Stack\Assignments\Assignment 1>

*/