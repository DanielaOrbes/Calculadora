const sumar = require('./sumar');
const restar = require('./restar');
const multiplicar = require('./multiplicar');
const dividir = require('./dividir');


const operacion = process.argv[2];
const numero1 = +process.argv[3]
const numero2 = +process.argv[4]

if(process.argv[3] == undefined || process.argv[4] == undefined){
    return console.log('Ingrese ambos números');
}else{
switch (operacion){
    case 'sumar':
        console.log(sumar(numero1,numero2));
         break;
    case 'restar':
        console.log(restar(numero1,numero2));
         break;
    case 'dividir':
         console.log(dividir(numero1,numero2));
         break;
    case 'multiplicar':
         console.log(multiplicar(numero1,numero2));
         break;
    default:
        console.log('La operación '+ process.argv[2] + ' ingresada no es válida!');
    }
}