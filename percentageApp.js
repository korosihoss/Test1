
let button = document.getElementById("button").addEventListener("click", () => {   
    let totalValue = document.getElementById("total-value").value;
    let pValue = document.getElementById("value").value;
    totalValue = parseInt(totalValue);
    pValue = parseInt(pValue);
    let outPut = document.getElementById("output");
    let result = pValue / 100 * totalValue;
    isNaN(result) ? outPut.innerHTML = `Wrong input. Enter number correctly`:  outPut.innerHTML = `${pValue}% of total number ${totalValue} is ${result.toFixed(1)}`;
});

document.getElementById("reset").addEventListener("click", () => {
    let totalValue = document.getElementById("total-value");
    let pValue = document.getElementById("value");
    totalValue.value = "";
    pValue.value = "";
});