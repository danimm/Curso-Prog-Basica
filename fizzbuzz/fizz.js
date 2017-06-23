var numeros = 100;
var divisible = false;
for(var i = 1; i <= 100; i++){
    // divisible = false;  
    if( esDivisible(i,3)){
        document.write("fizz");
        // divisible = true;
    }
    if(esDivisible(i, 5)){
        document.write("buzz");
        // divisible = true;
    }
    // if(!divisible){ // significa NO si No es divisible
    //     document.write(i + "<br />");
    // }
    // verdadero Y verdadero = Verdadero,
    if( !esDivisible(i,3) && !esDivisible(i, 5)){  // si es divisible por 3 Y significa && es...
        document.write(i + "<br />");
       }
    document.write("<br>");
}

function esDivisible(num, divisor){
    if(num % divisor == 0){
        return true;
    }
    else{
        return false;
    }
}