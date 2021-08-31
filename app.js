"use strict";

// Get the modal
const modal = document.getElementById("myModal");

// Get the btn that opens the modal
const btn = document.getElementById("myBtn");

btn.addEventListener("click", () => {
  if (modal.style.display === "none") {
    btn.classList.add("active");
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
    btn.classList.remove("active");
  }
});
