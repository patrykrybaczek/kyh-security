const toggle = document.getElementById("toggle-btn");
toggle.addEventListener("click", () => {
  let toggleTheMenu = document.getElementById("toggle-menu");
  toggleTheMenu.classList.toggle("active-toggle");
});