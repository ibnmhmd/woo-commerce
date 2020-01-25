import React from 'react';
import Wrapper from '../components/appWrapper';
import {Alert} from 'react-bootstrap';


export default class Register extends React.Component {
    render() {
        return (
             <Wrapper title = "Register Page" description = "Register page for the project">

             <div className="container">
                 <div className="row">
                     <div className="col-xs-12">
                       <h3 className = "text-center"> Registeration Page Works !!!!!</h3>

                       <Alert bsStyle="warning">
                            <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
                            good.
                        </Alert>;
                     </div>
                 </div>
             </div>
            </Wrapper>
        )
    }
}