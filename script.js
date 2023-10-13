const menuMain = document.querySelector(".menuMain");
const menuOpen = document.querySelector(".menuOpen");
const menuClose = document.querySelector(".menuClose");

menuOpen.addEventListener("click", show);
menuClose.addEventListener("click", close);

function show() {
  menuMain.style.display = "flex";
  menuMain.style.top = "0";
}

function close() {
  menuMain.style.top = "-100%";
}

// fix so it just appears not ease in, when clicked it closes and glides to section specifide
