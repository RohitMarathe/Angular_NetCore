function Fibonaci(p_iNumber) {
    var iNumber1 = 0;
    var iNumber2 = 1;
    var Sum = 0;
    while (Sum < p_iNumber) {
        console.log(iNumber2);
        Sum = iNumber1 + iNumber2;
        iNumber1 = iNumber2;
        iNumber2 = Sum;
    }
}
Fibonaci(12);
