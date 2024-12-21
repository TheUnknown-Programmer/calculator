const numberButtons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
const operatorButtons = ["/", "-", "*", "+"];
const specialButtons = ["C", "="];
const buttonsArray = [...numberButtons, ...operatorButtons, ...specialButtons];

const buttonsContainer = document.getElementById("buttons-container");
const displayElement = document.getElementById("display");
displayElement.textContent = "0";

function createButtons() {
  for (let i = 0; i < buttonsArray.length; i++) {
    const button = document.createElement("button");

    button.textContent = buttonsArray[i];
    button.addEventListener("click", () => {
      displayElement.textContent = buttonsArray[i];
    });

    buttonsContainer.appendChild(button);
  }
}

createButtons();

let firstNumber = 0;
let operator = "";
let secondNumber = 0;
