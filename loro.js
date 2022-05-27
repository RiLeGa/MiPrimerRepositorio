/* let texto = "Frío en invierno y calor en verano, eso es lo sano."
function loro(texto){
for (texto = 1; texto <= 5 ; texto++ ) {
    ;
    }
}
 */



/* function loro(texto){ */
/* texto = "Frío en invierno y calor en verano, eso es lo sano."
for (i = 0; i <= 4 ; i++) {
    console.log(texto);
    } 


*/

/* function noParesDeContarImparesHasta(numero)
    for (numero = 1 ; numero <= 4; numero++){
        console.log(numero)
    }

 */

/*     let doble = (num1) => num1 * 2;

    let triple = (num1) => num1 * 3;

    let aplicarCallback = (num1) => doble(num1) 

   console.log(aplicarCallback(5)) */

   function noParesDeContarImparesHasta(numero){
    cont = 0
    for (i = 0; i <= numero; i++){
        if (i % 2 == 0){
            cont ++
        }
    }
    return cont
}

console.log(noParesDeContarImparesHasta(15));
    