//THIS IS THE FIRST VERSION

/*const fs = require('fs');

const server = require('http').createServer();
//instance of event emitter is returned
server.on('request', (req, res) => {
    //server.on =event emitter
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(fs.readFileSync('file1'));

});
server.listen(9090, () => console.log('Server Started'))
*/

//THIS IS THE SECOND VERSION

//  https://pastebin.com/gZNwH8Rp
const fs = require('fs');

function pickup(request, response) {
    //required to process CORS
    if (request.method == 'OPTIONS') {
        response.setHeader('Access-Control-Allow-Origin', '*'); //IP can be specified
        response.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE'); //Methods allowed
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type'); //
        response.end();
    } else {
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader("Content-Type", "application/json")
            //response.end();
    }
}
const server = require('http').createServer(pickup); //pickup is needed to define config



server.on('request', (req, res) => {

    res.end(fs.readFileSync('data.json'));

});
server.listen(9090, () => console.log('Server Started'))