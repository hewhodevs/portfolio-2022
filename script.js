const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");

menuToggle.addEventListener("click", (event) => {
  let menuIsOpen = menu.classList.contains("active");
  let newMenuOpenStatus = !menuIsOpen;
  menuToggle.setAttribute("aria-expanded", newMenuOpenStatus);
  menu.classList.toggle("active");
});