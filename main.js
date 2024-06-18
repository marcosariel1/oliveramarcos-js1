let nombreIngresado = prompt('Ingrese su nombre')
alert('Bienvenido/a a pastelería "Es por tí"')

let producto = '';
let producto1 = '1';
let producto2 = '2';
let producto3 = '3';
let precio = 0;
let precio1 = 1000;
let precio2 = 800;
let precio3 = 900;
let cantidad = 0;
let seguiComprando = false;
let precioTotal = 0;
let cantidadTotal = 0;

do {
    producto = prompt(nombreIngresado.toUpperCase() + ' Elija alguna de nuestras delicias \n 1.Cheesecake en tonos rosas con base de oreo \n 2. Postre mousse de frutilla, dulce de leche y chocolate\n 3. Postre con merengue italiano con base de oreo ')
    cantidad = parseInt(prompt('¿Cuántos desea comprar?'));
    
    
    while
        (isNaN(cantidad) || cantidad <= 0) {
        alert('Debe agregar una cantidad válida');
        cantidad = parseInt(prompt('¿Cuántos desea comprar?'));
     }

switch (producto) {
    case '1':
        precio = (precio1);
        break;
        case '2':
            precio = (precio2);
            break;
        case '3':
            precio = (precio3);
            break;
        default:
            alert('Producto no existe');
            cantidad = 0;

    }

    precioTotal += precio * cantidad;
    cantidadTotal += cantidad;

    seguiComprando = confirm('¿Quieres comprar algo más?');

} while (seguiComprando);

alert("Ha comprado " + cantidadTotal + ' productos y el precio final es $' + precioTotal);
alert('Gracias por tu visita!')