const boton = document.getElementById("botonPlay");
const caja = document.getElementById("cajaMisteriosa");
const form = document.getElementById('formulario');
form.classList = "d-none"
form.addEventListener('submit',comprobarNumero);
boton.addEventListener("click", play);
const numeroAleateorio = Math.floor(Math.random() * (10 - 1) + 1);

function play(){
  caja.classList.add('rotacion');
  boton.classList = "d-none"
  form.classList = "input-group mb-3"
  console.log(`El numero magico:${numeroAleateorio}`);
}
function comprobarNumero(e){
  e.preventDefault();
  let numeroJugador = document.querySelector('input').value;
  if(!verificacion(numeroJugador)){
    if(numeroJugador > numeroAleateorio){
      form.reset();
      alert(`El numero oculto es menor que ${numeroJugador}`)
    }else if(numeroJugador < numeroAleateorio){
      form.reset();
      alert(`El numero oculto es mayor que ${numeroJugador}`)
    }else{
      form.reset();
      alert('GANASTE!!');
      window.location.reload();
    }
  }else{
    alert(`Ingresate un numero fuera del rango o no ingresaste nada \nVuelve a ingresar otro numero`);
    form.reset();
  }
}
function verificacion(numeroElegido){
  if (isNaN(numeroElegido) || numeroElegido < 1 || numeroElegido > 10) {
    return true;
  }else{
    return false;
  }
}
