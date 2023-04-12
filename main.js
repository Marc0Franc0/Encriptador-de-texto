

  const textoingresado = document.getElementById("textoingresado");
  const rta = document.getElementById("rta");
  const sinRta = document.getElementById("sin-rta");

  
 function encriptar(){
  if(textoingresado.value!=''){
       rta.innerHTML = textoingresado.value;
    sinRta.innerHTML = '';
  }
 
}


function desencriptar(){
    alert("Desencriptar");
}