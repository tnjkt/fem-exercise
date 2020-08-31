let calculation = "0";

const resultElement = document.querySelector(".result");
resultElement.innerText = calculation;

const buttons = document.querySelectorAll(".btn");
console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    const textOfClickedButton = event.target.innerText;
    if (textOfClickedButton === "=") {
      resultElement.innerText = eval(calculation);
      return;
    }
    if (calculation === "0") {
      calculation = textOfClickedButton;
    } else if (textOfClickedButton === "×") {
      calculation = calculation + "*";
    } else if (textOfClickedButton === "÷") {
      calculation = calculation + "/";
    } else if (textOfClickedButton === "C") {
      calculation = "";
    } else if (textOfClickedButton === "←") {
      const editedCalculation = calculation.slice(0, -1);
      calculation = editedCalculation;
    } else {
      calculation = calculation + textOfClickedButton;
    }
    if (calculation === "") {
      resultElement.innerText = "0";
    } else {
      resultElement.innerText = calculation;
    }
  });
}
