//var z;
//
//for(var i=0; i<10; i++)
//{
//    z = aleatoria(10, 20);
//    document.write(z + ", ");
//}
//
//document.write(z);

var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");


var fondo = {
    url: "images/tile.png",
    cargaOK: false
};

var vaca = {
        url:"images/vaca.png",
        cargaOK: false
    };

var cantidad = aleatoria(0, 4);
console.log(cantidad);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo(){
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas(){
    vaca.cargaOK = true;
    dibujar();
}

function dibujar()
{
    if(fondo.cargaOK){  // se puede obviar el ==true porque pregunta V o F
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK){
        for(var v=0; v < cantidad; v++){
            var x = aleatoria(0, 7);
            var y = aleatoria(0, 7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(vaca.imagen, x, y);
        }
    }
}



function aleatoria(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}