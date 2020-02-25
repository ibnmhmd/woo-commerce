import  React , { useState } from 'react';

var validationRule = require("./validationRules")

class Validator {
    

   validate(event){
    const candidateFields = this.getFormCandidates(event);
     return candidateFields.map((field , index) => {
        if(field.required && field.validate) {
            return this.executeValidations(field);
        }
    });

   }

   getFormCandidates(event){
    const fields = new Array();
    const element = event.srcElement;
    if(element.dataset.formdata){
        fields.push({...JSON.parse(element.dataset.formdata), value : element.value, ref : element});
    }
   /**** for bulk validation *****
   const elements = event.target.elements; 
   for(let i =0; i < elements.length; i++){
        if(elements[i].dataset.formdata){
            fields.push({...JSON.parse(elements[i].dataset.formdata), value : elements[i].value, ref : elements[i]});
        }      
    }*/
    return fields ;
   }

   executeValidations(field) {
       const rules = field.validationRules ? Object.keys(field.validationRules) : [];
       let response = [] , validationResp = {};
        for(let elem of rules ){
            if(validationRule[elem]){
                validationResp = validationRule[elem](field);
                response.push(validationResp);
                if(!validationResp.forwardToNextValidator){
                    break;
                }
            }
        }
    return response;
   }
}

export default Validator;