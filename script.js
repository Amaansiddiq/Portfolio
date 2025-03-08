function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


function toggleTheme() {
  const body = document.body;
  const themeToggleButton = document.getElementById("theme-toggle-btn");

  // Toggle the class on the body element to switch between themes
  body.classList.toggle("dark-mode");

  // Change the icon based on the current theme
  if (body.classList.contains("dark-mode")) {
    themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Dark mode icon
    localStorage.setItem("theme", "dark");
  } else {
    themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // Light mode icon
    localStorage.setItem("theme", "light");
  }
}