// MODULOS NODE
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const fs = require('fs')


// MODULOS DE LA APLICACION
const {loadJsonFile} = require("./Handler/initialConfigs")
const Debug = require("./Handler/Debug.js")

app.get('/mundo', (req, res) => {
  res.sendFile(__dirname + "/world0.json");
});

io.on('connection', (socket) => {
    // Cuando se conecta un usuario al servidor mandamos el aviso
    Debug.info("Login","Se ha conectado un nuevo usuario.")

});


server.listen(3000, () => {

    // Creamos y/o cargamos el mundo
    loadJsonFile()

    // Cuando ya estemos como un yogurt mandamos la alerta de que se inicio el server
    console.log('Servidor arrancado en el puerto *:3000');
  
});