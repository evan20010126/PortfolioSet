var express = require('express');
const SocketServer = require('ws').Server
var app = express();
var port = 80;

app.use(express.static(__dirname));

app.listen(port, () => {
    console.log('Express is running on http://localhost:' + port.toString());
});

const wss = new SocketServer({ server });

wss.on('connection', ws => {
    console.log('Client connected');
    
    ws.on('close', () => {
        console.log('Close connected')
    })
})