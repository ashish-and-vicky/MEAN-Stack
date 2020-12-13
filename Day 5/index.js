// internal module provided by NODEJS
const http = require('http');

http.createServer((request, response) => {

    let json = {
        title: 'CDAC',
        id: 'MUMBAI'
    }

    response.end(JSON.stringify(json));

}).listen(5500);