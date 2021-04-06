const menuIcon = document.querySelector(".mobile-menu-icon")
const menuContent = document.querySelector(".nav")

menuIcon.addEventListener("click", () => toggleTheMenu())

function toggleTheMenu() {
  menuContent.classList.toggle("nav--is-visible")
  menuIcon.classList.toggle("mobile-menu-icon--close-x")
}