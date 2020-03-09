import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton className = "text-center">
          <Modal.Title id="contained-modal-title-vcenter">
           {props.item.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container fluid>
          <Row className="show-grid">
            <Col xs={12} md={6}>
              <img className = "img-responsive" src= {props.item.img} alt=""/>
            </Col>
            <Col xs={12} md={6}>
            <span className="colorBlack">{props.item.description}</span>
            <div className = "__quickItem_no_small"><small> Item SKU : {props.item.sku}</small></div>
            <div className = "__quickItem_no_small"><small> From : <a className ="anchor">{props.item.by}</a></small></div>
            <div className = "text-success __quickItem_aqty"> <small> Available Quantity : {props.item.availQty} | In Stock . </small> </div>
             <Row className="show-grid">
                <Col xs={12} md={6}>
                <div className = "__quickItem_no_small"><small> Original Price : <del className ="text-danger __quick_item_orp"> AED {props.item.orgPrice}</del></small></div>
                <div className = "__quickItem_no_small"><small> New Price : <strong className ="text-success __quick_item_newp"> AED {props.item.discountPrice}</strong></small></div>
                <div className = "__quickItem_no_small"><small> You Saved : <strong className ="text-success"> AED {props.item.orgPrice - props.item.discountPrice}</strong></small></div>
                </Col>
               <Col xs={12} md={6} className ="__quick_item_price_note"> 
                 <div><small> <strong><ins>All prices include VAT. </ins></strong></small> </div>
                 <div className="__quick_item_price_note_market"><small><i>We bring you the best and latest prices from the market .</i></small></div>
               </Col>
            </Row>
               <div className="__quick_item_delivery">
                 <i>Want it Fast, Tomorrow or After Tomorrow ? <small>Choose Fast/Express Delivery when placing your order.</small></i>
              </div>

              <div className="__quick_item_delivered_by_us text-success">
                 <i class="fas fa-shipping-fast"></i><i><small>Delivered by us to your doorstep .</small></i>
              </div>
              {/**** buttons ****/}
                <Row className="show-grid text-uppercase">
                    <Col xs={12} md={6}>
                      <CustomButton buttonName = "Add To Cart" fontName = "fas fa-shopping-cart"/>
                   </Col>
                  <Col xs={12} md={6}>
                    <CustomButton buttonName = "Add To Wishlist" fontName = "far fa-heart" />                
                  </Col>
                  <Col xs={12} md={12} className= "__quick_item_full_view" >
                      <CustomButton buttonName = "Full View" fontName = "far fa-eye"/>
                  </Col>
               </Row>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} md={12}>
              <code>Other</code>
            </Col>          
          </Row>

        </Container>
      </Modal.Body>
       {/****<Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
       </Modal.Footer> */}
      </Modal>);
  }
  
const CustomButton = (props) => {
  return (<React.Fragment>
            <a href="#" className="customButton"><i className= {`${props.fontName} __quick_item_font_awsome` }></i>{props.buttonName}</a>
  </React.Fragment>)
}

  function ItemQuickView(props) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <MyVerticallyCenteredModal
          show={props.showModal}
          onHide={props.onHide}
          item ={props.item}
        />
      </>
    );
  }
  export default ItemQuickView;
  