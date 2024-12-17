const numberButtons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
const operatorButtons = ["/", "-", "*", "+"];
const specialButtons = ["C", "="];
const buttonsArray = [...numberButtons, ...operatorButtons, ...specialButtons];

const buttonsContainer = document.getElementById("buttons-container");
const displayElement = document.getElementById("display");
displayElement.textContent = "0";

function addButtonClickListener(button, value) {
  button.addEventListener("click", function () {
    displayElement.textContent = value;
    console.log(value);
  });
}

function buttons() {
  for (let i = 0; i < buttonsArray.length; i++) {
    const button = document.createElement("button");
    button.textContent = buttonsArray[i];

    button.addEventListener("click", function () {
      if (numberButtons.includes(button.textContent)) {
        if (displayElement.textContent === "0") {
          displayElement.textContent = button.textContent;
        } else {
          displayElement.textContent += button.textContent;
        }
      } else if (operatorButtons.includes(button.textContent)) {
        displayElement.textContent += ` ${button.textContent} `;
      } else if (button.textContent === "C") {
        displayElement.textContent = "0";
      }
    });

    buttonsContainer.appendChild(button);
  }
}

buttons();

function operate(firstNumber, operator, secondNumber) {
  let result;
  if (operator === "+") {
    result = firstNumber + secondNumber;
  } else if (operator === "-") {
    result = firstNumber - secondNumber;
  } else if (operator === "*") {
    result = firstNumber * secondNumber;
  } else if (operator === "/") {
    result =
      secondNumber !== 0
        ? firstNumber / secondNumber
        : "Error: Division by zero";
  } else {
    result = "Invalid operator";
  }
  return result;
}

let firstNumber = 0;
let operator = "";
let secondNumber = 0;
let result = operate(firstNumber, operator, secondNumber);
