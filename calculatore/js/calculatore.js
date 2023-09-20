var digit = 0;
var total = 0;
var data;

var lastAction;

function ondisplay() {
  data = document.getElementById("Display").innerHTML = digit;
  console.log("adat", data);
}
ondisplay();
function onRemoveScreen() {
  document.getElementById("Display").innerHTML = 0;
  digit = 0;
}

function onaddDigit(item) {
  digit += item;
  currentInput = item;

  document.getElementById("Display").innerHTML = digit;
  console.log("numbr", digit);
}
var operation;
function onsign(index) {
  digit += index;
  lastAction = digit;
  digit = "";
  console.log(index, "index");
  operation = ["+", "-", "*", "/"].includes(index) ? index : null;
  document.getElementById("Display").innerHTML = digit;

  document.getElementById("Display").innerHTML = operation;
}
function onCalculation() {
  if (operation == "+") {
    total = parseFloat(lastAction) + parseFloat(digit);
    console.log("total++", total);
  } else if (operation == "-") {
    total = parseFloat(lastAction) - parseFloat(digit);
    console.log("totle--", total);
  } else if (operation == "*") {
    total = parseFloat(lastAction) * parseFloat(digit);
    console.log("**totle", total);
  } else if (operation == "/") {
    total = parseFloat(lastAction) / parseFloat(digit);
    console.log("total//", total);
  } else if (operation == "%") {
    total = parseFloat(lastAction) % parseFloat(digit);
    console.log("total%%", total);
  }

  document.getElementById("Display").innerHTML = total;
}
