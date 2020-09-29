const http = require('http');

const handleServer = function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<h1>Hola Mundo desde Node Js</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(2000, function(){
    console.log('Servidor on port 2000');
});

//crear un servidor con express npm i express
/*const express = require('express');

const server2 = express();

server2.get('/', (req, res) => {
    res.send('<h1>Hola mundo con express y Node Js</h1>');
})

server2.listen(3000, () => {
    console.log('hola');
});*/