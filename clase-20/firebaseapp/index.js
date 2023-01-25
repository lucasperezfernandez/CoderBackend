import admin from "firebase-admin";
import serviceAccount from "./db/crt/clase20-8e77c-firebase-adminsdk-442fa-29ce9004a2.json" assert {type: " json "};

//Se conecta gracias a esta funcionalidad 
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

CRUD();

async function CRUD(){
  try {
    //configurar modelo de collection a utilizar
    const db = admin.firestore();
    const usuarios = db.collection('usuarios');
  
    const usuariosList = [
      {nombre: 'Jose', dni: 11223344},
      {nombre: 'Ana', dni: 22334455},
      {nombre: 'Diego', dni: 33445566}
    ]
  
    for(const usuario of usuariosList){
      let doc = usuarios.doc();//id generado automaticamente
      await doc.create(usuario);

      console.log('Usuarios insertados')




      let response = await usuarios.get();
      //hasta 1:30:00 clase 20

      console.log('Usuaios Recuperados', response.docs)


    }
  } catch (error) {
    console.log(error);
  }
}