import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default class RegisterComponent extends React.Component {
    constructor(props){
        super();
        this.state = { 
                        firstName : "First Name" ,
                        lastName : "Last Name" ,
                        email : "Email address" ,
                        emailNote : "We'll never share your email with anyone else." ,
                        confirmEmail : "Confirm Email address" ,
                        password : "Password" ,
                        confirmPassword : "Confirm Password" ,
                        registerNote : "By creating an account, you agree to our Conditions of Use and Privacy Notice.",
                        register : "Register"
                      };
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(){
        console.log("Submitting form ... ");
    }
    render() {
        return (
             <div className="container __registeration_form">
                 <div className="row">
                     <div className="col-xs-12">
                       <div className ="__registration_form_wrapper">
                        <Form>
                           <Form.Group controlId="formBasicEmail">
                                <Form.Label>{this.state.firstName}</Form.Label>
                                <Form.Control type="text" placeholder="Enter your first name" />
                          </Form.Group>

                          <Form.Group controlId="formBasicEmail">
                                <Form.Label>{this.state.lastName}</Form.Label>
                                <Form.Control type="text" placeholder="Enter your last name" />
                          </Form.Group>

                          <Form.Group controlId="formBasicEmail">
                                <Form.Label>{this.state.email}</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                                <Form.Text className="text-muted">
                                  {this.state.emailNote}
                                </Form.Text>
                          </Form.Group>

                          <Form.Group controlId="formBasicEmail">
                                <Form.Label>{this.state.confirmEmail}</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                          </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>{this.state.password}</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>{this.state.confirmPassword}</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                    <Form.Text className="text-muted">
                                      {this.state.registerNote}
                                    </Form.Text>
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicPassword">
                              <Button className = "__registration_submit" variant="success" onClick = {this.submitForm} >
                                 {this.state.register}
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