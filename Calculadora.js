
let suma = require('./operaciones/suma')
let resta = require('./operaciones/resta')
let multiplicacion = require('./operaciones/multiplicacion')
let division = require('./operaciones/division')


let operacion = process.argv[2]
let nombreDeUsuario = process.argv [3]  //colocar su nombre despues de la operacion 
let num1 = process.argv[4]
let num2 = process.argv[5]


num1 = +num1
num2 = +num2


switch (operacion) {
    case 'suma':
        let resultado = suma(num1,num2)
            console.log("Hola" + " " + nombreDeUsuario + "," +" " +"el resultado de tu operacion es " + resultado);
                break;
    case 'resta':
        let resultado2 = resta(num1,num2)
            console.log("Hola" + " " + nombreDeUsuario + "," + " " +"el resultado de tu operacion es " + resultado2);
                break;
    case 'multiplicacion':
        let resultado3 = multiplicacion(num1,num2);
        if (num1 === 0 || num2 === 0){
            console.log("Ey!!" + " " + nombreDeUsuario + "," + " " + "recuerda que todo numero multiplicado por cero dara como resultado cero");
        }else{
            console.log("Hola" + " " + nombreDeUsuario + "," + " " + "el resultado de tu operacion es " + resultado3);
        }
        break;
    case 'division':
        let resultado4 = division(num1,num2);
        if (num1 === 0 || num2 === 0){
            console.log("Ey! ey! ey! No se puede dividir por cero.");
        }else{
            console.log("Hola" + " " + nombreDeUsuario + "," + " " + "el resultado de tu operacion es " + resultado4);
        }
        break;
    default:
        console.log('Pero... ¿que paso aqui? No se encuentra la operacion solicitada.');
            break;
}


