// Container into wich to append the counter elements
const container = document.querySelector("#container");

// Creation of all the HTML elements

// Cretion startContainer where the user can set a specific starting value for the counter
const startContainer = createElement(
  "div",
  "startContainer",
  ["start"],
  null,
  container
);

//  Label for the input
const startInputLabel = createElement(
  "label",
  null,
  [null],
  "Start From:",
  startContainer,
  { for: "startInput" }
);

//  Input Element
const startInput = createElement(
  "input",
  "startInput",
  [null],
  null,
  startContainer,
  { type: "text", placeholder: "Insert a start value" }
);

// Set Counter Button
const setCounterButton = createElement(
  "button",
  "setCounter",
  "setCounterButton",
  "Set Counter <p>Enter</p>",
  startContainer
);

// Creation of the counter

// Counter Container
const counterContainer = createElement(
  "div",
  "counterContainer",
  ["counterContainer"],
  null,
  container
);

// Counter Display
const counterDisplay = createElement(
  "div",
  "counterDisplay",
  ["counterDisplay"],
  "0",
  counterContainer
);

// Counter Buttons
const containerCounterButtons = createElement(
  "div",
  "containerButtonsCounter",
  ["containerButtonsCounter"],
  null,
  counterContainer
);

// Minus Button
const minusButton = createElement(
  "button",
  "minusButton",
  ["minusButton", "buttonCounter"],
  "-",
  containerCounterButtons,
  { onclick: "minus()" }
);

// Plus Button
const plusButton = createElement(
  "button",
  "plusButton",
  ["plusButton", "buttonCounter"],
  "+",
  containerCounterButtons,
  { onclick: "plus()" }
);

// Creation of other buttons

// Container
const otherButtonsContainer = createElement(
  "div",
  "otherButtons",
  ["otherButtons"],
  null,
  container
);

// Auto Button
const autoButtons = createElement(
  "button",
  "autoButton",
  ["autoButton"],
  'Auto <p id="shortAutoButton">A</p>',
  otherButtonsContainer
);

// Reset Button
const resetButtons = createElement(
  "button",
  "resetButton",
  ["resetButton"],
  "Reset <p>Canc</p>",
  otherButtonsContainer,
  { onclick: "reset()" }
);

// Counter Functionality
let counter = 0;
let interval;

// Increment by 10 on long pression only if the counter is a two-digit number
document
  .querySelector(".plusButton")
  .addEventListener("mousedown", function () {
    if (counter > 9 || counter < -9) {
      interval = setInterval(plus10, 500);
    } else {
      interval = setInterval(plus, 500);
    }
  });

// Decrement of 10 by long pression only if the counter is a two-digit number
document
  .querySelector(".minusButton")
  .addEventListener("mousedown", function () {
    if (counter > 9 || counter < -9) {
      interval = setInterval(minus10, 500);
    } else {
      interval = setInterval(minus, 500);
    }
  });

// Stop the counter on mouseup
document.addEventListener("mouseup", function () {
  clearInterval(interval);
});

// Auto Increment by Auto button
document.getElementById("autoButton").addEventListener("click", function () {
  autoCounter();
});

// Short text for auto increment button
const shortAutoButtonText =
  document.getElementById("shortAutoButton").outerHTML;

// Setting a start value by Set button
document.querySelector("#setCounter").addEventListener("click", function () {
  const startValue = parseInt(document.getElementById("startInput").value);

  if (!isNaN(startValue)) {
    counter = startValue;
    document.getElementById("counter").innerHTML = counter;
  } else {
    alert("Please enter a valid number."); // Alert message in case of invalid input
  }
  document.getElementById("startInput").value = ""; // Reset the input
});

// Setting a start value via keyboard
document
  .getElementById("startInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevents form submission from reloading the page (default behavior)
      const startValue = parseInt(this.value);

      if (!isNaN(startValue)) {
        counter = startValue;
        document.getElementById("counterDisplay").innerHTML = counter;
      } else {
        alert("Please enter a valid number."); // Show a message if the input is not valid
      }
      this.value = ""; // Resets the input value after the counter is updated
    }
  });
