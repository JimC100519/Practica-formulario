import { validateString, validateTelefono, validate} from './validate.js';
import { addStudent, modalAlert } from './paint.js';
const btnEnviar =document.getElementById("btnEnviar");
const form =document.getElementById("fmcontact");

//Instanciar el objeto validate
let validator = new validate();
// objeto de validacion 
const objectValid = {
    nameObject: false,
    lastNameobject: false,
    mailObjetct: false,
    teleObject: false,
    msnObject: false,

}

form.addEventListener("change", function(event){
const inputId = event.target.id;
console.log(inputId);
const inputValue = event.target.value;
console.log(inputValue);
const inputclass = event.target.classList;
console.log(inputclass);

const validClass = () => {
    inputclass.add("is-valid");
    inputclass.remove("is-invalid");
};
const invalidClass = () => {
    inputclass.add("is-invalid");
    inputclass.remove("is-valid");
};
switch (inputId) {
    case "name":
        objectValid.nameObject = validator.validNames(inputValue);
        objectValid.nameObject ? validClass() : invalidClass();
        console.log(Object.values(objectValid));
        break;
    case "lastName":
        objectValid.lastNameobject = validator.lastName(inputValue);
        objectValid.lastNameobject ? validClass() : invalidClass();
        console.log(Object.values(objectValid));
    break;
    case "mail":
        objectValid.mailObjetct = validator.validMail(inputValue);
        objectValid.mailObjetct ? validClass() : invalidClass();
        console.log(Object.values(objectValid));
    break;
    case "tele":
        objectValid.mailObjetct = validator.validateTelefono(inputValue);
        objectValid.mailObjetct ? validClass() : invalidClass();
        console.log(Object.values(objectValid));
    break;
    case "msn":
        objectValid.mailObjetct = validator.validateString(inputValue);
        objectValid.mailObjetct ? validClass() : invalidClass();
        console.log(Object.values(objectValid));
    break;    
    }
});
btnEnviar.addEventListener("click",(e) =>{
    e.preventDefault();
    const nombre = document.getElementById("name").Value;
    const apellido = document.getElementById("lastname").Value;
    const correo = document.getElementById("mail").Value;
    const telefono = document.getElementById("telephone").Value;
    const mensaje = document.getElementById("fm_contact").Value;
if (validator.valiform(objectValid) === -1){
    addStudent(nombre,apellido, correo, telefono, mensaje);
    console.log("Enviando formulario");
}else{
    modalAlert("Error revise los datos");
    }
});
