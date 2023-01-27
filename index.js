const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
  if (!menu.classList.contains('menu-toggled') ) {
    menu.classList.add('menu-toggled')
    document.querySelector('.list-nav').classList.add('menu-visible')
  }else {
    menu.classList.remove('menu-toggled')
    document.querySelector('.list-nav').classList.remove('menu-visible')
  }
})

