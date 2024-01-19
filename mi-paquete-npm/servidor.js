const http= require('http');

const servidor= http.createServer((req, res)=>{
    console.log('===> res (respuesta)');
    console.log(res);
    console.log(res.statusCode);


    res.end('Hola, Mundo!')
});

const PUERTO= 3000;

servidor.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`)
})