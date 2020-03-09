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
        <Modal.Header closeButton>
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
                <Row className="show-grid">
                    <Col xs={12} md={4}>
                      <Button variant = "primary">Full View </Button>
                   </Col>
                  <Col xs={12} md={4}>
                     <Button variant = "success"><i class="fas fa-shopping-cart"></i> Add to cart</Button>
                  </Col>
                  <Col xs={12} md={4}>
                    <Button variant = "warning"><i class="far fa-shopping-bag"></i>Add to wishlist</Button>
                  </Col>
               </Row>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} md={12}>
              <code>Other</code>
            </Col>
            <Col xs={12} md={12}>
              <code>Other</code>
            </Col>           
          </Row>

        </Container>
      </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>);
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
  