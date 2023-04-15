function DisplayFactors(InputNumber) {
    var iCount = 1;
    var lstFactors = new Array();
    for (iCount = 1; iCount < InputNumber; iCount++) {
        if (InputNumber % iCount == 0)
            lstFactors.push(iCount);
    }
    return lstFactors;
}
var InputNumber = 90;
var lstFactors = DisplayFactors(InputNumber);
var iCount = 0;
console.log("Factors of " + InputNumber + "are as shown below:");
for (iCount = 0; iCount < (lstFactors === null || lstFactors === void 0 ? void 0 : lstFactors.length); iCount++) {
    console.log(lstFactors[iCount]);
}
