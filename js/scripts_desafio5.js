const suscribirse = document.getElementById('suscribirse');

function confirmarSuscripcion (nombre) {
    alert("Gracias por suscribirte al newsletter " + nombre + ". \nTe llegará por correo un descuento de bienvenida.")
}

suscribirse.addEventListener('click', () => {
    let nombre = document.getElementById('nombre').value;
    confirmarSuscripcion(nombre);
})

