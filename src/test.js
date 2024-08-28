let capa0 = `{ "mundo0":[`

for (let y = 0; y < 200; y++) {
    capa0 =  capa0 + ("[")
    for (let x = 0; x < 200; x++) {
        capa0 = capa0 +("0,")
    }
    capa0 = capa0.slice(0, -1);
    capa0 = capa0 +("],")
}
capa0 = capa0.slice(0, -1);
capa0 = capa0 + "]}"
capa0 = JSON.parse(capa0)

console.log(capa0["mundo0"][24][5])