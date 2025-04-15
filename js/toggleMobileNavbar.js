function toggleMobileNavbar() {
  const navbar = document.querySelector("#mobile-menu");
  if (!navbar) throw new Error("toggleMobileNavbar: could not find");
  navbar.classList.toggle("hidden");
}
