function envioFormulario(){
    location.href=location.href;
    validacionNombreApellido();
    validacionTelefono();
    validacionEmail();
    validacionCurso();
    validacionExperiencia();
}

function validacionNombreApellido(){
    nombre=document.getElementById("nombre").value;
    apellido=document.getElementById("apellido").value;

    if((nombre === null || nombre == "") || (apellido ===null || apellido == "")){
        mensaje(1);
    }else{
        console.log("Nombre: " + nombre);
        console.log("Apellido: " + apellido);
    }
}

function validacionTelefono(){
    telefono = document.getElementById("telefono").value;

    if(telefono === null || telefono == "" || isNaN(telefono)){
        mensaje(2);
    }else{
        console.log("Telefono: " + telefono);
    }
}

function validacionEmail(){
    email = document.getElementById("email").value;

    if(email === null ||email == ""){
        mensaje(3);
    }else{
        console.log("Email: " + email);
    }
}

function validacionCurso(){
    if(document.getElementById("php").checked === true){
        console.log("Curso: PHP");
    }else{
        if(document.getElementById("css").checked === true){
            console.log("Curso: CSS");
        }else{
            if(document.getElementById("javascript").checked === true){
                console.log("Curso: JavaScript");
            }else{
                mensaje(4);
            }
        }
    }
}

function validacionExperiencia(){
    if(document.getElementById("intermedio").checked === true){
        console.log("Experiencia: Intermedio");
    }else{
        if(document.getElementById("avanzado").checked === true){
            console.log("Experiencia: Avanzado");
        }else{
            mensaje(5);
        }
    }
}

function mensaje(color){
    let div = document.createElement("div");
    let p = document.createElement("p");
    switch (color) {
        case 1:p = document.createTextNode("Nombre y/o Apellido no Validos.");
        div.setAttribute("class","alert alert-danger alert-dismissible fade show");break;
        case 2:p = document.createTextNode("Numero de Telefono no Validos.");
        div.setAttribute("class","alert alert-danger alert-dismissible fade show");break;
        case 3:p = document.createTextNode("Email no Validos.");
        div.setAttribute("class","alert alert-danger alert-dismissible fade show");break;
        case 4:p = document.createTextNode("No seleccionó un curso.");
        div.setAttribute("class","alert alert-danger alert-dismissible fade show");break;
        case 5:p = document.createTextNode("No seleccionó una experiencia.");
        div.setAttribute("class","alert alert-danger alert-dismissible fade show");break;
        default:p = document.createTextNode("Usuario Agregado con éxito.");
        div.setAttribute("class","alert alert-success alert-dismissible fade show");break;
    }
    let button =document.createElement("button"); 
    div.setAttribute("role","alert");
    button.setAttribute("type","button");
    button.setAttribute("class","btn-close");
    button.setAttribute("data-bs-dismiss","alert");
    button.setAttribute("aria-label","Close");
    div.appendChild(p);
    div.appendChild(button);
    let mensaje = document.getElementById("mensaje");
    mensaje.appendChild(div);
}