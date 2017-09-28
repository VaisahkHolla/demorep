const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    fs.readFile('file1', (err, data) => {
        res.write(data);
    });
    res.end();
});

server.listen(9090, () => { console.log("Server started") });