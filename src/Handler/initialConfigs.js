const fs = require('fs')

let MundoPlantilla = {
    "Version":"1.0.0 Alpha",
    "Nombre pueblo":"Mirlandia",
    "Capa0":[],
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

const generarCapa0 = () => {
    let capa0 = `{ "mundo0":[`
    for (let y = 0; y < 200; y++) {
        capa0 =  capa0 + ("[")
        for (let x = 0; x < 200; x++) {
            const rand = randomIntFromInterval(0,100)
            if(rand<40){
                capa0 = capa0 +("0,")
            }
            else if(rand<80){
                capa0 = capa0 +("1,")
                
            }else if(rand<90){
                capa0 = capa0 +("2,")
                
            }
            else{
                capa0 = capa0 +("3,")
            }
            
        }
        capa0 = capa0.slice(0, -1);
        capa0 = capa0 +("],")
    }
    capa0 = capa0.slice(0, -1);
    capa0 = capa0 + "]}"
    capa0 = JSON.parse(capa0)
    MundoPlantilla["Capa0"] = capa0.mundo0
    
}



const loadJsonFile = () => {
    // Si el mundo no existe genera uno nuevo
    if (!fs.existsSync("./src/world0.json")){
        // Generamos un array 2D y llenamos la plantilla
        generarCapa0()
        // Cuando tengamos la plantilla preparada la escribimos en un .json
        fs.writeFileSync("./src/world0.json",JSON.stringify(MundoPlantilla))
    }

}


module.exports={
    loadJsonFile
}