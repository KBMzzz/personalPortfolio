const menuMain = document.querySelector(".menuMain");
const menuOpen = document.querySelector(".menuOpen");
const menuClose = document.querySelector(".menuClose");
const menuLinks = document.querySelectorAll(".menuMain li a");

function show() {
  menuMain.style.display = "flex";
  menuMain.style.top = "0";
}

function hide() {
  menuMain.style.top = "-100%";
}

menuOpen.addEventListener("click", show);
menuClose.addEventListener("click", hide);

menuLinks.forEach((link) => {
  link.addEventListener("click", hide);
});

// make code DRYer
