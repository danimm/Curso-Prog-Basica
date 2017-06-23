var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

// var imagenes = {     Arriba es lo mismo que decir esto:
//      Cauchin: "vaca.png",
//      tatatatatat
// }



var coleccion = [];
coleccion.push( new Pakiman("Cauchin", 100, 30) );
coleccion.push( new Pakiman("Pokacho", 80, 50) );
coleccion.push( new Pakiman("Tocinauro", 120, 40) );

for(var pakin of coleccion){    // Recorrer la cantidad de veces que un objeto existe.                      // con of en lugar de in para el nuevo estandar. te muestra la instancia directamente - en vez del indice-.
    pakin.mostrar(); // coleccion[pakin] con el in
}

for(var x in coleccion[0]){
    console.log(x);
}