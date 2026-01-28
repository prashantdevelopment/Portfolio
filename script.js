const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    const targetId = item.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");

let isOpen = false;

menuBtn.addEventListener("click", () => {
  isOpen = !isOpen;
  mobileMenu.classList.toggle("hidden");

  menuIcon.innerHTML = isOpen
    ? `<path stroke-linecap="round" stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12" />`
    : `<path stroke-linecap="round" stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />`;
});

/* Close menu after click */
document.querySelectorAll(".nav-item").forEach(item => {
  item.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    isOpen = false;
    menuIcon.innerHTML = `
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
    `;
  });
});


