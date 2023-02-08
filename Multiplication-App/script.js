// const num1 = Math.ceil(Math.random() * 10);
// const num2 = Math.ceil(Math.random() * 10);

// const questionEl = document.getElementById("question");

// questionEl.textContent = `What is ${num1} multiplied by ${num2}?`;

// const correctAns = num1 * num2;

// const scoreEl = document.getElementById("score");

// document.querySelector("button").addEventListener("click", function () {
//   const input = document.querySelector("input").value;
//   if (input == correctAns) {
//     scoreEl.innerText = `Score: ${Math.max(
//       parseInt(scoreEl.innerText.split(":")[1]) + 1,
//       0
//     )}`;
//   } else {
//     scoreEl.innerText = `Score: ${Math.max(
//       parseInt(scoreEl.innerText.split(":")[1]) - 1,
//       0
//     )}`;
//   }
// });

const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question");
let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);
let correctAns = num1 * num2;

questionEl.textContent = `What is ${num1} multiplied by ${num2}?`;

document.querySelector("button").addEventListener("click", function () {
  const input = document.querySelector("input").value;
  if (input == correctAns) {
    scoreEl.innerText = `Score: ${Math.max(
      parseInt(scoreEl.innerText.split(":")[1]) + 1,
      0
    )}`;
  } else {
    scoreEl.innerText = `Score: ${Math.max(
      parseInt(scoreEl.innerText.split(":")[1]) - 1,
      0
    )}`;
  }
  num1 = Math.ceil(Math.random() * 10);
  num2 = Math.ceil(Math.random() * 10);
  correctAns = num1 * num2;
  questionEl.textContent = `What is ${num1} multiplied by ${num2}?`;
  document.querySelector("input").value = "";
});
