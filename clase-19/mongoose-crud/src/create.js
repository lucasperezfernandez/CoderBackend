import mongoose from 'mongoose';
import { usuarioModel } from './model/usuarios.model.js';
import { config } from './utils/config.js';


async function Main(){
    try {
        const strConn = `mongodb://${config.db.host}:${config.db.port}/${config.db.dbName}`
        const conn = await mongoose.connect(strConn, config.dbName) ;
        console.log('Base de datos conectada!');
        
        let response;
        //Insert
        const usr1= {nombre: 'Juan', apellido: 'Perez', email: 'jp@email.com', usuario: 'jp', password: '123456'}
        response = await usuarioModel.create(usr1);
        console.log(`Documento insertado`, response);

        //Find
        response = await usuarioModel.find();
        console.log(`Documento Seleccionado`, response);
    
        //Update
        response = await usuarioModel.updateOne({nombre: 'Juan'}, {$set: {password: "654321"}});
        console.log(`Documento Actualizado`, response);

        //Delete    
        response = await usuarioModel.deleteOne({nombre: 'Juan'});
        console.log(`Documento eliminado`, response);


        await mongoose.disconnect();
        console.log('Base de datos desconectada!');
    } catch (error) {
        console.log(error);
    }
}
Main(); 