const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menuBlock = document.querySelector("menu");

  const toggleMenu = () => {
    menuBlock.classList.toggle("active-menu");
  };

  menuBtn.addEventListener("click", toggleMenu);

  menuBlock.addEventListener("click", (e) => {
    if (e.target.closest(".close-btn") || e.target.closest("ul > li > a")) {
      toggleMenu();
    }
  });
};

export default menu;
