import React from 'react';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';
import Slider from "react-slick";

const wishListTooltip = (
    <Tooltip id="tooltip">
      Add this item to your <strong>Wish list</strong>.
    </Tooltip>
  );

  const quickViewTooltip = (
    <Tooltip id="tooltip">
      Quick view this <strong>Item</strong>.
    </Tooltip>
  );
const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
};

export default class PopularProducts extends React.Component {

    render() {
        return (
            <div className="container __popular_products_wrapper">
            <div className="row">
                <div className="col-md-12">
                 <span className = "__popular_products_title">popular products</span>
                </div>
                <div className="col-md-12">
                <Slider {...settings}>
                <div className="__item_listing_card">
                 <div className = "__item_listing_card_main_wrapper">
                  <div className="__item_listing_card_img_wrapper">
                    <img className = "__item_listing_card_img img-responsive img-fluid" src="../../../static/img/play-station.jpg" alt=""/>
                  </div>
                  <div className="__item_listing_card_info">
                       <h4 className="__item_listing_card_name">Sony Play Station</h4>
                       <p> <strike className = "__item_listing_card_strike">$289.00</strike>
                       <span className = "__item_listing_card_price">$269.00 </span>
                       </p>
                       <a href="#" className="btn btn-primary __item_listing_card_add_to_cart">Add to Cart</a>
                   </div>  
                   
                   {/**** overlay starts*****/}
                      <span className = "__item_listing_card_overlay">
                      <OverlayTrigger placement="top" overlay={wishListTooltip}>
                        <i className="far fa-heart"></i>
                      </OverlayTrigger>
                      <OverlayTrigger placement="top" overlay={quickViewTooltip}>
                        <i className="far fa-eye"></i>
                     </OverlayTrigger>
                      </span>
                   {/**** ends ******/}
                </div>
               </div>

               <div className="__item_listing_card">
               <div className = "__item_listing_card_main_wrapper">
               <div className="__item_listing_card_img_wrapper">
                  <img className = "__item_listing_card_img img-responsive" src="../../../static/img/macbook-pro.jpg" alt=""/>                              
               </div>
               <div className="__item_listing_card_info">
                   <h4 className="__item_listing_card_name">Macbook Pro</h4>
                   <p> <strike className = "__item_listing_card_strike">$1099.00</strike>
                   <span className = "__item_listing_card_price">$869.00 </span>
                   </p>
                   <a href="#" className="btn btn-primary __item_listing_card_add_to_cart">Add to Cart</a>
              </div> 
              
                {/**** overlay starts*****/}
                <span className = "__item_listing_card_overlay">
                       <OverlayTrigger placement="top" overlay={wishListTooltip}>
                       <i className="far fa-heart"></i>
                       </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={quickViewTooltip}>
                       <i className="far fa-eye"></i>
                    </OverlayTrigger>
               </span>
              {/**** ends ******/}
            </div>
           </div>

           <div className="__item_listing_card">
            <div className = "__item_listing_card_main_wrapper">
                  <div className="__item_listing_card_img_wrapper">                 
                      <img className = "__item_listing_card_img img-responsive" src="../../../static/img/speaker.jpg" alt=""/>
                  </div>
                  <div className="__item_listing_card_info">
                       <h4 className="__item_listing_card_name">Boos Speaker</h4>
                       <p> <strike className = "__item_listing_card_strike">$10.00</strike>
                       <span className = "__item_listing_card_price">$99.75 </span>
                       </p>
                       <a href="#" className="btn btn-primary __item_listing_card_add_to_cart">Add to Cart</a>
                   </div> 
                   
                      {/**** overlay starts*****/}
                   <span className = "__item_listing_card_overlay">
                     <OverlayTrigger placement="top" overlay={wishListTooltip}>
                      <i className="far fa-heart"></i>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={quickViewTooltip}>
                       <i className="far fa-eye"></i>
                    </OverlayTrigger>
                  </span>
                   {/**** ends ******/}
             </div>
           </div>

           <div className="__item_listing_card">
           <div className = "__item_listing_card_main_wrapper">
           <div className="__item_listing_card_img_wrapper">  
              <img className = "__item_listing_card_img img-responsive" src="../../../static/img/galaxy.jpg" alt=""/>                                                  
           </div>
           <div className="__item_listing_card_info">
               <h4 className="__item_listing_card_name">Samsung Galaxy S8</h4>
               <p> <strike className = "__item_listing_card_strike">$599.00</strike>
               <span className = "__item_listing_card_price">$560.00 </span>
               </p>
               <a href="#" className="btn btn-primary __item_listing_card_add_to_cart">Add to Cart</a>
           </div>  
              {/**** overlay starts*****/}
              <span className = "__item_listing_card_overlay">
               <OverlayTrigger placement="top" overlay={wishListTooltip}>
                <i className="far fa-heart"></i>
               </OverlayTrigger>
               <OverlayTrigger placement="top" overlay={quickViewTooltip}>
                <i className="far fa-eye"></i>
               </OverlayTrigger>
             </span>
           {/**** ends ******/}                        
        </div>
       </div>

           <div className="__item_listing_card">
           <div className = "__item_listing_card_main_wrapper">
                  <div className="__item_listing_card_img_wrapper"> 
                      <img className = "__item_listing_card_img img-responsive" src="../../../static/img/iphone.jpg" alt=""/>
                  </div>
                  <div className="__item_listing_card_info">
                       <h4 className="__item_listing_card_name">Apple iPhone</h4>
                       <p> <strike className = "__item_listing_card_strike">$378.00</strike>
                       <span className = "__item_listing_card_price">$305.00 </span>
                       </p>
                       <a href="#" className="btn btn-primary __item_listing_card_add_to_cart">Add to Cart</a>
                  </div> 
                     {/**** overlay starts*****/}
                <span className = "__item_listing_card_overlay">
                 <OverlayTrigger placement="top" overlay={wishListTooltip}>
                  <i className="far fa-heart"></i>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={quickViewTooltip}>
                  <i className="far fa-eye"></i>
                </OverlayTrigger>
              </span>
             {/**** ends ******/}                          
           </div>
          </div>

          <div className="__item_listing_card">
          <div className = "__item_listing_card_main_wrapper">
          <div className="__item_listing_card_img_wrapper">
              <img className = "__item_listing_card_img img-responsive" src="../../../static/img/headphone.jpg" alt=""/>
          </div>
          
          <div className="__item_listing_card_info">
           <h4 className="__item_listing_card_name">Sony Headphone</h4>
           <p> <strike className = "__item_listing_card_strike">$25.00</strike>
           <span className = "__item_listing_card_price">$20.99 </span>
           </p>
           <a href="#" className="btn btn-primary __item_listing_card_add_to_cart">Add to Cart</a>
        </div> 
           {/**** overlay starts*****/}
           <span className = "__item_listing_card_overlay">
           <OverlayTrigger placement="top" overlay={wishListTooltip}>
              <i className="far fa-heart"></i>
           </OverlayTrigger>
           <OverlayTrigger placement="top" overlay={quickViewTooltip}>
             <i className="far fa-eye"></i>
           </OverlayTrigger>
           </span>
        {/**** ends ******/}
        </div>
       </div>

       <div className="__item_listing_card">
        <div className = "__item_listing_card_main_wrapper">
                  <div className="__item_listing_card_img_wrapper"> 
                    <img className = "__item_listing_card_img img-responsive" src="../../../static/img/canon.jpg" alt=""/>
                  </div>
                  <div className="__item_listing_card_info">
                       <h4 className="__item_listing_card_name">Canon DSLR</h4>
                       <p> <strike className = "__item_listing_card_strike">$315.00</strike>
                       <span className = "__item_listing_card_price">$250.00 </span>
                       </p>
                       <a href="#" className="btn btn-primary __item_listing_card_add_to_cart">Add to Cart</a>
                 </div>  
                    {/**** overlay starts*****/}
                <span className = "__item_listing_card_overlay">
                <OverlayTrigger placement="top" overlay={wishListTooltip}>
                  <i className="far fa-heart"></i>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={quickViewTooltip}>
                  <i className="far fa-eye"></i>
                </OverlayTrigger>
                </span>
             {/**** ends ******/}                        
        </div>
       </div>
        
       <div className="__item_listing_card">
       <div className = "__item_listing_card_main_wrapper">
       <div className="__item_listing_card_img_wrapper">
          <img className = "__item_listing_card_img img-responsive" src="../../../static/img/pixel.jpg" alt=""/>
       </div>
       <div className="__item_listing_card_info">
           <h4 className="__item_listing_card_name">Google Pixel</h4>
           <p> <strike className = "__item_listing_card_strike">$452.00</strike>
           <span className = "__item_listing_card_price">$350.00 </span>
           </p>
           <a href="#" className="btn btn-primary __item_listing_card_add_to_cart">Add to Cart</a>
       </div>  
          {/**** overlay starts*****/}
          <span className = "__item_listing_card_overlay">
          <OverlayTrigger placement="top" overlay={wishListTooltip}>
            <i className="far fa-heart"></i>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={quickViewTooltip}>
            <i className="far fa-eye"></i>
          </OverlayTrigger>
         </span>
       {/**** ends ******/}                        
    </div>
    </div>
   
    <div className="__item_listing_card">
    <div className = "__item_listing_card_main_wrapper">
    <div className="__item_listing_card_img_wrapper">
        <img className = "__item_listing_card_img img-responsive" src="../../../static/img/watch.jpg" alt=""/>
    </div>
    <div className="__item_listing_card_info">
       <h4 className="__item_listing_card_name">Apple Watch</h4>
       <p> <strike className = "__item_listing_card_strike">$350.00</strike>
       <span className = "__item_listing_card_price">$300.00 </span>
       </p>
       <a href="#" className="btn btn-primary __item_listing_card_add_to_cart">Add to Cart</a>
   </div> 
      {/**** overlay starts*****/}
      <span className = "__item_listing_card_overlay">
      <OverlayTrigger placement="top" overlay={wishListTooltip}>
        <i className="far fa-heart"></i>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={quickViewTooltip}>
        <i className="far fa-eye"></i>
      </OverlayTrigger>
    </span>
   {/**** ends ******/}                         
     </div>
    </div>
   </Slider>
     {/***** best sellers ends ***/}
   </div>
            </div>
           </div>
        )
    }
}