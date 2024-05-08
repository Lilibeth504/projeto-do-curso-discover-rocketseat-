function toggleMode() {
  const html = document.documentElement;

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light");
  // } else {
  //   html.classList.add("light");
  // }
  html.classList.toggle("light");

  //PEGAR A TAG IMG
  const img = document.querySelector("#profile img");

  // subtituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode. adicionar aimgem light
    img.setAttribute("src", "./assets/avatar-light.png");
    // se tiver sem light mode, manter a imagem normal
  } else {
    img.setAttribute("src", ".assets/avatar.png");
  }
}
