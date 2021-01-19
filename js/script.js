import "core-js/stable";

("use strict");

// Selecting
const btnModal = document.querySelectorAll(".btn-modal");
const overlay = document.querySelector(".overlay");

/////////////////////////////////////
// Modal Window

const disableScrolling = function () {
  const x = window.scrollX;
  const y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
};

const enableScrolling = function () {
  window.onscroll = function () {};
};

const modalWindow = function (id) {
  const modal = document.getElementById(id);
  modal.classList.toggle("modal--show");
  overlay.classList.toggle("overlay--show");
  overlay.addEventListener("click", () => modalWindow(id));
  modal.classList.contains("modal--show")
    ? disableScrolling()
    : enableScrolling();
};

btnModal.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    modalWindow(btn.dataset.modal);
    event.preventDefault();
  });
});

/////////////////////////////////////
