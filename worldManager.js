const fs = require('fs');

let dinamicObjects = []

let iot;

const createDinamicObject = (objectDetails,Timeout,action) =>{
    const newtimeout = new Date() + Timeout
    dinamicObjects.push([objectDetails,newtimeout,action])
}

function referenceIo(ioref){
    iot = ioref
}

setInterval(function(){
    
    dinamicObjects.forEach(dinamicObject => {
        let objectDetails = dinamicObject[0]
        let Timeout = dinamicObject[1]
        let action = dinamicObject[2]
        if(Timeout < new Date()){
            switch (action) {
                case "tree":
                    io.emit("changeWorldPattern",objectDetails)
                    print("deberia crecer un arbol")
                    break;
                default:
                    break;
            }
        }
     });
     
},17) 


const generateWorld = () => {
    console.log("Generating World")
    //Mundo base (Pastico y eso)
    let world = ""
    for (let yScan = 0; yScan < 200; yScan++) {
        for (let xScan = 0; xScan < 200; xScan++) {
        world = world + " "
        }
        world = world+"\n"
    }
    fs.writeFileSync('world.txt', world);

    //Capa 2 (Flores y bases de arboles)

    let capa2 = ""
    for (let yScan = 0; yScan < 200; yScan++) {
        for (let xScan = 0; xScan < 200; xScan++) {
        capa2 = capa2 + " "
        }
        capa2 = capa2+"\n"
    }
    fs.writeFileSync('world2.txt', capa2);

    console.log("Generation Succeed")
}

module.exports = {
    generateWorld,createDinamicObject,referenceIo
}