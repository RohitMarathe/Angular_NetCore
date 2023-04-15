function DisplayFactors(InputNumber:number):number[]
{
	var iCount = 1;
	var lstFactors:number[] = new Array();
	
	for(iCount = 1;iCount < InputNumber;iCount++)
	{
		if(InputNumber % iCount == 0)
			lstFactors.push(iCount);
	}
	
	return lstFactors;
}

var InputNumber:number = 90;

var lstFactors:number[] = DisplayFactors(InputNumber);

var iCount:number = 0;

console.log("Factors of " +InputNumber+"are as shown below:");

for(iCount = 0;iCount<lstFactors?.length;iCount++)
{	
	console.log(lstFactors[iCount]);
}

/*

Output:

F:\Angular MEAN Stack\Assignments\Assignment 1>tsc Assignment1_THREE.ts

F:\Angular MEAN Stack\Assignments\Assignment 1>node Assignment1_THREE.js
Factors of 90are as shown below:
1
2
3
5
6
9
10
15
18
30
45

F:\Angular MEAN Stack\Assignments\Assignment 1>

*/