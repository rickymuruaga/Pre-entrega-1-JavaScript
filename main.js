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

let dia = prompt("NUESTROS TECNICOS DE INTERNET POR FIBRA OPTICA ESTAN DISPONIBLES DE MARTES A SÁBADO. INDIQUE EL DIA QUE DESEE.");

let horario  = parseInt( prompt ("LOS HORARIOS SON DE 9 18 HRS. INDIQUE HORARIO QUE DESEE."));

let confirmar = prompt ("¿DESEA CONFIRMAR LA VISITA?");


function vistaTecnica(dia,horario,confirmar){
    if(confirmar === "si"){
            alert( `Nuestro tecnico visitara su domicilio el dia ${dia}, a las ${horario} hrs`);
    }
      else if (confirmar === "no" ){
            alert("Ingrese datos nuevamente si desea una visita tecnica");
    } 
    else{
        alert("Operacion invalida");
    }
}

vistiaTecnica(dia,horario,confirmar);