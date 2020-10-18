let btnMenu = document.getElementById("button-menu");
let mainNav = document.getElementById("nav-links");
let valorCompra = document.getElementById("valorCompra");
btnMenu.addEventListener("click", function () {
  if (mainNav.style.display === "block") {
    mainNav.style.display = "none";
  } else {
    mainNav.style.display = "block";
  }
});
ScrollReveal().reveal(".header-nav", { delay: 100 });
ScrollReveal().reveal(".headerPages", { delay: 150 });
ScrollReveal().reveal(".descripcion", { delay: 200 });
ScrollReveal().reveal(".descripcionOng", { delay: 200 });
ScrollReveal().reveal(".cards", { delay: 200 });
ScrollReveal().reveal(".comoFunciona", { delay: 200 });
