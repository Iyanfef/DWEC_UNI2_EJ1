function generarPass(nombre) {
    var pwd = "";
    for (var i = 0; i < nombre.length; i++) {
        var letra = nombre[i];
        var posicion = i; 
        nuevaCadena += letra + posicion;
    }
    alert(pwd);
}


function ejercicio1() {
    var nombre = new String(prompt("Introduzca tu nombre:"));
    var apellidos = new String(prompt("Introduce tus apellidos"));
    var nombreCompleto = new String(nombre + " " + apellidos);
    alert(nombreCompleto);
    var nombreSinEspacios = nombreCompleto.split(" ").join("");
    alert("Tamaño de la cadena sin espacios en blanco: " + nombreSinEspacios.length);
    var nombreMinus = nombreCompleto.toLocaleLowerCase();
    var nombreMayus = nombreCompleto.toLocaleUpperCase();
    alert("Nombre en minusculas: "+nombreMinus + "\n Nombre en Mayusculas: "+nombreMayus);
    var nombreTresLineas = nombreCompleto.split(" ").join("\n");
    console.log(nombreTresLineas);
    alert(nombreTresLineas);
    var apellidosSeparados=apellidos.split(" ");
    var apellido1 = new String(apellidosSeparados[0]);
    var apellido2 = new String(apellidosSeparados[1]);
    var userName= new String(nombre + apellido1.charAt(0) + apellido2.charAt(0));
    alert(userName);
    var userName2= new String(nombre.charAt(0)+ nombre.charAt(1)+apellido1+apellido2);
    alert(userName2);
    generarPass(nombre);

}
ejercicio1();