import React from 'react';
import Wrapper from './../../components/appWrapper';
import SignupComponent from './../../components/partialComponents/registerSignInComponent/signupComponent';
import Router from 'next/router';
import StyleContextProvider from './../../components/contextAPI/styleContext';

export default class Register extends React.Component {
    render() {
        return (
             <Wrapper title = "Register Page" description = "Register page for the project">
            <StyleContextProvider>
             <div className="container __registeration">
                 <div className="row">
                     <div className="col-xs-12">
                       <h2 className = "text-center __registeration __registeration_header"> Create a Woo account  </h2>
                       <h4 className = "text-center __registeration __registeration_sign_in"> Already have an account ? <a onClick={() => Router.push('/')}> Sign In </a> </h4>
                        <SignupComponent />
                     </div>
                 </div>
             </div>
             </StyleContextProvider>
            </Wrapper>
        )
    }
}