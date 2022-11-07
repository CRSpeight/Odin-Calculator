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

const addBtn = document.querySelector("#add");
addBtn.addEventListener("click", mathBtn);

const subtractBtn = document.querySelector("#subtract");
subtractBtn.addEventListener("click", mathBtn);

const multiplyBtn = document.querySelector("#multiply");
multiplyBtn.addEventListener("click", mathBtn);

const divideBtn = document.querySelector("#divide");
divideBtn.addEventListener("click", mathBtn);

clear();

function mathBtn(e) {
  let type = e.target.id;
  const reference = { add: "+", subtract: "-", multiply: "*", divide: "/" };
  let valueToAppend = reference[type];
  displayValue += valueToAppend;
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
