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
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "x":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
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

function messageParser() {
  // prettier-ignore
  const seperators = [{reg:/\+/g,val:"+"},{reg:/\-/g,val:"-"},{reg:/\x/g,val:"x"},{reg:/\//g,val:"/"}];
  let newStr = currMessage.slice(0);
  seperators.forEach(
    (element) => (newStr = newStr.replace(element.reg, "," + element.val + ","))
  );
  return newStr.split(",");
}

function equals() {
  const seperators = ["x", "/", "+", "-"];
  let parsedQuery = messageParser();
  seperators.forEach(function (s) {
    while (parsedQuery.indexOf(s) > -1) {
      let operatorPos = parsedQuery.indexOf(s);
      let subQuery = parsedQuery.splice(operatorPos - 1, 3);
      parsedQuery.splice(
        operatorPos - 1,
        0,
        operate(subQuery[0], subQuery[1], subQuery[2])
      );
    }
  });
  clearMessage();
  messageUpdater(parsedQuery);
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
  { displayName: "C", cssName: "clear", type: "clear" },
  { displayName: "+", cssName: "add", type: "function" },
  { displayName: "-", cssName: "subtract", type: "function" },
  { displayName: "x", cssName: "multiply", type: "function" },
  { displayName: "/", cssName: "divide", type: "function" },
  { displayName: "=", cssName: "equal", type: "operator" },
];

buttons.forEach(function (button) {
  const btn = document.createElement("button");
  btn.textContent = button.displayName;
  btn.classList.add(button.type);
  btn.style.gridArea = button.cssName;
  switch (button.type) {
    case "function":
    case "digit":
      btn.addEventListener("click", (e) => messageUpdater(button.displayName));
      break;
    case "clear":
      btn.addEventListener("click", () => clearMessage());
      break;
    case "operator":
      btn.addEventListener("click", () => equals());
      break;
    default:
      break;
  }

  calcBody.appendChild(btn);
});
