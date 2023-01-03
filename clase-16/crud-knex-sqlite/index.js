import { ContenedorSQL } from "./src/container/ContenedorSQL.js";

const apiAutos = new ContenedorSQL('autos');

async function main(){

    const listaAutos = [
        {marca: 'TOYOTA', modelo:'RAV4'},
        {marca: 'TOYOTA', modelo:'RAV4'},
        {marca: 'TOYOTA', modelo:'RAV4'}
    ]

    let res;

    // 1. Inderta en la base de datos
    res = await apiAutos.insertar(listaAutos)
    console.log('Inserte en tabla', res);
    
    //2. seleccionar todos los registros
    res = await apiAutos.listarAll();
    console.log('Recupera todos los registros', res);

    //3. seleccionar Por indice
    res = await apiAutos.listar(2);
    console.log('Seleccion por indice', res);

    //4) actualzia por ID
    res = await apiAutos.actualizar(2, { marca: 'HONDA', modelo: 'CR-V' })
    console.log('actualiza por ID', res);

    //4) actualzia por ID
    res = await apiAutos.actualizar(3, {modelo: 'SUPRA'})
    console.log('actualiza por ID', res);

    //5) Seleccionar todos los registros
    res = await apiAutos.listarAll();
    console.log('Recupera todos los registros', res);

    //6) Elimina por ID
    res = await apiAutos.eliminar(3);
    console.log('Elimina por ID', res);

    //5) Seleccionar todos los registros
    res = await apiAutos.listarAll();
    console.log('Recupera todos los registros', res);
    
    //finaliza la conexion con la base de datos
    await apiAutos.cerrarConexion();
}
main();