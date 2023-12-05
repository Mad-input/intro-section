const listMobile = document.getElementById("listMobile");

listMobile.addEventListener("click", (e) => {
  const elementDataSet = e.target.dataset.menu;
  const submenu = e.target.children[1];
  const submenuSet = e.target.children[1].dataset.menu;

  if (elementDataSet == submenuSet) {
    submenu.style.height =
      submenu.style.height == "0px" ? `${submenu.scrollHeight}px` : "0px";
  }
});

// Abrir el menu

const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const placeHolder = document.querySelector(".placeholder-menu-mobile");
const menu = document.querySelector(".menu-mobile");

openMenu.addEventListener("click", () => {
  placeHolder.classList.add("open");
  menu.classList.add("open");
});

closeMenu.addEventListener("click", () => {
  placeHolder.classList.remove("open");
  menu.classList.remove("open");
});
