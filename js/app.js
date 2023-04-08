const boton = document.getElementById("botonPlay");
const caja = document.getElementById("cajaMisteriosa");
boton.addEventListener("click", () => {
  caja.classList.add('rotacion');
});
