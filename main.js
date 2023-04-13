

const textoingresado = document.getElementById("input-text");
const rta = document.getElementById("text-rta");
const sinRta = document.getElementById("sin-rta");
const btnCopy = document.getElementById("btnCopy");

//Método utilizado para la encriptación de texto
function encriptar() {
  if (textoingresado.value != '') {
    //Se utiliza el elemento rta el cual no tiene valor y se le asigna un valor mediante "innerHTML"
    //El valor asignado es el texto ingresado junto con los métodos replace el cual remplaza el primero parámetro por el segundo
    //Luego el contenido que estaba anteriormente es asignado un valor vacío y se campia el style del boton de copiar para que pueda ser visible
    rta.innerHTML = textoingresado.value.
      replace(/e/g, 'enter').
      replace(/i/g, 'imes').
      replace(/a/g, 'ai').
      replace(/o/g, 'ober').
      replace(/u/g, 'ufat');
    sinRta.innerHTML = '';
    btnCopy.style.display = "block";
  } else {
    alert('No ingreso texto')
  }

}

function copiarAlPortapapeles() {
  /*
  1-Se selecciona el nodo HTML que contiene el texto a copiar
  2-Se crea un intervalo de selección con el método createRange()
  3-Se añade a la selección el elemento del DOM.Esto hará que se copien sus contenidos más adelante
  4-Se deselecciona cualquier cosa que estuviese previamente seleccionada en la página.
  5-Se realiza la selección del contenido mediante los método getSelection().addRange()
  6-Se lanza el comando de copiado
  7-Se deselecciona el elemento
   */
  var codigoACopiar = document.getElementById('text-rta');
  var seleccion = document.createRange();
  seleccion.selectNodeContents(codigoACopiar);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(seleccion);
  var res = document.execCommand('copy');
  window.getSelection().removeRange(seleccion);

}


//Método utilizado para la desencriptación de texto
function desencriptar() {
  //Se utiliza el elemento rta el cual no tiene valor y se le asigna un valor mediante "innerHTML"
  //El valor asignado es el texto ingresado junto con los métodos replace el cual remplaza el primero parámetro por el segundo
  //Luego el contenido que estaba anteriormente es asignado un valor vacío y se campia el style del boton de copiar para que pueda ser visible
  if (textoingresado.value != '') {
    rta.innerHTML = textoingresado.value.
      replace(/enter/g, 'e').
      replace(/imes/g, 'i').
      replace(/ai/g, 'a').
      replace(/ober/g, 'o').
      replace(/ufat/g, 'u');
    sinRta.innerHTML = '';
    btnCopy.style.display = "block";
  } else {
    alert('No ingreso texto')
  }




}