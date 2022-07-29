/* const seccionProducto = document.getElementById("producto");
const cantProductos = 8;

const productos = [
  { id: 1, nombre: "Alfacookie", precio: 5340 },
  { id: 2, nombre: "Cheesecake Frutos Rojos", precio: 5940 },
  { id: 3, nombre: "Chocotorta Oreo", precio: 6600 },
  { id: 4, nombre: "Ferrero Nutella", precio: 5340 },
  { id: 5, nombre: "Chocotorta", precio: 5940 },
  { id: 6, nombre: "Marquise Beverly", precio: 5940 },
  { id: 7, nombre: "Megabrownie", precio: 5340 },
  { id: 8, nombre: "Red Velvet", precio: 6180 },
];

let valorfinal = 0;

function revisarPedido(torta, cantUnidades) {
  switch (torta) {
    // Alfacookie
    case "1":
      valorfinal = productos[0].precio * cantUnidades;
      alert(
        "Elegiste: " +
          cantUnidades +
          " del producto: " +
          productos[0].nombre +
          " - $" +
          productos[0].precio +
          ". \nContinua para elegir la forma de pago"
      );
carrito.push((alfacookie = 5340));
      break;
    // Cheesecake
    case "2":
      alert(
        "Elegiste: " +
          productos[1].nombre +
          " - $" +
          productos[1].precio +
          ". \nContinua para elegir la forma de pago"
      );
      carrito.push((cheesecake = 5940));
      break;
    // Chocotorta Oreo
    case "3":
      alert(
        "Elegiste: " +
          productos[2].nombre +
          " - $" +
          productos[2].precio +
          ". \nContinua para elegir la forma de pago"
      );
      carrito.push((chocotortaOreo = 6600));
      break;
    // Ferrero Nutella
    case "4":
      alert(
        "Elegiste: " +
          productos[3].nombre +
          " - $" +
          productos[3].precio +
          ". \nContinua para elegir la forma de pago"
      );
      carrito.push((ferreroNutella = 5340));
      break;
    // Chocotorta
    case "5":
      alert(
        "Elegiste: " +
          productos[4].nombre +
          " - $" +
          productos[4].precio +
          ". \nContinua para elegir la forma de pago"
      );
      carrito.push((chocotorta = 5940));
      break;
    // Marquise Beverly
    case "6":
      alert(
        "Elegiste: " +
          productos[5].nombre +
          " - $" +
          productos[5].precio +
          ". \nContinua para elegir la forma de pago"
      );
      carrito.push((marquise = 5940));
      break;
    // Megabrownie
    case "7":
      alert(
        "Elegiste: " +
          productos[6].nombre +
          " - $" +
          productos[6].precio +
          ". \nContinua para elegir la forma de pago"
      );
      carrito.push((megabrownie = 5340));
      break;
    // Red Velvet
    case "8":
      alert(
        "Elegiste: " +
          productos[7].nombre +
          " - $" +
          productos[7].precio +
          ". \nContinua para elegir la forma de pago"
      );
      carrito.push((redVelvet = 6180));
      break;
  }
}

const mostrarCantidad = (cantUnidades) => {
  let numeroItems = document.createElement("div");
  numeroItems.innerHTML = cantUnidades;
  iconoCarrito.append(numeroItems);
};

const pedido = () => {
  const torta = prompt(
    "Ingresá el número de la torta que quieras llevar: \n1 - " +
      productos[0].nombre +
      " - $" +
      productos[0].precio +
      "\n2 - " +
      productos[1].nombre +
      " - $" +
      productos[1].precio +
      "\n3 - " +
      productos[2].nombre +
      " - $" +
      productos[2].precio +
      "\n4 - " +
      productos[3].nombre +
      " - $" +
      productos[3].precio +
      "\n5 - " +
      productos[4].nombre +
      " - $" +
      productos[4].precio +
      "\n6 - " +
      productos[5].nombre +
      " - $" +
      productos[5].precio +
      "\n7 - " +
      productos[6].nombre +
      " - $" +
      productos[6].precio +
      "\n8 - " +
      productos[7].nombre +
      " - $" +
      productos[7].precio
  );

  const cantUnidades = parseInt(
    prompt("Ingresá la cantidad que deseas comprar")
  );
  mostrarCantidad(cantUnidades);
  revisarPedido(torta, cantUnidades);
};
const producto = () => {
  let contar = 0;

  while (contar < cantProductos) {
    1;
    seccionProducto.innerHTML += `
    <div class="card style="width: 18rem;">
    <img src="./img/producto${contar}.jpg" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">Producto ${contar}</h5>
            <p class="card-text">Descripción del producto. </p>
          </div>
          <a href="#" class="btn btn-primary">Añadir al carrito</a>
    </div>
        `;
    contar++;
  }
};

pedido();
producto(); */

const seccionProductos = document.getElementById("productos");
const compraUsuario = document.getElementById("compraUsuario");
const cantProductos = 8;
const productos = [
  { id: 1, nombre: "Alfacookie", precio: 5340 },
  { id: 2, nombre: "Cheesecake Frutos Rojos", precio: 5940 },
  { id: 3, nombre: "Chocotorta Oreo", precio: 6600 },
  { id: 4, nombre: "Ferrero Nutella", precio: 5340 },
  { id: 5, nombre: "Chocotorta", precio: 5940 },
  { id: 6, nombre: "Marquise Beverly", precio: 5940 },
  { id: 7, nombre: "Megabrownie", precio: 5340 },
  { id: 8, nombre: "Red Velvet", precio: 6180 },
];
const carritoUsuario = [];

const pedidoFinal = (mensaje, valor) => {
  console.log(mensaje);
  let mensajeDeCarrito = document.createElement("p");
  mensajeDeCarrito.innerHTML = mensaje;
  let carrito = document.createElement("p");
  carrito.innerHTML = "El total es de $" + valor;
  compraUsuario.append(mensajeDeCarrito);
  compraUsuario.append(carrito);
};

const pedido = () => {
  alert("Bienvenidx a la tienda de tortas! \nHaz click para continuar.");
  let tortaElegida = prompt(
    "Ingresá el número de la torta que quieras llevar: \n1 - " +
      productos[0].nombre +
      " - $" +
      productos[0].precio +
      "\n2 - " +
      productos[1].nombre +
      " - $" +
      productos[1].precio +
      "\n3 - " +
      productos[2].nombre +
      " - $" +
      productos[2].precio +
      "\n4 - " +
      productos[3].nombre +
      " - $" +
      productos[3].precio +
      "\n5 - " +
      productos[4].nombre +
      " - $" +
      productos[4].precio +
      "\n6 - " +
      productos[5].nombre +
      " - $" +
      productos[5].precio +
      "\n7 - " +
      productos[6].nombre +
      " - $" +
      productos[6].precio +
      "\n8 - " +
      productos[7].nombre +
      " - $" +
      productos[7].precio
  );
  switch (tortaElegida) {
    // Alfacookie
    case "1":
      valor = productos[0].precio;
      mensaje =
        "Elegiste: " + productos[0].nombre + " - $" + productos[0].precio + ".";
      carritoUsuario.push((alfacookie = 5340));
      break;
    // Cheesecake
    case "2":
      valor = productos[1].precio;
      mensaje =
        "Elegiste: " + productos[1].nombre + " - $" + productos[1].precio + ".";
      carritoUsuario.push((cheesecake = 5940));
      break;
    // Chocotorta Oreo
    case "3":
      valor = productos[2].precio;
      mensaje =
        "Elegiste: " + productos[2].nombre + " - $" + productos[2].precio + ".";
      carritoUsuario.push((chocotortaOreo = 6600));
      break;
    // Ferrero Nutella
    case "4":
      valor = productos[3].precio;
      mensaje =
        "Elegiste: " + productos[3].nombre + " - $" + productos[3].precio + ".";
      carritoUsuario.push((ferreroNutella = 5340));
      break;
    // Chocotorta
    case "5":
      valor = productos[4].precio;
      mensaje =
        "Elegiste: " + productos[4].nombre + " - $" + productos[4].precio + ".";
      carritoUsuario.push((chocotorta = 5940));
      break;
    // Marquise Beverly
    case "6":
      valor = productos[5].precio;
      mensaje =
        "Elegiste: " + productos[5].nombre + " - $" + productos[5].precio + ".";
      carritoUsuario.push((marquise = 5940));
      break;
    // Megabrownie
    case "7":
      valor = productos[6].precio;
      mensaje =
        "Elegiste: " + productos[6].nombre + " - $" + productos[6].precio + ".";
      carritoUsuario.push((megabrownie = 5340));
      break;
    // Red Velvet
    case "8":
      valor = productos[7].precio;
      mensaje =
        "Elegiste: " + productos[7].nombre + " - $" + productos[7].precio + ".";
      carritoUsuario.push((redVelvet = 6180));
      break;
  }
  pedidoFinal(mensaje, valor);
};

const mostrarProductos = () => {
  let sumar = 0;

  while (sumar < cantProductos) {
    1;

    seccionProductos.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="../img/producto${sumar}.jpg" class="card-img-top" alt="test">
            <div class="card-body">
                <h5 class="card-title">Torta ${sumar}</h5>
                <p class="card-text">
                    Descripción del producto.
                </p>
                <a href="#" class="btn btn-primary">Buy</a>
            </div>
        </div>
        `;
    sumar++;
  }
};

mostrarProductos();
pedido();
