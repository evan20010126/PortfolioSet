var express = require('express');
const SocketServer = require('ws').Server
var app = express()
var port = 80;

app.use(express.static(__dirname))

const server = app.listen(port, () =>
    console.log('Express is running on http://localhost:' + port.toString()))

const wss = new SocketServer({ server })

wss.on('connection', ws => {
    console.log('Client connected')

    ws.on('message', data => {
        //取得所有連接中的 client
        console.log(data.toString())
        let clients = wss.clients
        //做迴圈，發送訊息至每個 client
        clients.forEach(client => {
            client.send(data.toString())
        })
    })

    ws.on('close', () => {
        console.log('Close connected')
    })
})
