const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const worldManager = require("./worldManager.js")
const playerManager = require("./playerManager.js")
const fs = require('fs');
const { emit } = require('process');


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

io.on('connection', (socket) => {
    fs.readFile('world.txt', 'utf8', function (err, data) {
        console.log('a user connected, Sending World Data!!');
        socket.emit("initialWorld1",data)
        socket.emit("initialWorldPlayers",JSON.stringify(playerManager.players))
    });

    socket.on("newConnectionInitialPar",(event) => {
        playerManager.createPlayer(event,socket.id)
        let data = event.split(",")[0]

        console.log(data+" se conecto con el id "+socket.id)

        io.emit("newConnection",event)
    })
    socket.on("userMove",(event) => {
        io.emit("userMoveServer",event)
    })

    socket.on("editWorldPos",(event) => {
        io.emit("changeWorld",event)
        let obj = JSON.parse(event)
        if(obj[2]=="1"){
            worldManager.createDinamicObject(event,5000,"tree")
        }
        console.log("cambio en el mundo")
    })
    socket.once('disconnect', function () {
        let username = playerManager.socketRef[socket.id]
        io.emit("userDisconect",username)
        console.log(username+" se desconecto con el id "+socket.id)
        delete playerManager.players[username]
      });
});


// Primero se ejecuta esto
server.listen(3000, () => {
    console.log('listening on *:3000');
    worldManager.referenceIo(io)
    if (fs.existsSync('world.txt')==false || fs.existsSync('world2.txt')==false) {
        console.log("World doesnt exist, generating a new one!")
        worldManager.generateWorld();
    }
});

