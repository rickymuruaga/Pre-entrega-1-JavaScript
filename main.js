/* ALGORITMO CON UN CONDICIONAL */

let entrada = prompt("¿Tienes ticket para entrar al estadio?");

if(entrada ==="si"){
    alert("Puede Ingresar")
}
else{
    alert("No puede ingresar")
}

/* ALGORITMO UTILIZANDO UN CICLO */

for(let ticket = 1; ticket <=10; ticket++){
    let apellido = prompt("Ingrese su apellido");
    alert(`Entrada #${ticket} para ${apellido}`)
}

alert("No hay mas tickets")