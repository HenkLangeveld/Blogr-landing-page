const menuIcon = document.querySelector(".mobile-menu-icon")
const menuContent = document.querySelector(".nav--main")

menuIcon.addEventListener("click", () => toggleTheMenu())

function toggleTheMenu() {
  menuContent.classList.toggle("nav-main--is-visible")
  menuIcon.classList.toggle("mobile-menu-icon--close-x")
}