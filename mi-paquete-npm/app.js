/*const promesaCumplida= false;

const miPromesa= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(promesaCumplida){
            resolve('Promesa cumplida!');
        }else{
            reject('Promesa rechazada...')
        }
    }, 3000);
});

//miPromesa.then((valor)=>{
   // console.log(valor);
//})

const manejarPromesaCumplida= (valor)=>{
    console.log(valor);
}

const manejarPromesaRechazada = (razonRechazo)=>{
    console.log(razonRechazo);
}

miPromesa.then(manejarPromesaCumplida ,manejarPromesaRechazada);*/

//EJEMPLO DE PROMESAS CON EJERCICIO #2

const estatusPedido= ()=>{
    const estatus= Math.random() <0.8;
    console.log(estatus);
    return estatus;
}

const miPedidoDePizza= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(estatusPedido()){
            resolve('Pedido exitoso!');
        }else{
            reject('Ocurrió un error...');
        }
    }, 3000);
}); 

const manejarPedido= (mensajeDeConfirmacion)=>{
    console.log(mensajeDeConfirmacion);
}

const rechazarPedido= (mensajeDeRechazo)=>{
    console.log(mensajeDeRechazo);
}

miPedidoDePizza
.then((mensajeDeConfirmacion)=>{
    console.log(mensajeDeConfirmacion);
})
.catch((mensajeDeRechazo)=>{
    console.log(mensajeDeRechazo);
})

//miPedidoDePizza.then(manejarPedido, rechazarPedido);










