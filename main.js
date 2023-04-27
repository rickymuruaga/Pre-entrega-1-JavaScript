/* ALGORITMO CON UN CONDICIONAL */

/* let entrada = prompt("¿Tienes ticket para entrar al estadio?");

if(entrada ==="si"){
    alert("Puede Ingresar")
}
else{
    alert("No puede ingresar")
} */








/* ALGORITMO UTILIZANDO UN CICLO */

/*  for(let ticket = 1; ticket <=10; ticket++){
    let apellido = prompt("Ingrese su apellido");
    alert(`Entrada #${ticket} para ${apellido}`)
}

alert("No hay mas tickets")  */








/* SIMULADOR INTERACTIVO */

function gastos(num1 , num2, resta){
    switch (resta) {
     case "-":
       return num1 - num2;
    }
}

let num1 = parseInt(prompt("Ingrese sueldo"));
let resta = prompt("ingrese signo -");
let num2 = parseInt(prompt("Ingrese Gasto"));


let resultado = gastos(num1, num2, resta);
alert(`Te quedan ${resultado} $pesos`);