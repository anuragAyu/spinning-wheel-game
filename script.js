let container = document.querySelector(".container");
let btn = document.getElementById("spin");

let number = Math.ceil(Math.random() * 1000);

btn.onclick = function () {
    let randomIncrement = Math.ceil(Math.random() * 1000);
    number += randomIncrement;
    container.style.transform = "rotate(" + number + "deg)";
}

container.addEventListener("transitionend", function () {
  /* segment no. calculate */
  /*  adjusting half of the segment (22.5) */
  let winningNumber = calculateWinningNumber((number - 22.5) % 360);
  displayWinningMessage(winningNumber);
});

function calculateWinningNumber(degrees) {  
  let segmentSize = 360 / 8;
    return Math.floor(degrees / segmentSize) + 1;
}

function displayWinningMessage(segmentNumber) {
  let messages = [
    "Better Luck Next Time",
    "Won A Voucher",
    "Better Luck Next Time",
    "Won 70",
    "Won 10",
    "Better Luck Next Time",
    "Won 2",
    "Won Uber Pass"
  ];

  let message = messages[segmentNumber - 1];
  // alert(message);
  Swal.fire(message);
}

