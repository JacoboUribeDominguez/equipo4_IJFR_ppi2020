//requerimos modulos
const os = require('os');
console.log(os.platform());

const fs = require('fs');
fs.writeFile('./texto.txt', 'linea uno', function (err){
    if(err){
        console.log(err);
    }
    console.log('Archivo Creado')
});

fs.readFile('./texto.txt', function(err, data){
    if(err){
        console.log(err);
    }
    console.log(data.toString()); //transformamos lo adquirido en el archivo creado ("texto.txt")
});

//modulo creación y lectura de archivos

