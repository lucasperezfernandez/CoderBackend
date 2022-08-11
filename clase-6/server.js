const express = require('express')

const app = express()

app.get('/', (request, response)=>{
    response.send('Servidor iniciado con express!')
})

const server = app.listen(8080, ()=>{
    console.log(`Servidor http escuchando en http://localhost:8080/`)
})