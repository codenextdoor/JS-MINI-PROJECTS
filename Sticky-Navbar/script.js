const navbarEl = document.querySelector(".navbar");

const bottomContainerEl = document.querySelector(".bottom-container");
// const remainingCounterEl = document.getElementById("remaining-counter");

window.addEventListener("scroll", () => {
  if (
    window.scrollY >
    bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50
  ) {
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
});

// function updateCounter() {
//   totalCounterEl.innerText = textareaEl.value.length;
//   remainingCounterEl.innerText =
//     textareaEl.getAttribute("maxLength") - textareaEl.value.length;
// }
