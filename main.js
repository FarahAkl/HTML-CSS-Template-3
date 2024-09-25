const other = document.querySelector("#other");
const megaMenu = document.querySelector(".mega-menu");

other.addEventListener("click", () => {
  if (megaMenu.style.opacity == 0) {
    megaMenu.style.top = "calc(100% + 1px)";
    megaMenu.style.opacity = "1";
  } else {
      megaMenu.style.top = "calc(100% + 50px)";
      megaMenu.style.opacity = "0";
  }
});
