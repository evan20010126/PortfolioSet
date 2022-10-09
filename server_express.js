var express = require('express');
const SocketServer = require('ws').Server
var app = express()
var port = 80;

app.use(express.static(__dirname))

const server = app.listen(port, () =>
    console.log('Express is running on http://localhost:' + port.toString()))

const wss = new SocketServer({ server })

wss.on('connection', (ws, req) => {

    console.log('Client connected')

    console.log(req.socket.remoteAddress)


    ws.on('close', () => {
        console.log('Close connected')
    })
})
