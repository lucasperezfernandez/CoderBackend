// npm init -y && npm i express pug
/*--------------------Modulos-------------------------*/
const express = require('express');
const path = require('path');

/*--------------------Instancia-------------------------*/
const app = express()

/*--------------------Middlewares-------------------------*/
app.use(express.static(path.join(__dirname, 'public')));

/*--------------------Motores de Plantilla-------------------------*/
app.set('views', './views');
app.set('view engine', 'pug');

/*--------------------Rutas-------------------------*/
app.get('/test', (req,res)=>{
    const datos = {
        min:1,
        max:10,
        value:7,
        titulo:'Medidor'
    };
    res.render('medidor', datos);
});  


/*--------------------Servidor-------------------------*/
const PORT = 8081;
const server= app.listen(PORT,()=>{
    console.log(`Servidor esruchado en puerto ${PORT}`);
});
server.on('error', error=>{
    console.error(`Error en el servidor ${PORT}`);
});

