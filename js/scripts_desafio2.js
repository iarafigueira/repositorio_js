// carrito de compras

let total = parseFloat(prompt("Ingrese el total a pagar"));
let pago = prompt(
  "Seleccione la forma de pago \n1- Efectivo (15% de descuento) \n2- Tarjeta de débito \n3- Tarjeta de crédito \n4 - Transferencia (5% de descuento)"
);
/* 
while (cuotas != 1 && cuotas != 2 && cuotas != 3 && cuotas != 4) {
  alert("La opción elegida no es correcta");
 */
switch (pago) {
  //Efectivo
  case "1":
    let porcentaje = 15;
    function calcularPorcentaje(porcentaje, total) {
      return (porcentaje * total) / 100;
    }
    alert(
      "El descuento por abonar en efectivo es $" +
        calcularPorcentaje(porcentaje, total) +
        ". Deberás abonar $" +
        (total - calcularPorcentaje(porcentaje, total))
    );
    break;

  //Tarjeta de débito
  case "2":
    alert("El monto a abonar es $" + total);
    break;

  //Tarjeta de crédito
  case "3":
    let credito = prompt(
      "Seleccione las cuotas en las que desea abonar \n1- 1 cuota. \n2- 3 cuotas. \n3- 6 cuotas. \n4 - 12 cuotas."
    );
    switch (credito) {
      // 1 cuota
      case "1":
        alert("El monto a pagar es un total de $" + total);
      // 3 cuotas
      case "2":
        let porcentajeTresCuotas = 15;
        function tresCuotas(porcentajeTresCuotas, total) {
          return (porcentajeTresCuotas * total) / 100;
        }
        alert(
          "El recargo por abonar en tres cuotas es $" +
            tresCuotas(porcentajeTresCuotas, total) +
            ". El monto a pagar es un total de $" +
            (total - tresCuotas(porcentajeTresCuotas, total)) +
            " en 3 cuotas de $"
        );
        break;

      // 6 cuotas
      case "3":
        let porcentajeSeisCuotas = 25;
        function seisCuotas(porcentajeSeisCuotas, total) {
          return (porcentajeSeisCuotas * total) / 100;
        }
        alert(
          "El recargo por abonar en seis cuotas es $" +
            seisCuotas(porcentajeSeisCuotas, total) +
            ". El monto a pagar es un total de $" +
            (total - seisCuotas(porcentajeSeisCuotas, total)) +
            " en 6 cuotas de $"
        );
        break;
      // 12 cuotas
      case "4":
        let porcentajeDoceCuotas = 35;
        function doceCuotas(porcentajeDoceCuotas, total) {
          return (porcentajeDoceCuotas * total) / 100;
        }
        alert(
          "El recargo por abonar en doce cuotas es $" +
            doceCuotas(porcentajeDoceCuotas, total) +
            ". El monto a pagar es un total de $" +
            (total - doceCuotas(porcentajeDoceCuotas, total)) +
            " en 12 cuotas de $"
        );
        break;
    }
    break;

  //Transferencia
  case "4":
    let descuentoTransferencia = 5;
    function calcularTransferencia(descuentoTransferencia, total) {
      return (descuentoTransferencia * total) / 100;
    }
    alert(
      "El descuento por realizar el pago mediante transferencia es $" +
        calcularTransferencia(descuentoTransferencia, total) +
        ". Deberás abonar $" +
        (total - calcularTransferencia(descuentoTransferencia, total))
    );
    break;
}
/* 
pago = prompt(
  "Seleccione la forma de pago \n1- Efectivo (15% de descuento) \n2- Tarjeta de crédito \n3- Tarjeta de débito \n4 - Transferencia"
);
}
 */
