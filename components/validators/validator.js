import  React , { useState } from 'react';

var validationRule = require("./validationRules")

class Validator {
   validate(event){
    const candidateFields = this.getFormCandidates(event);
    candidateFields.map((field , index) => {
        if(field.required && field.validate) {
            this.executeValidations(field);
        }
    });
    console.log(candidateFields)
   }

   getFormCandidates(event){
    const fields = new Array();
    const elements = event.target.elements;
    for(let i =0; i < elements.length; i++){
        if(elements[i].dataset.formdata){
            fields.push({...JSON.parse(elements[i].dataset.formdata), value : elements[i].value, ref : elements[i]});
        }      
    }
    return fields ;
   }

   executeValidations(field) {
       const rules = field.validationRules ? Object.keys(field.validationRules) : [];
       rules.forEach((elem) => {
         console.log(`Forwarding validation to ${elem} ....`);
         validationRule[elem](field);
       });
   }
}

export default Validator;