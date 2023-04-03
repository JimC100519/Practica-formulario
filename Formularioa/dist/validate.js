const validateString =(cad) =>{
    let response = (cad.length>=3) ?true :false;
    return response;
};
const validateTelefono = ( cad)  =>{
    //ternario
    let response = (cad.length >=10) ?true : false;
    return response;
    }
class validate {
    validNames(value){
        const nombresRX = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
        const resp = value.match(nombresRX) ?true: false;
        return resp;
    }
    validMail(value) {
        const mailRX = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
        const resp = value.match(mailRX) ?true:false;
        return resp;
    }
    validateTelefono(value) {
        const telefonoRX = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/;
        const resp = value.match(telefonoRX) ?true:false;
        return resp;
    }
    validform = (objeto) => {
        const valores = Object.values(objeto);
        let resp = valores.findIndex(e => e === false);// si no encuentra un false devuelve -1
        return resp;
    }
}
export{ validateString, validateTelefono, validate }