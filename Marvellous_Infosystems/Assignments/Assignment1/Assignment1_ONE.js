function Maximum(num) {
    var max = num[0];
    var iCount = 0;
    for (iCount = 1; iCount < num.length; iCount++) {
        if (max < num[iCount])
            max = num[iCount];
    }
    return max;
}
var lstNumbers = [23, 89, 6];
var largestNumber = Maximum(lstNumbers);
console.log("One Type of declaration of array is: " + largestNumber);
var lstNumbersType2 = new Array(10, 20, 30, 140, 50, 60, 90);
var largestNumber = Maximum(lstNumbersType2);
console.log("Second Type of declaration of array is: " + largestNumber);
/*

Output:


F:\Angular MEAN Stack\Assignments\Assignment 1>tsc Assignment1_ONE.ts

F:\Angular MEAN Stack\Assignments\Assignment 1>node Assignment1_ONE.js
One Type of declaration of array is: 89
Second Type of declaration of array is: 140

F:\Angular MEAN Stack\Assignments\Assignment 1>

*/ 
