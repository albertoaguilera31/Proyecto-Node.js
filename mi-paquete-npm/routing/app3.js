const http = require('http');

const cursos = require('./cursos');
const { type } = require('os');

const servidor = http.createServer((req, res)=>{
    const {method}= req;

    switch(method){
        case 'GET':
            return manejarSolicitudGET(req, res);
        case 'POST':
            return manejarSolicitudPOST(req, res);    
        default:
            res.statusCode= 501;
            res.end(`El metodo usado no puede ser manejado por el servidor: ${method}`);
            break;    
    }
});

function manejarSolicitudGET(req, res){
    const path = req.url;

    console.log(res.statusCode);// es el valor 200 por defecto

    if(path === '/'){
        res.writeHead(200, {'Content-Type':'application/json'});
        res.statusCode = 200;
        return res.end('Bienvenidos a mi primer servidor y API creados con Node.js');
    }else if(path==='/cursos'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos));
    }else if(path === '/cursos/programacion'){
        res.statusCode= 200;
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    }

    res.statusCode = 404;
    res.end('El recurso solicitado no existe...')
}

function manejarSolicitudPOST(req, res){
    const path= req.url;
    if(path === '/cursos/programacion'){
        let cuerpo= '';

        req.on('data', contenido=>{
            cuerpo += contenido.toString();
        });

        req.on('end', ()=>{
            console.log(cuerpo);
            console.log(typeof cuerpo);

            //Convertir a un objeto de JS
            cuerpo= JSON.parse(cuerpo);
            console.log(typeof cuerpo);
            console.log(cuerpo.titulo);


            res.end('El servidor recibio una solicitud POST para /cursos/Programacion');
        });

        //res.statusCode= 200;
        //return res.end('El servidor recibio una solicitud POST para /cursos/Programacion')
    }
}

const PUERTO= 3000;

servidor.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});