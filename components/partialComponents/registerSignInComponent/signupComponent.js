import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormBuilder from '../../formBuilderComponent/formComponent';
import Validator from '../../validators/validator';
import {StyleContext} from '../../contextAPI/styleContext';

export default class SignupComponent extends React.Component {
  static contextType = StyleContext ;
    constructor(props){
        super();
         this.formData = [{ 
                           label : "First Name" ,
                           type : "text",
                           placeholder : "Enter your firstname",
                           controlId : "firstNameController",
                           validate : true,
                           required : true,
                           validationRules : {minLength : 6 , maxLength : 12 },
                           class : "default"
                          },
                          {
                            label : "Last Name" ,
                            type : "text",
                            placeholder : "Enter your lastname",
                            controlId : "lastNameController",
                            validate : true,
                            required : true,
                            class : "default"
                         },
                          {
                            label : "Email Address" ,
                            type : "email",
                            placeholder : "Enter your emil address",
                            controlId : "emailController",
                            note : "We'll never share your email with anyone else." ,
                            validate : true,
                            required : true,
                            class : "text-muted",
                            class : "default"
                         },
                         {
                          label : "Confirm Email Address" ,
                          type : "email",
                          placeholder : "Enter your emil address",
                          controlId : "emailController",
                          validate : true,
                          required : true,
                          class : "default"
                        },
                        {
                          label : "Password" ,
                          type : "password",
                          placeholder : "Enter your password",
                          controlId : "passwordController",
                          validate : true,
                          required : true,
                          class : "default"
                        },
                        {
                          label : "Confirm Password" ,
                          type : "password",
                          placeholder : "Enter your password",
                          controlId : "passwordController",
                          validate : true,
                          required : true,
                          class : "default"
                        },{
                          note : "By creating an account, you agree to our Conditions of Use and Privacy Notice.",
                          type : "none",
                          class : "text-muted",

                        }
                      ];
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleHover = this.handleHover.bind(this);
    }

    handleSubmit(){
      event.preventDefault()
      const validate = new Validator();
      validate.validate(event);
    }
    handleHover(){

    }
    render() {
      const { style } = this.context;
      console.log(style)
        return (
             <div className="container __registeration_form">
                 <div className="row">
                     <div className="col-xs-12">
                       <div className ="__registration_form_wrapper">
                        <Form onSubmit={this.handleSubmit}>
                           { 
                             this.formData.map((form , index) => {
                               return <FormBuilder key = {index} props = {form} />
                             })  
                           }
                            <Form.Group controlId="formBasicPassword">
                              <Button type ="submit" className = "__registration_submit" variant = "success" >
                                 Register
                              </Button>
                            </Form.Group>
                        </Form> 
                      </div>  
                     </div>
                 </div>
             </div>
        );
    }
}