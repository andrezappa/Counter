//Increment Function
function plus() {
  counter++;
  document.getElementById("counter").innerHTML = counter;
}

//Decrement Function
function minus() {
  counter--;
  document.getElementById("counter").innerHTML = counter;
}

//Reset Function
function reset() {
  counter = 0;
  document.getElementById("counter").innerHTML = counter;
}

//Increment Function of 10
function plus10() {
  counter += 10;
  document.getElementById("counter").innerHTML = counter;
}

//Decremet Function of 10
function minus10() {
  counter -= 10;
  document.getElementById("counter").innerHTML = counter;
}

//Auto Increment Function
const shortButtonText = document.getElementById("shortAutoButton").outerHTML;
let autoInterval = false;

function startAutoCounter() {
  if (!autoInterval) {
    autoInterval = setInterval(function () {
      plus();
      autoButton.innerHTML = "Stop" + shortButtonText;
    }, 600);
  } else {
    clearInterval(autoInterval);
    autoInterval = false;
    autoButton.innerHTML = "Auto" + shortButtonText;
  }
}
