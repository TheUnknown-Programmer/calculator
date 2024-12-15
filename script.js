const buttonsArray = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  ".",
  "/",
  "-",
  "*",
  "+",
  "=",
];

const buttonsContainer = document.getElementById("buttons-container");

for (let i = 0; i < buttonsArray.length; i++) {
  const button = document.createElement("button");

  button.textContent = buttonsArray[i];

  button.addEventListener("click", function () {
    console.log(`Button ${buttonsArray[i]} clicked!`);
  });

  buttonsContainer.appendChild(button);
}

function add(num1, num2) {
  let result = 0;
  result = num1 + num2;
  return result;
}

function subtract(num1, num2) {
  let result = 0;
  result = num1 - num2;
  return result;
}

function multiply(num1, num2) {
  let result = 0;
  result = num1 * num2;
  return result;
}

function divide(num1, num2) {
  let result = 0;
  result = num1 / num2;
  return result;
}

let firstNumber = 0;
let operator = "";
let secondNumber = 0;
