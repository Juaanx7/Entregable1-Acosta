// Se le solicita el usuario el ingreso de los datos para el prestamo:
let monto = Number(prompt("Ingrese el monto a solicitar:"));
let cuotas = Number(prompt("Ingrese la cantidad de cuotas en que quiera pagarlo, como máximo 12"));

let tasaInteres = calculoInteres(cuotas);
let precioCuota = calculoCuotas(monto, tasaInteres, cuotas);
let devolucionTotal = devolucion(precioCuota, cuotas);

if (cuotas <= 12) {
  let mensaje = '';
  // Use un bucle for para generar el mensaje de cada cuota y se le vaya sumando una linea de texto dependiendo el numero de cuotas que solicito.
  for (let i = 1; i <= cuotas; i++) {
    mensaje += `Cuota número: ${i} - Monto de cuota: $${precioCuota.toFixed(2)}\n`;
  }
  
  // Agrego el total a devolver al final del mensaje:
  mensaje += `\nTotal a devolver: $${devolucionTotal.toFixed(2)}`;
  
  // Muestro el mensaje atravez de un alert:
  alert(mensaje);
  
} else {
  alert("¡Superó el máximo de cuotas permitido!");
}

// Función para calcular la tasa de interés:
function calculoInteres(cuotas) {
  let tasaInteres = 0;
  if (cuotas <= 3) {
    tasaInteres = 0.30;  // 30% de interés
  } else if (cuotas <= 6) {
    tasaInteres = 0.60;  // 60% de interés
  } else if (cuotas <= 12) {
    tasaInteres = 0.90;  // 90% de interés
  }
  return tasaInteres;
}

// Función para calcular el monto de cada cuota
function calculoCuotas(monto, tasaInteres, cuotas) {
  let interes = monto * tasaInteres; 
  let precioCuota = (monto + interes) / cuotas;
  return precioCuota;
}

// Función para calcular el total a devolver
function devolucion(precioCuota, cuotas) {    
  let total = precioCuota * cuotas;
  return total;
}
