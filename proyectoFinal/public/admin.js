
function getValue(){
    let inputName = document.getElementById("admin").value;
    let inputValue = document.getElementById("password").value;
    if (inputValue == 123){
        console.log(`Bienvenido admin ${inputName}`)
    }else{
        console.log(`No se encuentra admin ${inputName} en sistema`)
    }
    
}