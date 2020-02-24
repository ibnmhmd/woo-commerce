
const minLength = (field) => {
    const { value , validationRules , ref } = field ;
    let valid = false , forwardToNextValidator = true;
    if(value.length < parseInt(validationRules.minLength)){
        ref.classList.remove("valid");
        ref.classList.add("in-valid");   
        forwardToNextValidator = false;   
    }else{
        ref.classList.remove("in-valid");
        ref.classList.add("valid");
        valid = true ;
    }
    return {valid , executor : "minLength" , forwardToNextValidator };
}

const maxLength = (field) => {
    const { value , validationRules , ref} = field ;
    let valid = false , forwardToNextValidator = true ;
    if((value.length > parseInt(validationRules.maxLength) )){
        ref.classList.remove("valid");
        ref.classList.add("in-valid");
        forwardToNextValidator = false;
    }else{
        ref.classList.remove("in-valid");
        ref.classList.add("valid");
        valid = true ;
    }
    return {valid , executor : "maxLength" , forwardToNextValidator};
}

/* catchError = (ref , action , class ) => 
{  
    'use strict';
    if("add" == action) {
        ref.classList.add(class);
    }
    if("remove" == action) {
        ref.classList.remove(class);
    }
};*/

module.exports = {
    minLength,
    maxLength
}