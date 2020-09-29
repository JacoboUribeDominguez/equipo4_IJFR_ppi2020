const Math = {};

function add(x1, x2){
    return x1 + x2;
}
function substract(x1, x2){
    return x1 - x2;
}
function multiply(x1, x2){
    return x1 * x2;
}
function divide(x1, x2){
    if(x2 == 0){
        console.log("No se puede dividir por 0");
    }else{
        return x1 / x2;
    }
}

//relacionar objeto con funciones del archivo
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

//exportar objetos
module.exports = Math;

//exportar funciones especificamente

function hello(name){
    console.log('hello', name);
}

module.exports = hello;
