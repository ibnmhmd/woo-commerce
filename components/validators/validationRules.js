
const minLength = (field) => {
    const { value , validationRules , ref } = field ;
    if(value.length < parseInt(validationRules.minLength)){
        console.log("Validation failed at minLength, not valid, length is :", value.length);
        ref.classList.remove("valid");
        ref.classList.add("in-valid");
        return false;
    }else{
        ref.classList.remove("in-valid");
        ref.classList.add("valid");
        console.log("Passed !!!");
    }
}

const maxLength = (field) => {
    const { value , validationRules } = field ;
    if((value.length > parseInt(validationRules.maxLength) )){
        console.log("Validation failed at maxLength, not valid, length is :", value.length);
        return false;
    }else{
        console.log("Passed !!!");
    }
}


module.exports = {
    minLength,
    maxLength
}