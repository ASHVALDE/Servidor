let players = {

}
let socketRef = {

}
function createPlayer(PlayerInitial,socketReference) {
    const data = PlayerInitial.split(",")
    players[data[0]]=
    {
        "x": data[1],
        "y": data[2]
    }
    socketRef[socketReference]= data[0]
}




module.exports = {
    createPlayer,players,socketRef
}