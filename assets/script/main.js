let counter = 0;
let interval;

//Increment by 10 on long pression only if the counter is a two-digit number
document
  .querySelector(".plusButton")
  .addEventListener("mousedown", function () {
    if (counter > 9 || counter < -9) {
      interval = setInterval(plus10, 500);
    } else {
      interval = setInterval(plus, 500);
    }
  });

//Decrement of 10 by long pression only if the counter is a two-digit number
document
  .querySelector(".minusButton")
  .addEventListener("mousedown", function () {
    if (counter > 9 || counter < -9) {
      interval = setInterval(minus10, 500);
    } else {
      interval = setInterval(minus, 500);
    }
  });

//Stop the counter on mouseup
document.addEventListener("mouseup", function () {
  clearInterval(interval);
});

//Auto Increment by Auto button
document.querySelector(".autoButton").addEventListener("click", function () {
  startAutoCounter();
});

//Setting a start value by Set button
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

//Keyboard Input

//Setting a start value via keyboard
document
  .getElementById("startInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevents form submission from reloading the page (default behavior)
      const startValue = parseInt(this.value);

      if (!isNaN(startValue)) {
        counter = startValue;
        document.getElementById("counter").innerHTML = counter;
      } else {
        alert("Please enter a valid number."); // Show a message if the input is not a valid number
      }
      this.value = ""; // Resets the input value after the counter is updated
    }
  });

//Keyboard Input for counter
document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "+":
      plus();
      break;
    case "-":
      minus();
      break;
    case "Delete":
      reset();
  }
  if (event.shiftKey && event.key === "A") {
    startAutoCounter();
  }
});
