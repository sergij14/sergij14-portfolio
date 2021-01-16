"use strict";

// Selecting
const btnModal = document.querySelectorAll(".btn-modal");
const overlay = document.querySelector(".overlay");

/////////////////////////////////////
// Modal Window

const modalWindow = function (id) {
  const modal = document.getElementById(id);
  modal.classList.toggle("modal--show");
  overlay.classList.toggle("overlay--show");
  overlay.addEventListener("click", () => modalWindow(id));
};

btnModal.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    modalWindow(btn.dataset.modal);
    event.preventDefault();
  });
});

/////////////////////////////////////
