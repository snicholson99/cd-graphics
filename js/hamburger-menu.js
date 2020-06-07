function toggleHamburgerMenu() {
  var menu = document.getElementById("hamburger-menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}