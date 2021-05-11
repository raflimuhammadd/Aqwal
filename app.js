const subscribe = document.querySelector(".subscribe");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const container = document.querySelector(".container");

subscribe.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == container) {
    modal.style.display = "none";
  }
});
