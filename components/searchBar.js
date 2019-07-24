import React from 'react';
import Link from 'next/link'
import {
   Row, Col, Grid, FormGroup, InputGroup, FormControl
} from 'react-bootstrap';

const SearchBarComponent = () => (
<Grid className = "__searchbar_wrapper">
<Row className="show-grid hidden-xs hidden-sm">
<Col sm = {2} md={2}>
     <div className = "__searchbar_logo" >
       <Link href= {{pathname : "/"}}>
         <img src = "http://demo.mythemeshop.com/ecommerce-demo3/files/2015/07/logo-transparent.png" className = "img-responsive"/>
      </Link>
      </div>
         </Col>
         <Col   sm = {6} md={5}>
           {/* input search field */}
           <form>
                <FormGroup controlId="formValidationSuccess1" validationState="success">
                    <FormControl className = "__searchbar_input_text" type="text" placeholder = "What are you looking for ?"/>
                    <button className = "btn btn-success __searchbar_searchbtn"><i className="glyphicon glyphicon-search"></i></button> 
                </FormGroup>
           </form>
          { /* input search field ends */ }
         </Col>
         <Col  sm = {1} md={1}></Col>
         <Col   sm = {3} md={4}>
          <div className = "__searchbar_icons">
            <div className = "col-md-2 __searchbar_heart_icon"><i className="fas fa-heart"></i></div>
            <div className = "col-md-3 __searchbar_wish_list"><span>Wishlist </span></div>

            <div className = "col-md-2 __searchbar_cart_icon"><i className="fas fa-shopping-cart"></i></div>
            <div className = "col-md-3 __searchbar_cart"><span> Cart </span></div>
          </div>
         </Col>
  </Row>

  <Row className="show-grid hidden-md hidden-lg hidden-xl">
          <Col   xs = {12} sm = {6}>
            LOGO
         </Col>

          <Col  className = " hidden-xs" sm = {6}>
           CART
         </Col>
         <Col   sm = {12} >
           {/* input search field */}
           <form>
                <FormGroup controlId="formValidationSuccess1" validationState="success">
                    <FormControl className = "__searchbar_input_text" type="text" />
                </FormGroup>
           </form>
          { /* input search field ends */ }
         </Col>
        
         <Col className = "hidden-sm " xs = {12}>
             CART
         </Col>
  </Row>
</Grid>
);

export default SearchBarComponent;
