var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var anchoCanvas = d.width;


function dibujoPorClick(){
    var xxx = parseInt(texto.value);
    
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var colorcito = "#FAA";
    var espacio = anchoCanvas / lineas;

    for(l=0; l < lineas; l++){
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea("#AAF", 0, yi, xf, 300);
        console.log("Linea " + l);
      }

    dibujarLinea(colorcito, 1,1,1,300);
    dibujarLinea(colorcito, 1,299,299,299);




function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
}

