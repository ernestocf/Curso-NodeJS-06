const http = require('http');

http.createServer((req, res) => {

        res.end();
    })
    .listen(48080);
console.log('Escuchando 48080');