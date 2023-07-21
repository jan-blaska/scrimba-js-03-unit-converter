/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn");
const inputField = document.getElementById("input-field");
let lengthEl = document.getElementById("length");
let volumeEl = document.getElementById("volume");
let massEl = document.getElementById("mass");
let inputNum = 0;
let convertNum = 0;
let unitArrMetric = ["meters", "liters", "kilos"];
let unitArrIMperial = ["feet", "gallons", "pounds"];

convertBtn.addEventListener("click", function() {
    inputNum = inputField.value;
    lengthEl.textContent = unitConverter(inputNum, "length");
    volumeEl.textContent = unitConverter(inputNum, "volume");
    massEl.textContent = unitConverter(inputNum, "mass");    
});

function unitConverter(inputNum, unit) {
    let i = 0;
    if (unit === "length") {
        convertNum = 3.281;
        i = 0;
    } else if (unit === "volume") {
        convertNum = 0.264;
        i = 1;
    } else {
        convertNum = 2.204;
        i = 2;
    }
    return (
        `
            ${inputNum} ${unitArrMetric[i]} = ${(inputNum * convertNum).toFixed(3)} ${unitArrIMperial[i]} 
            | 
            ${inputNum} ${unitArrIMperial[i] } = ${(1/convertNum * inputNum).toFixed(3)} ${unitArrMetric[i]}
        `
    )
}



