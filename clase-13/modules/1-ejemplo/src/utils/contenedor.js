import {config} from "../config/config.js"

class Contenedor {
    constructor(){
        this.archivoUrl = config.db.location;
    }

    leerArchivo(){
        return `lee el archivo en la ruta ${this.archivoUrl}`
    }

    escribeArchivo(){
        return `Escribe el archivo en la ruta ${this.archivoUrl}`

    }
}

export default Contenedor;