const div = document.getElementById("botoncito");
const boton = div.querySelector("button");

div.addEventListener("click", () => {
  alert("¡Hola! Soy el div");
});

boton.addEventListener("click", () => {
  event.stopPropagation();
  alert("¡Hola!");
});
