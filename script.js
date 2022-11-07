let displayValue = "";

const digits = document.querySelectorAll(".digit");
digits.forEach((digit) => {
  digit.addEventListener("click", function (e) {
    displayValue += `${e.target.dataset.num}`;
    setDisplay();
  });
});

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clear);

const equalBtn = document.querySelector("#equal");
equalBtn.addEventListener("click", equals);

const addBtn = document.querySelector("#add");
addBtn.addEventListener("click", mathBtn);

const subtractBtn = document.querySelector("#subtract");
subtractBtn.addEventListener("click", mathBtn);

const multiplyBtn = document.querySelector("#multiply");
multiplyBtn.addEventListener("click", mathBtn);

const divideBtn = document.querySelector("#divide");
divideBtn.addEventListener("click", mathBtn);

clear();

function containsOperator() {
  const valuesToCheckFor = ["+", "-", "/", "*"];
  var displayArr = displayValue.split("");
  if (displayArr.some((e) => valuesToCheckFor.includes(e))) {
    return true;
  }
  return false;
}

function isOperator(str) {
  const valuesToCheckFor = ["+", "-", "/", "*"];
  if (valuesToCheckFor.includes(str)) {
    return true;
  }
  return false;
}

function mathBtn(e) {
  let type = e.target.id;
  if (containsOperator()) {
    equals();
  }
  const reference = { add: "+", subtract: "-", multiply: "*", divide: "/" };
  let valueToAppend = reference[type];
  displayValue += valueToAppend;
  setDisplay();
}

function equals() {
  let firstChar = displayValue[0];
  let lastChar = displayValue[displayValue.length - 1];
  if (isOperator(lastChar)) {
    let displayArr = displayValue.split("");
    displayArr.splice(displayArr.length - 1, 1);
    displayValue = displayArr.join("");
    setDisplay();
    return;
  }
  if (isOperator(firstChar)) {
    displayValue = "0" + displayValue;
  }

  const dataset = [
    {
      type: "add",
      symbol: "+",
      index: displayValue.indexOf("+"),
    },
    {
      type: "subtract",
      symbol: "-",
      index: displayValue.indexOf("-"),
    },
    {
      type: "multiply",
      symbol: "*",
      index: displayValue.indexOf("*"),
    },
    {
      type: "divide",
      symbol: "/",
      index: displayValue.indexOf("/"),
    },
  ];
  let cleanDataset = dataset.filter((a) => a.index > -1);
  let operatorData = cleanDataset[0];
  let numbers = displayValue.split(operatorData.symbol);
  let number1 = parseInt(numbers[0]);
  let number2 = parseInt(numbers[1]);
  if (number2 == 0 && operatorData.type == "divide") {
    displayValue = "Nice try";
    setDisplay();
    return;
  }
  let result = operate(operatorData.type, number1, number2);
  displayValue = "" + result;
  setDisplay();
}

function setDisplay() {
  const display = document.querySelector(".display");
  display.innerHTML = "";
  let displayText = document.createElement("p");
  displayText.classList.add("displayText");
  displayText.textContent = `${displayValue}`;
  display.appendChild(displayText);
}

function clear() {
  displayValue = "";
  setDisplay();
}

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function operate(type, num1, num2) {
  switch (type) {
    case "add":
      return add(num1, num2);
      break;
    case "subtract":
      return subtract(num1, num2);
      break;
    case "multiply":
      return multiply(num1, num2);
      break;
    case "divide":
      return divide(num1, num2);
      break;
  }
}
