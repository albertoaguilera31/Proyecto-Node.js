//const { saludar, saludarHolaMundo }=require("./saludos.js");

//console.log(saludar("FreeCodeCamp"));

//console.log(saludarHolaMundo());

//console.log(process);

//console.log(process.memoryUsage());

//const os =require('os');

//console.log(os.homedir());

//ejemplo de SETTIMEOUT

/*function mostrarTema(tema){
    console.log(`estoy aprendiendo ${tema}`);
}

setTimeout(mostrarTema, 3000, 'node.js');*/

/*function sumar(a, b){
    console.log(a+b);
}

setTimeout(sumar, 3000, 5, 6);*/

//ejemplo de SETIMMEDIATE

/*function mostrarTema(tema){
    console.log(`estoy aprendiendo ${tema}`);
}

console.log('antes de setImmediate()');
setImmediate(mostrarTema, 'node.js');
console.log('después de setImmediate()');*/

//ejemplo de SETINTERVAL

/*function mostrarTema(tema){
    console.log(`estoy aprendiendo ${tema}`);
}

setInterval(mostrarTema, 3000, 'node.js');*/

/*function sumar(a, b){
    console.log(a+b);
}

setInterval(sumar, 1500, 4, 5);*/

//MODULO FS

/*const fs = require('fs');

fs.readFile('index.html', 'utf-8', (err, contenido)=>{
    if(err){
        throw err;
    }else{
        console.log(contenido);
    }
});*/

//REEMPLAZAR CONTENIDO DEL ARCHIVO

const fs = require('fs');

/*fs.writeFile('index.html', 'contenido nuevo', (err)=>{
    if(err){
        throw err;
    }
    console.log('contenido reemplazado');
});*/

//ELIMINAR ARCHIVOS

fs. unlink('main.html', (err)=>{
    if(err){
        throw err;
    }
    console.log('Archivo eliminado');
})













