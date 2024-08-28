const info = (indentificador,data) => {
    console.log('\x1b[33m['+indentificador+']: '+data+'\x1b[0m')
}
const warning = (indentificador,data) => {
    console.log('\x1b[34m['+indentificador+']: '+data+'\x1b[0m')
}
const error = (indentificador,data) => {
    console.log('\x1b[31m['+indentificador+']: '+data+'\x1b[0m')
}

module.exports = {info,warning,error}