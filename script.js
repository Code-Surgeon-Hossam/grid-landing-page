const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector("#menu");
const menuIcon = menuButton.querySelector("img");

function setMenu(isOpen) {
  menu.hidden = !isOpen;
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  menuIcon.src = isOpen
    ? "./assets/images/icon-close.svg"
    : "./assets/images/icon-menu.svg";
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  setMenu(!isOpen);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
  }
});
