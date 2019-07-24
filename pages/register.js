import React from 'react';
import Wrapper from '../components/appWrapper';


export default class Register extends React.Component {
    render() {
        return (
             <Wrapper title = "Register Page" description = "Register page for the project">

             <div className="container">
                 <div className="row">
                     <div className="col-xs-12">
                       <h3 className = "text-center"> Registeration Page Works !!!!!</h3>
                     </div>
                 </div>
             </div>
            </Wrapper>
        )
    }
}