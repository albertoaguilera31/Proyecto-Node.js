function ordenarProducto(producto){
    return new Promise((resolve, reject)=>{
        console.log(`Ordenando: ${producto} de FreeCodeCamp.`);
        setTimeout(()=>{
            if(producto=== 'taza'){
                resolve('ordenando taza con logo del freecodecamp');
            }else{
                reject('Este producto no está disponible actualmente');
            }
        },3000);
    });
}

function procesarPedido(respuesta){
    return new Promise(resolve=>{
        console.log('procesando respuesta...');
        console.log(`La respuesta fue: "${respuesta}"`);
        setTimeout(()=>{
            resolve('Gracias por tu compra. Disfruta tu producto.')
        }, 4000)
    })
}

//ordenarProducto('lapiz')
 //   .then(respuesta=>{
   //     console.log('respuesta recibida');
   //     console.log(respuesta);
   //     return procesarPedido(respuesta);
   // })
   // .then(respuestaProcesada=>{
   //     console.log(respuestaProcesada);
   // })
   // .catch(error=>{
    //    console.log(error);
   // })

//FUNCION ASINCRONA CON ASYNC AWAIT

async function realizarPedido(producto){
    try{
        const respuesta = await ordenarProducto(producto);
        console.log('respuesta recibida');
        console.log(respuesta);
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    }catch (error){
        console.log(error);
    }
}

realizarPedido('lapiz');
   