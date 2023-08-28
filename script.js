"use strict";

const accountEmail = "abdussalamqasim20@gmail.com";
const Email = document.querySelector(".email");
const btnEl = document.querySelector(".btn");
const modalEl = document.querySelector(".modal");
const overlayEl = document.querySelector(".overlay");
const dismissEl = document.querySelector(".dismiss");
const errorEl = document.querySelector(".error");
const inputEl = document.querySelector(".inputEmail");

btnEl.addEventListener("click", function () {
  if (Email.value.includes("@")) {
    modalEl.classList.remove("hidden");
    overlayEl.classList.remove("hidden");
    document.querySelector(".all").classList.add("hidden");
  } else {
    document.querySelector(".email").style.backgroundColor = "#ffe6e6";
    document.querySelector(".email").style.color = "#ff8080";
    errorEl.classList.remove("hidden");
  }
  inputEl.textContent = Email.value;
});

dismissEl.addEventListener("click", function () {
  modalEl.classList.add("hidden");
  overlayEl.classList.add("hidden");
  Email.value = "";
  errorEl.classList.add("hidden");
  Email.style.backgroundColor = "white";
  document.querySelector(".all").classList.remove("hidden");
});

// if (Email.value !== accountEmail) {
//   error.classList.remove("hidden");
//   document.querySelector(".email").style.color = "red";
// }
Email.addEventListener("click", function () {
  errorEl.classList.add("hidden");
  Email.style.color = "black";
  Email.style.backgroundColor = "white";
});
