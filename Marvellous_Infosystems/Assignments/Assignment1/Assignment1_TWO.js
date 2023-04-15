function Area(radius) {
    var area = 0;
    var pi = 3.14;
    area = pi * radius * radius;
    return area;
}
var radius = 5;
var area = Area(radius);
console.log("Area of circle for radius " + radius + " is :" + area);
/*

Output:

F:\Angular MEAN Stack\Assignments\Assignment 1>tsc Assignment1_TWO.ts

F:\Angular MEAN Stack\Assignments\Assignment 1>node Assignment1_TWO.js
Area of circle for radius 5 is :78.5

F:\Angular MEAN Stack\Assignments\Assignment 1>

*/ 
