//npm init -y && npm i express ejs
/*------------------------Modulos-------------------------------*/
const express = require('express');
const path = require('path');

const app = express();

/*--------------------Middlewares-------------------------*/
app.use(express.static(path.join(__dirname, 'public')));

/*--------------------Motores de Plantilla-------------------------*/
app.set('views', './views');
app.set('view engine', 'ejs');

/*--------------------Rutas-------------------------*/
app.get('/medidor',(req,res)=>{
    const datos = {
        min: req.query.min,
        max: req.query.max,
        nivel:req.query.nivel,
        titulo: req.query.titulo
    }
    res.render('medidor', datos);
});

/*------------------------Servidor-------------------------------*/
const PORT = 8081;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
})
server.on('error', error => {
    console.error(`Error en el servidor ${error}`);
});


// clase 10 1:35:00