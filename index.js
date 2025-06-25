//Event handler for when a digit button is pressed
let newLine = true;
let value1 = "";
let currentOperator = "";

function digitBtnPressed(button) {
  if (newLine) {
    document.getElementById("inputBox").value = button;
    newLine = false;
  } else {
    let currentValue = document.getElementById("inputBox").value;
    document.getElementById("inputBox").value = currentValue + button;
  }
}
//Event handler for AC, clear all button
function clearInput() {
  document.getElementById("inputBox").value = 0;
  newLine = true;
}

// Event handler for operators
function operatorBtn(operator) {
  currentOperator = operator;
  value1 = parseInt(document.getElementById("inputBox").value);
  newLine = true;
}

//Event handler for equals to button
function equalsBtn() {
  let value2 = parseInt(document.getElementById("inputBox").value);
  var finalTotal;

  switch (currentOperator) {
    case "+":
      finalTotal = value1 + value2;
      break;
    case "-":
      finalTotal = value1 - value2;
      break;
    case "x":
      finalTotal = value1 * value2;
      break;
    case "/":
      finalTotal = value1 / value2;
      break;
  }
  document.getElementById("inputBox").value = finalTotal;
  value1 = 0;
  newLine = true;
}
