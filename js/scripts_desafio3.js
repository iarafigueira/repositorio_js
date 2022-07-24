//array de objetos

const productos = [
  { id: 1, nombre: "Marquise Beverly", precio: 5940 },
  { id: 2, nombre: "Alfacookie", precio: 5340 },
  { id: 3, nombre: "Red Velvet", precio: 6180 },
  { id: 4, nombre: "Megabrownie", precio: 5340 },
  { id: 5, nombre: "Ferrero Nutella", precio: 5340 },
  { id: 6, nombre: "Chocotorta Oreo", precio: 6600 },
  { id: 7, nombre: "Chocotorta", precio: 5940 },
  { id: 8, nombre: "Cheesecake Frutos Rojos", precio: 5940 },
];

//for of
for (const torta of productos) {
  alert("La torta " + torta.nombre + " tiene un valor de $" + torta.precio);
}

//find

console.log(productos);

const buscar = productos.find(
  (producto) => producto.precio > 5000 && producto.precio < 5500
);
console.log(buscar);

const buscar2 = productos.find((producto) => producto.precio == 4000);
console.log(buscar2);

//some

console.log(productos);

const busqueda = productos.some((producto) => producto.precio > 6000);
console.log(busqueda);

const busqueda2 = productos.some((producto) => producto.nombre == "Lemon Pie");
console.log(busqueda2);

//map

console.log(productos);

const descuentoEfectivo = productos.map((productos) => {
  return { Nombre: productos.nombre, Precio: productos.precio * .15 };
});

console.log(descuentoEfectivo);
