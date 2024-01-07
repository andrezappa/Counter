// Create Element
function createElement(
  typeElem,
  idElem,
  classElem,
  contentElem,
  parentToAppend,
  additionalAttributes
) {
  let elem = document.createElement(typeElem);
  elem.setAttribute("id", idElem);
  elem.classList.add(...classElem);
  elem.innerHTML = contentElem;
  parentToAppend.append(elem);

  if (additionalAttributes) {
    for (const attribute in additionalAttributes) {
      elem.setAttribute(attribute, additionalAttributes[attribute]);
    }
  }
  return elem;
}

// Increment Function
function plus() {
  counter++;
  document.getElementById("counterDisplay").innerHTML = counter;
}

// Decrement Function
function minus() {
  counter--;
  document.getElementById("counterDisplay").innerHTML = counter;
}

// Reset Function
function reset() {
  counter = 0;
  document.getElementById("counterDisplay").innerHTML = counter;
}

// Increment Function of 10
function plus10() {
  counter += 10;
  document.getElementById("counterDisplay").innerHTML = counter;
}

// Decremet Function of 10
function minus10() {
  counter -= 10;
  document.getElementById("counterDisplay").innerHTML = counter;
}

// Auto Increment Function
let autoInterval = false;

function autoCounter() {
  if (!autoInterval) {
    autoInterval = setInterval(function () {
      plus();
      autoButton.innerHTML = "Stop" + shortAutoButtonText;
    }, 600);
  } else {
    clearInterval(autoInterval);
    autoInterval = false;
    autoButton.innerHTML = "Auto" + shortAutoButtonText;
  }
}

// Keyboard Input for counter
document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "+":
    case "ArrowUp":
      plus();
      break;
    case "-":
    case "ArrowDown":
      minus();
      break;
    case "Delete":
      reset();
      break;
  }
  if (event.shiftKey && event.key === "A") {
    autoCounter();
  }
});
