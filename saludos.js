/*function saludar(nombre){
    return `Hola ${nombre}`;
}

function saludarHolaMundo(){
    return "¡Hola, Mundo!"
}*/

//module.exports.saludar= saludar;

//module.exports.saludarHolaMundo= saludarHolaMundo;

//sintaxis alternativa de exportación de modulos

module.exports ={
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo
}