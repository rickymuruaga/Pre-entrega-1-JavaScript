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

  let dia = prompt("NUESTROS TÉCNICOS DE INTERNET POR FIBRA ÓPTICA ESTÁN DISPONIBLES DE MARTES A SÁBADO. INDIQUE EL DÍA QUE DESEE.");
  let horario = parseInt(prompt("LOS HORARIOS SON DE 9 A 18 HRS. INDIQUE EL HORARIO QUE DESEE."));
  let confirmar = prompt(`¿DESEA CONFIRMAR LA VISITA PARA EL DIA ${dia} A LAS ${horario} ? si || no`);


  while (confirmar === "no") {
    let dia = prompt("NUESTROS TÉCNICOS DE INTERNET POR FIBRA ÓPTICA ESTÁN DISPONIBLES DE MARTES A SÁBADO. INDIQUE EL DÍA QUE DESEE.");
    let horario = parseInt(prompt("LOS HORARIOS SON DE 9 A 18 HRS. INDIQUE EL HORARIO QUE DESEE."));
    confirmar = prompt(`¿DESEA CONFIRMAR LA VISITA PARA EL DIA ${dia} A LAS ${horario} ? si || no`);
    
    visitaTecnica(dia, horario, confirmar);
  }

  
  function visitaTecnica(dia, horario, confirmar) {
    if (confirmar === "si") {
      if (dia === "lunes" || dia === "domingo") {
        alert("Lo siento, no podemos programar visitas técnicas los lunes ni domingos");
      } else if (horario < 9 || horario > 18) {
        alert("Lo siento, nuestro horario de atención es de 9 a 18 hrs");
      } else {
        alert(`Nuestro técnico visitará su domicilio el día ${dia}, a las ${horario} hrs`);
      }
    } else if (confirmar === "no") {
      alert("Ingrese datos nuevamente si desea una visita técnica");
    } else {
      alert("Operación inválida");
    }
  }
  

  visitaTecnica(dia, horario, confirmar);