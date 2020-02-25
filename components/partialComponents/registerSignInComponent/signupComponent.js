import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormBuilder from '../../formBuilderComponent/formComponent';
import Validator from '../../validators/validator';
import {StyleContext} from '../../contextAPI/styleContext';

const validate = new Validator();

export default class SignupComponent extends React.PureComponent {
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
                           class : "default",
                           change : this.onChange,
                           name : "fName"
                          },
                          {
                            label : "Last Name" ,
                            type : "text",
                            placeholder : "Enter your lastname",
                            controlId : "lastNameController",
                            validate : true,
                            required : true,
                            class : "default",
                            validationRules : {minLength : 6 , maxLength : 12 },
                            change : this.onChange,
                            name : "lName"
                         },
                          {
                            label : "Email Address" ,
                            type : "email",
                            placeholder : "Enter your emil address",
                            controlId : "emailController",
                            note : "We'll never share your email with anyone else." ,
                            validate : true,
                            required : true,
                            class : "text-muted default",
                            validationRules : { emailValidator : "" },
                            change : this.onChange,
                            name :"email"
                         },
                         {
                          label : "Confirm Email Address" ,
                          type : "email",
                          placeholder : "Enter your emil address",
                          controlId : "emailController",
                          validate : true,
                          required : true,
                          class : "default",
                          validationRules : { emailValidator : "" },
                          change : this.onChange,
                          name : "cEmail"
                        },
                        {
                          label : "Password" ,
                          type : "password",
                          placeholder : "Enter your password",
                          controlId : "passwordController",
                          validate : true,
                          required : true,
                          class : "default",
                          validationRules : { minLength : 8 , passwordValidator : "" },
                          change : this.onChange,
                          note : "Your password should be at least 8 characters long alphanumeric ." ,
                          name : "password"
                        },
                        {
                          label : "Confirm Password" ,
                          type : "password",
                          placeholder : "Enter your password",
                          controlId : "confirmPasswordController",
                          validate : true,
                          required : true,
                          class : "default",
                          validationRules : { minLength : 8 , passwordValidator : "" , dependents: ["passwordController"] },
                          change : this.onChange,
                          note : "This field should match the above one .",
                          name : "cPassword"
                        },{
                          note : "By creating an account, you agree to our Conditions of Use and Privacy Notice.",
                          type : "none",
                          class : "text-muted",

                        }
                      ];
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
          submitDisabled : true,
          formState : []
        }
    }

    handleSubmit(){
      event.preventDefault()
      /*const validate = new Validator();
      let response = [];
      response = validate.validate(event);
      console.log(response)*/
    }
    onChange(){

      let response = [] , self = this;
      let fieldName = JSON.parse(event.target.dataset.formdata).name;
      response = validate.validate(event);
      response[0].map((index , val ) => {
       /* this.setState(()=>{
          debugger
          if(fieldName == val.name){

          }
        })*/
      });
      console.log(response[0])
    }
    render() {
      const { value } = this.context;
      console.log(this.context)
        return (
             <div className="container __registeration_form">
                 <div className="row">
                     <div className="col-xs-12">
                       <div className ="__registration_form_wrapper">
                        <Form onSubmit={this.handleSubmit}>
                           { 
                             this.formData.map((form , index) => {
                               return <FormBuilder key = {index} props = {form}/>
                             })  
                           }
                            <Form.Group controlId="formBasicPassword">
                              <Button disabled = { this.state.submitDisabled } type ="submit" className = "__registration_submit" variant = "success" >
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