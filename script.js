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

function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      console.log(add(num1, num2));
      break;
    case "-":
      console.log(subtract(num1, num2));
      break;
    case "*":
      console.log(multiply(num1, num2));
      break;
    case "/":
      console.log(divide(num1, num2));
      break;
    default:
      console.log("Derp");
  }
}

const message = document.querySelector("#message");
let currMessage = "0";

function messageUpdater(str) {
  if (currMessage == "0") {
    currMessage = str;
  } else {
    currMessage += str;
  }
  message.textContent = currMessage;
}

function clearMessage() {
  currMessage = "0";
  message.textContent = currMessage;
}

const calcBody = document.querySelector("#calcBody");

const buttons = [
  { displayName: "1", cssName: "one", type: "digit" },
  { displayName: "2", cssName: "two", type: "digit" },
  { displayName: "3", cssName: "three", type: "digit" },
  { displayName: "4", cssName: "four", type: "digit" },
  { displayName: "5", cssName: "five", type: "digit" },
  { displayName: "6", cssName: "six", type: "digit" },
  { displayName: "7", cssName: "seven", type: "digit" },
  { displayName: "8", cssName: "eight", type: "digit" },
  { displayName: "9", cssName: "nine", type: "digit" },
  { displayName: "0", cssName: "zero", type: "digit" },
  { displayName: "Clr", cssName: "clear", type: "clear" },
  { displayName: "+", cssName: "add", type: "function" },
  { displayName: "-", cssName: "subtract", type: "function" },
  { displayName: "X", cssName: "multiply", type: "function" },
  { displayName: "/", cssName: "divide", type: "function" },
  { displayName: "=", cssName: "equal", type: "operator" },
];

buttons.forEach(function (button) {
  const btn = document.createElement("button");
  btn.textContent = button.displayName;
  btn.classList.add(button.type);
  btn.style.gridArea = button.cssName;
  switch (button.type) {
    case "digit":
      btn.addEventListener("click", (e) => messageUpdater(button.displayName));
      break;
    case "clear":
      btn.addEventListener("click", (e) => clearMessage());
      break;
    default:
      break;
  }

  calcBody.appendChild(btn);
});
