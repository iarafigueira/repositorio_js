alert("Gracias por visitar mi tienda online!");
let bienvenida = true;
if (bienvenida) {
  let menu = prompt(
    "Elige una opción: \n1- Iniciar sesión. \n2- Registrarse. \n3- Suscribirse al newsletter. \n4- Salir del sitio."
  );
    switch (menu) {
      case "1":
        let user = prompt("Ingresá tu usuario");
        for (let i = 3; i > 0; i--) {
          let passSaved = 2510;
          let passUser = prompt("Ingresá tu contraseña.");
          let inicioSesion = false;
          if (passSaved == passUser) {
            alert("Sesión iniciada correctamente " + user);
            ingresar = inicioSesion;
            break;
          } else {
            alert("Contraseña incorrecta. Te quedan " + i + " intentos.");
          }
        }
        break;
      case "2":
        let nombre = prompt("Ingresá tu nombre.");
        let apellido = prompt("Ingresá tu apellido.");
        let mail = prompt("Ingresá tu correo electrónico.");
        let pass = prompt("Ingresá una contraseña.");
        alert("Usuario creado correctamente");
        break;
      case "3":
        let nombreCompleto = prompt("Ingresá tu nombre completo");
        let email = prompt("Ingresá tu correo electrónico");
        alert(
          "Gracias " +
            nombreCompleto +
            " por suscribirte. Pronto te enviaremos información a " +
            email
        );
        break;
      case "4":
        alert("Te vamos a extrañar!");
        break;
      default:
        alert("La opción es inválida.");
        break;
    }
}

alert("Nos vemos la próxima!");
