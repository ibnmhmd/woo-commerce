import React , {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormBuilder from '../../formBuilderComponent/formComponent';
import Validator from '../../validators/validator';
import {StyleContext} from '../../contextAPI/styleContext';
import ErrorModal from '../../modals/errorModal';


const validate = new Validator();

export default class SignupComponent extends React.PureComponent {
  static contextType = StyleContext ;
    constructor(props){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleSubmitState = this.handleSubmitState.bind(this);
        this.checkEmailAvailability = this.checkEmailAvailability.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.removeInvalidElement = this.removeInvalidElement.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
          disableSubmit : true,
          formFields : [],
          showEmailLoader : false,
          showError : false,
          errorMessage : ""
        }
         this.modalProps = {
          onHide : this.onHide,
          message : "This email is already reserved .",
          header : "Validation Error"
         }
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
                           name : "fName",
                           showLoader : false
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
                            name : "lName",
                            showLoader : false
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
                            name :"email",
                            showLoader : false
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
                          name : "cEmail",
                          showLoader : false
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
                          name : "password",
                          showLoader : false
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
                          name : "cPassword",
                          showLoader : false
                        },{
                          note : "By creating an account, you agree to our Conditions of Use and Privacy Notice.",
                          type : "none",
                          class : "text-muted",

                        }
                      ];

    }
    handleShow() {
      this.setState({showError : true});
    }
    handleClose(){
      this.setState({showError : false});
    }
    handleSubmit(){
      event.preventDefault()
      ///alert(JSON.stringify(this.state.formFields));
    }
    handleSubmitState(state) {
      console.log("submit :: "+ state)
      this.setState({disableSubmit : state });
    }
    async checkEmailAvailability(response , elem ) {
      this.setState({showEmailLoader : true });
      /***** checking email ****/
      await new Promise( (resolve) => {
        setTimeout(() => {
          let { value , ref } = response[0][0];
          let email = this.state.formFields.find((_) => _.name == "email");
          /**** compare email & confirm email ****/
           if("cEmail" == elem.name && undefined !== email ){
             console.log(email.value + "---" + value)
              if(value !== email.value) {
                this.setState({showError : true, errorMessage : `Your emails are not matching ... `})
                ref.classList.remove("valid");
                ref.classList.add("in-valid");
                response = [];
                this.removeInvalidElement(elem); 
              }
           }else
           if("amine@admin.ae" !== value ) {
             this.setState({showError : true, errorMessage : `The email ** ${value} ** is already registered in our database, please use a different one or reset your password .`})
             ref.classList.remove("valid");
             ref.classList.add("in-valid");
             response = [];
             this.removeInvalidElement(elem);          
           }
           console.log("after 1 sec");
           resolve();
        }, 1000);
      }) 
        
      /**** remove loader *****/
      await new Promise( (resolve) => {
      setTimeout(()=>{
        this.setState({showEmailLoader : false }); 
        resolve();
         }, 3000);
       });  
    }
    onChange(){
      let response = [] , self = this;
      let currentElement = JSON.parse(event.target.dataset.formdata);
      response = validate.validate(event);
        /**** remove invalid fields ****/
        if(response[0].length == 0){
           this.removeInvalidElement(currentElement);  
        }else{
          if("email" == currentElement.name || "cEmail" == currentElement.name ){
            this.checkEmailAvailability(response , currentElement);
          }
          console.log("immediate")
          /**** set the returned validation values ***/
          response[0].map((resp , index ) => {
             undefined == self.state.formFields.find((_) => _.name == resp.name) ?
             self.setState({formFields : 
              [...self.state.formFields , resp ] }, () => {
                 this.handleSubmitState(!(self.state.formFields.length == 6 ));
            }) : null;
          });
          /****** ends *****/
      }   
    }
    removeInvalidElement(currentElement){
      this.setState({formFields : this.state.formFields.filter(_ => _.name !== currentElement.name )}, ()=>{
        this.handleSubmitState(!(this.state.formFields.length == 6 ));
       
      }); 
    }
    render() {
      const { value } = this.context;
        return (
             <div className="container __registeration_form">
                 <div className="row">
                     <div className="col-xs-12">
                       <div className ="__registration_form_wrapper">
                        <Form onSubmit={this.handleSubmit}>
                           { 
                             this.formData.map((form , index) => {
                               "email" == form.name ? form.showLoader = this.state.showEmailLoader : null;
                               return <FormBuilder key = {index} props = {form}/>
                             })  
                           }
                            <Form.Group controlId="formBasicPassword">
                              <Button disabled = { this.state.disableSubmit } type ="submit" className = "__registration_submit" variant = "success" >
                                 Register
                              </Button>
                            </Form.Group>
                        </Form> 
                      </div>  
                     </div>
                     
                 </div>
                  {this.state.showError ? <ErrorModal errorMessage = {this.state.errorMessage} show = {this.state.showError} handleClose = {this.handleClose}/> : null}
             </div>
        );
    }
}

