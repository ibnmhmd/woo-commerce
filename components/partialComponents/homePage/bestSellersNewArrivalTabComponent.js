import React from 'react';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';
import Slider from "react-slick";
import ItemQuickView from "../../modals/itemQuickViewModalComponent";
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
  
export default class ProductsTabComponent extends React.Component {
     constructor(props) {
       super();
       this.quickViewItem = this.quickViewItem.bind(this);
       this.onHide = this.onHide.bind(this);
       this.state = {
         itemData : {},
         showItemModal : false 
       }
     }
     quickViewItem(item) {
       console.log(item)
       this.setState({itemData : item , showItemModal : true }) ;
     }
     onHide(){
      this.setState({ showItemModal : false }) ;
     }
    render() {
        return (
            <div className="container __bestSellers_tab_wrapper">
             
            <div className="row">
                <div className="col-md-12">
                                      <div className="">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li role="presentation" className="active"><a href="#bestSellers" aria-controls="bestSellers" role="tab" data-toggle="tab">Best Sellers</a></li>
                                            <li role="presentation" ><a href="#newArrival" aria-controls="newArrival" role="tab" data-toggle="tab">New Arrivals</a></li>
                                            <li role="presentation"><a href="#topRated" aria-controls="topRated" role="tab" data-toggle="tab">Top Rated</a></li>
                                            <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Miscellaneous</a></li>
                                        </ul>
    
                                        {/*********** relative info for tab titles *******/}
                                        <div className="tab-content">
                                            <div role="tabpanel" className="tab-pane active" id="bestSellers">
                                              {/***** best sellers ******/}
                                               <Slider {...settings}>
                                                         <div className="__bestSellers_tab_products">
                                                          <div className = "__bestSellers_tab_products_main_wrapper">
                                                           <div className="__bestSellers_tab_product_img_wrapper">
                                                             <img className = "__bestSellers_tab_product_img img-responsive img-fluid" src="../../../static/img/play-station.jpg" alt=""/>
                                                           </div>
                                                           <div className="__bestSellers_tab_product_info">
                                                                <h4 className="__bestSellers_tab_product_name">Sony Play Station</h4>
                                                                <p> <strike className = "__bestSellers_tab_product_strike">$289.00</strike>
                                                                <span className = "__bestSellers_tab_product_price">$269.00 </span>
                                                                </p>
                                                                <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                                                            </div>  
                                                            
                                                            {/**** overlay starts*****/}
                                                               <span className = "__bestSellers_tab_product_overlay">
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

                                                        <div className="__bestSellers_tab_products">
                                                        <div className = "__bestSellers_tab_products_main_wrapper">
                                                        <div className="__bestSellers_tab_product_img_wrapper">
                                                           <img className = "__bestSellers_tab_product_img img-responsive" src="../../../static/img/macbook-pro.jpg" alt=""/>                              
                                                        </div>
                                                        <div className="__bestSellers_tab_product_info">
                                                            <h4 className="__bestSellers_tab_product_name">Macbook Pro</h4>
                                                            <p> <strike className = "__bestSellers_tab_product_strike">$1099.00</strike>
                                                            <span className = "__bestSellers_tab_product_price">$869.00 </span>
                                                            </p>
                                                            <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                                                       </div> 
                                                       
                                                         {/**** overlay starts*****/}
                                                         <span className = "__bestSellers_tab_product_overlay">
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

                                                    <div className="__bestSellers_tab_products">
                                                     <div className = "__bestSellers_tab_products_main_wrapper">
                                                           <div className="__bestSellers_tab_product_img_wrapper">                 
                                                               <img className = "__bestSellers_tab_product_img img-responsive" src="../../../static/img/speaker.jpg" alt=""/>
                                                           </div>
                                                           <div className="__bestSellers_tab_product_info">
                                                                <h4 className="__bestSellers_tab_product_name">Boos Speaker</h4>
                                                                <p> <strike className = "__bestSellers_tab_product_strike">$10.00</strike>
                                                                <span className = "__bestSellers_tab_product_price">$99.75 </span>
                                                                </p>
                                                                <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                                                            </div> 
                                                            
                                                               {/**** overlay starts*****/}
                                                            <span className = "__bestSellers_tab_product_overlay">
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

                                                    <div className="__bestSellers_tab_products">
                                                    <div className = "__bestSellers_tab_products_main_wrapper">
                                                    <div className="__bestSellers_tab_product_img_wrapper">  
                                                       <img className = "__bestSellers_tab_product_img img-responsive" src="../../../static/img/galaxy.jpg" alt=""/>                                                  
                                                    </div>
                                                    <div className="__bestSellers_tab_product_info">
                                                        <h4 className="__bestSellers_tab_product_name">Samsung Galaxy S8</h4>
                                                        <p> <strike className = "__bestSellers_tab_product_strike">$599.00</strike>
                                                        <span className = "__bestSellers_tab_product_price">$560.00 </span>
                                                        </p>
                                                        <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                                                    </div>  
                                                       {/**** overlay starts*****/}
                                                       <span className = "__bestSellers_tab_product_overlay">
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

                                                    <div className="__bestSellers_tab_products">
                                                    <div className = "__bestSellers_tab_products_main_wrapper">
                                                           <div className="__bestSellers_tab_product_img_wrapper"> 
                                                               <img className = "__bestSellers_tab_product_img img-responsive" src="../../../static/img/iphone.jpg" alt=""/>
                                                           </div>
                                                           <div className="__bestSellers_tab_product_info">
                                                                <h4 className="__bestSellers_tab_product_name">Apple iPhone</h4>
                                                                <p> <strike className = "__bestSellers_tab_product_strike">$378.00</strike>
                                                                <span className = "__bestSellers_tab_product_price">$305.00 </span>
                                                                </p>
                                                                <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                                                           </div> 
                                                              {/**** overlay starts*****/}
                                                         <span className = "__bestSellers_tab_product_overlay">
                                                          <OverlayTrigger placement="top" overlay={wishListTooltip}>
                                                           <i className="far fa-heart"></i>
                                                         </OverlayTrigger>
                                                         <OverlayTrigger placement="top" overlay={quickViewTooltip}>
                                                           <i className="far fa-eye" onClick = {() => this.quickViewItem({name : "Apple iPhone" , availQty : 12, orgPrice : 378.00,discountPrice : 305.00, sku : "MST784521YiPH" , description : "Versace Perfume - Eros by Versace - Perfume for Men, 100 ml - EDT Spray", by : "Versace", img : "https://images-na.ssl-images-amazon.com/images/I/81woq5xTlRL._SX679_.jpg"})}></i>
                                                         </OverlayTrigger>
                                                       </span>
                                                      {/**** ends ******/}                          
                                                    </div>
                                                   </div>

                                                   <div className="__bestSellers_tab_products">
                                                   <div className = "__bestSellers_tab_products_main_wrapper">
                                                   <div className="__bestSellers_tab_product_img_wrapper">
                                                       <img className = "__bestSellers_tab_product_img img-responsive" src="../../../static/img/headphone.jpg" alt=""/>
                                                   </div>
                                                   
                                                   <div className="__bestSellers_tab_product_info">
                                                    <h4 className="__bestSellers_tab_product_name">Sony Headphone</h4>
                                                    <p> <strike className = "__bestSellers_tab_product_strike">$25.00</strike>
                                                    <span className = "__bestSellers_tab_product_price">$20.99 </span>
                                                    </p>
                                                    <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                                                 </div> 
                                                    {/**** overlay starts*****/}
                                                    <span className = "__bestSellers_tab_product_overlay">
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

                                                <div className="__bestSellers_tab_products">
                                                 <div className = "__bestSellers_tab_products_main_wrapper">
                                                           <div className="__bestSellers_tab_product_img_wrapper"> 
                                                             <img className = "__bestSellers_tab_product_img img-responsive" src="../../../static/img/canon.jpg" alt=""/>
                                                           </div>
                                                           <div className="__bestSellers_tab_product_info">
                                                                <h4 className="__bestSellers_tab_product_name">Canon DSLR</h4>
                                                                <p> <strike className = "__bestSellers_tab_product_strike">$315.00</strike>
                                                                <span className = "__bestSellers_tab_product_price">$250.00 </span>
                                                                </p>
                                                                <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                                                          </div>  
                                                             {/**** overlay starts*****/}
                                                         <span className = "__bestSellers_tab_product_overlay">
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
                                                 
                                                <div className="__bestSellers_tab_products">
                                                <div className = "__bestSellers_tab_products_main_wrapper">
                                                <div className="__bestSellers_tab_product_img_wrapper">
                                                   <img className = "__bestSellers_tab_product_img img-responsive" src="../../../static/img/pixel.jpg" alt=""/>
                                                </div>
                                                <div className="__bestSellers_tab_product_info">
                                                    <h4 className="__bestSellers_tab_product_name">Google Pixel</h4>
                                                    <p> <strike className = "__bestSellers_tab_product_strike">$452.00</strike>
                                                    <span className = "__bestSellers_tab_product_price">$350.00 </span>
                                                    </p>
                                                    <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                                                </div>  
                                                   {/**** overlay starts*****/}
                                                   <span className = "__bestSellers_tab_product_overlay">
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
                                            
                                             <div className="__bestSellers_tab_products">
                                             <div className = "__bestSellers_tab_products_main_wrapper">
                                             <div className="__bestSellers_tab_product_img_wrapper">
                                                 <img className = "__bestSellers_tab_product_img img-responsive" src="../../../static/img/watch.jpg" alt=""/>
                                             </div>
                                             <div className="__bestSellers_tab_product_info">
                                                <h4 className="__bestSellers_tab_product_name">Apple Watch</h4>
                                                <p> <strike className = "__bestSellers_tab_product_strike">$350.00</strike>
                                                <span className = "__bestSellers_tab_product_price">$300.00 </span>
                                                </p>
                                                <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                                            </div> 
                                               {/**** overlay starts*****/}
                                               <span className = "__bestSellers_tab_product_overlay">
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

                                            {/******* new arrivals starts ***/}
                                            <div role="tabpanel" className="tab-pane" id="newArrival">
                                             {/***** new arrivals ******/}
                                             <Slider {...settings}>
                                             <div className="__bestSellers_tab_products">
                                              <div className = "__bestSellers_tab_products_main_wrapper">
                                               <div className="__bestSellers_tab_product_img_wrapper">
                                                 <img className = "__bestSellers_tab_product_img img-responsive img-fluid" src="../../../static/img/play-station.jpg" alt=""/>
                                               </div>
                                               <div className="__bestSellers_tab_product_info">
                                                    <h4 className="__bestSellers_tab_product_name">Sony Play Station</h4>
                                                    <p> <strike className = "__bestSellers_tab_product_strike">$289.00</strike>
                                                    <span className = "__bestSellers_tab_product_price">$269.00 </span>
                                                    </p>
                                                    <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                                                </div>  
                                                
                                                {/**** overlay starts*****/}
                                                   <span className = "__bestSellers_tab_product_overlay">
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

                                            <div className="__bestSellers_tab_products">
                                            <div className = "__bestSellers_tab_products_main_wrapper">
                                            <div className="__bestSellers_tab_product_img_wrapper">
                                               <img className = "__bestSellers_tab_product_img img-responsive" src="../../../static/img/macbook-pro.jpg" alt=""/>                              
                                            </div>
                                            <div className="__bestSellers_tab_product_info">
                                                <h4 className="__bestSellers_tab_product_name">Macbook Pro</h4>
                                                <p> <strike className = "__bestSellers_tab_product_strike">$1099.00</strike>
                                                <span className = "__bestSellers_tab_product_price">$869.00 </span>
                                                </p>
                                                <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                                           </div> 
                                           
                                             {/**** overlay starts*****/}
                                             <span className = "__bestSellers_tab_product_overlay">
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

                                        <div className="__bestSellers_tab_products">
                                         <div className = "__bestSellers_tab_products_main_wrapper">
                                               <div className="__bestSellers_tab_product_img_wrapper">                 
                                                   <img className = "__bestSellers_tab_product_img img-responsive" src="../../../static/img/speaker.jpg" alt=""/>
                                               </div>
                                               <div className="__bestSellers_tab_product_info">
                                                    <h4 className="__bestSellers_tab_product_name">Boos Speaker</h4>
                                                    <p> <strike className = "__bestSellers_tab_product_strike">$10.00</strike>
                                                    <span className = "__bestSellers_tab_product_price">$99.75 </span>
                                                    </p>
                                                    <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                                                </div> 
                                                
                                                   {/**** overlay starts*****/}
                                                <span className = "__bestSellers_tab_product_overlay">
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

                                        <div className="__bestSellers_tab_products">
                                        <div className = "__bestSellers_tab_products_main_wrapper">
                                        <div className="__bestSellers_tab_product_img_wrapper">  
                                           <img className = "__bestSellers_tab_product_img img-responsive" src="../../../static/img/galaxy.jpg" alt=""/>                                                  
                                        </div>
                                        <div className="__bestSellers_tab_product_info">
                                            <h4 className="__bestSellers_tab_product_name">Samsung Galaxy S8</h4>
                                            <p> <strike className = "__bestSellers_tab_product_strike">$599.00</strike>
                                            <span className = "__bestSellers_tab_product_price">$560.00 </span>
                                            </p>
                                            <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                                        </div>  
                                           {/**** overlay starts*****/}
                                           <span className = "__bestSellers_tab_product_overlay">
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

                                        <div className="__bestSellers_tab_products">
                                        <div className = "__bestSellers_tab_products_main_wrapper">
                                               <div className="__bestSellers_tab_product_img_wrapper"> 
                                                   <img className = "__bestSellers_tab_product_img img-responsive" src="../../../static/img/iphone.jpg" alt=""/>
                                               </div>
                                               <div className="__bestSellers_tab_product_info">
                                                    <h4 className="__bestSellers_tab_product_name">Apple iPhone</h4>
                                                    <p> <strike className = "__bestSellers_tab_product_strike">$378.00</strike>
                                                    <span className = "__bestSellers_tab_product_price">$305.00 </span>
                                                    </p>
                                                    <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                                               </div> 
                                                  {/**** overlay starts*****/}
                                             <span className = "__bestSellers_tab_product_overlay">
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

                                       <div className="__bestSellers_tab_products">
                                       <div className = "__bestSellers_tab_products_main_wrapper">
                                       <div className="__bestSellers_tab_product_img_wrapper">
                                           <img className = "__bestSellers_tab_product_img img-responsive" src="../../../static/img/headphone.jpg" alt=""/>
                                       </div>
                                       
                                       <div className="__bestSellers_tab_product_info">
                                        <h4 className="__bestSellers_tab_product_name">Sony Headphone</h4>
                                        <p> <strike className = "__bestSellers_tab_product_strike">$25.00</strike>
                                        <span className = "__bestSellers_tab_product_price">$20.99 </span>
                                        </p>
                                        <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                                     </div> 
                                        {/**** overlay starts*****/}
                                        <span className = "__bestSellers_tab_product_overlay">
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

                                    <div className="__bestSellers_tab_products">
                                     <div className = "__bestSellers_tab_products_main_wrapper">
                                               <div className="__bestSellers_tab_product_img_wrapper"> 
                                                 <img className = "__bestSellers_tab_product_img img-responsive" src="../../../static/img/canon.jpg" alt=""/>
                                               </div>
                                               <div className="__bestSellers_tab_product_info">
                                                    <h4 className="__bestSellers_tab_product_name">Canon DSLR</h4>
                                                    <p> <strike className = "__bestSellers_tab_product_strike">$315.00</strike>
                                                    <span className = "__bestSellers_tab_product_price">$250.00 </span>
                                                    </p>
                                                    <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                                              </div>  
                                                 {/**** overlay starts*****/}
                                             <span className = "__bestSellers_tab_product_overlay">
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
                                     
                                    <div className="__bestSellers_tab_products">
                                    <div className = "__bestSellers_tab_products_main_wrapper">
                                    <div className="__bestSellers_tab_product_img_wrapper">
                                       <img className = "__bestSellers_tab_product_img img-responsive" src="../../../static/img/pixel.jpg" alt=""/>
                                    </div>
                                    <div className="__bestSellers_tab_product_info">
                                        <h4 className="__bestSellers_tab_product_name">Google Pixel</h4>
                                        <p> <strike className = "__bestSellers_tab_product_strike">$452.00</strike>
                                        <span className = "__bestSellers_tab_product_price">$350.00 </span>
                                        </p>
                                        <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                                    </div>  
                                       {/**** overlay starts*****/}
                                       <span className = "__bestSellers_tab_product_overlay">
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
                                
                                 <div className="__bestSellers_tab_products">
                                 <div className = "__bestSellers_tab_products_main_wrapper">
                                 <div className="__bestSellers_tab_product_img_wrapper">
                                     <img className = "__bestSellers_tab_product_img img-responsive" src="../../../static/img/watch.jpg" alt=""/>
                                 </div>
                                 <div className="__bestSellers_tab_product_info">
                                    <h4 className="__bestSellers_tab_product_name">Apple Watch</h4>
                                    <p> <strike className = "__bestSellers_tab_product_strike">$350.00</strike>
                                    <span className = "__bestSellers_tab_product_price">$300.00 </span>
                                    </p>
                                    <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                                </div> 
                                   {/**** overlay starts*****/}
                                   <span className = "__bestSellers_tab_product_overlay">
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
                                </div>
                              {/***** new arrivals ends ******/}

                              {/******* top rated starts *****/}
                                <div role="tabpanel" className="tab-pane" id="topRated"> 
                                     <Slider {...settings}>
                                       <div className="__bestSellers_tab_products">
                                        <div className = "__bestSellers_tab_products_main_wrapper">
                                              <div className="__bestSellers_tab_product_img_wrapper"> 
                                                  <img className = "__bestSellers_tab_product_img img-responsive" src="../../../static/img/iphone.jpg" alt=""/>
                                              </div>
                                              <div className="__bestSellers_tab_product_info">
                                                   <h4 className="__bestSellers_tab_product_name">Apple iPhone</h4>
                                                   <p> <strike className = "__bestSellers_tab_product_strike">$378.00</strike>
                                                   <span className = "__bestSellers_tab_product_price">$305.00 </span>
                                                   </p>
                                                   <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                                              </div> 
                                                 {/**** overlay starts*****/}
                                            <span className = "__bestSellers_tab_product_overlay">
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

                                      <div className="__bestSellers_tab_products">
                                      <div className = "__bestSellers_tab_products_main_wrapper">
                                      <div className="__bestSellers_tab_product_img_wrapper">
                                          <img className = "__bestSellers_tab_product_img img-responsive" src="../../../static/img/headphone.jpg" alt=""/>
                                      </div>
                                      
                                      <div className="__bestSellers_tab_product_info">
                                       <h4 className="__bestSellers_tab_product_name">Sony Headphone</h4>
                                       <p> <strike className = "__bestSellers_tab_product_strike">$25.00</strike>
                                       <span className = "__bestSellers_tab_product_price">$20.99 </span>
                                       </p>
                                       <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                                    </div> 
                                       {/**** overlay starts*****/}
                                       <span className = "__bestSellers_tab_product_overlay">
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

                                   <div className="__bestSellers_tab_products">
                                    <div className = "__bestSellers_tab_products_main_wrapper">
                                              <div className="__bestSellers_tab_product_img_wrapper"> 
                                                <img className = "__bestSellers_tab_product_img img-responsive" src="../../../static/img/canon.jpg" alt=""/>
                                              </div>
                                              <div className="__bestSellers_tab_product_info">
                                                   <h4 className="__bestSellers_tab_product_name">Canon DSLR</h4>
                                                   <p> <strike className = "__bestSellers_tab_product_strike">$315.00</strike>
                                                   <span className = "__bestSellers_tab_product_price">$250.00 </span>
                                                   </p>
                                                   <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                                             </div>  
                                                {/**** overlay starts*****/}
                                            <span className = "__bestSellers_tab_product_overlay">
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
                                    
                                   <div className="__bestSellers_tab_products">
                                   <div className = "__bestSellers_tab_products_main_wrapper">
                                   <div className="__bestSellers_tab_product_img_wrapper">
                                      <img className = "__bestSellers_tab_product_img img-responsive" src="../../../static/img/pixel.jpg" alt=""/>
                                   </div>
                                   <div className="__bestSellers_tab_product_info">
                                       <h4 className="__bestSellers_tab_product_name">Google Pixel</h4>
                                       <p> <strike className = "__bestSellers_tab_product_strike">$452.00</strike>
                                       <span className = "__bestSellers_tab_product_price">$350.00 </span>
                                       </p>
                                       <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                                   </div>  
                                      {/**** overlay starts*****/}
                                      <span className = "__bestSellers_tab_product_overlay">
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
                               
                                <div className="__bestSellers_tab_products">
                                <div className = "__bestSellers_tab_products_main_wrapper">
                                <div className="__bestSellers_tab_product_img_wrapper">
                                    <img className = "__bestSellers_tab_product_img img-responsive" src="../../../static/img/watch.jpg" alt=""/>
                                </div>
                                <div className="__bestSellers_tab_product_info">
                                   <h4 className="__bestSellers_tab_product_name">Apple Watch</h4>
                                   <p> <strike className = "__bestSellers_tab_product_strike">$350.00</strike>
                                   <span className = "__bestSellers_tab_product_price">$300.00 </span>
                                   </p>
                                   <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                               </div> 
                                  {/**** overlay starts*****/}
                                  <span className = "__bestSellers_tab_product_overlay">
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
                      </div>
                      {/******** top rated ends *****/}
                       <div role="tabpanel" className="tab-pane" id="settings">

                       <Slider {...settings}>
                       <div className="__bestSellers_tab_products">
                        <div className = "__bestSellers_tab_products_main_wrapper">
                         <div className="__bestSellers_tab_product_img_wrapper">
                           <img className = "__bestSellers_tab_product_img img-responsive img-fluid" src="../../../static/img/play-station.jpg" alt=""/>
                         </div>
                         <div className="__bestSellers_tab_product_info">
                              <h4 className="__bestSellers_tab_product_name">Sony Play Station</h4>
                              <p> <strike className = "__bestSellers_tab_product_strike">$289.00</strike>
                              <span className = "__bestSellers_tab_product_price">$269.00 </span>
                              </p>
                              <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                          </div>  
                          
                          {/**** overlay starts*****/}
                             <span className = "__bestSellers_tab_product_overlay">
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

                      <div className="__bestSellers_tab_products">
                      <div className = "__bestSellers_tab_products_main_wrapper">
                      <div className="__bestSellers_tab_product_img_wrapper">
                         <img className = "__bestSellers_tab_product_img img-responsive" src="../../../static/img/macbook-pro.jpg" alt=""/>                              
                      </div>
                      <div className="__bestSellers_tab_product_info">
                          <h4 className="__bestSellers_tab_product_name">Macbook Pro</h4>
                          <p> <strike className = "__bestSellers_tab_product_strike">$1099.00</strike>
                          <span className = "__bestSellers_tab_product_price">$869.00 </span>
                          </p>
                          <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                     </div> 
                     
                       {/**** overlay starts*****/}
                       <span className = "__bestSellers_tab_product_overlay">
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

                  <div className="__bestSellers_tab_products">
                   <div className = "__bestSellers_tab_products_main_wrapper">
                         <div className="__bestSellers_tab_product_img_wrapper">                 
                             <img className = "__bestSellers_tab_product_img img-responsive" src="../../../static/img/speaker.jpg" alt=""/>
                         </div>
                         <div className="__bestSellers_tab_product_info">
                              <h4 className="__bestSellers_tab_product_name">Boos Speaker</h4>
                              <p> <strike className = "__bestSellers_tab_product_strike">$10.00</strike>
                              <span className = "__bestSellers_tab_product_price">$99.75 </span>
                              </p>
                              <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                          </div> 
                          
                             {/**** overlay starts*****/}
                          <span className = "__bestSellers_tab_product_overlay">
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

                  <div className="__bestSellers_tab_products">
                  <div className = "__bestSellers_tab_products_main_wrapper">
                  <div className="__bestSellers_tab_product_img_wrapper">  
                     <img className = "__bestSellers_tab_product_img img-responsive" src="../../../static/img/galaxy.jpg" alt=""/>                                                  
                  </div>
                  <div className="__bestSellers_tab_product_info">
                      <h4 className="__bestSellers_tab_product_name">Samsung Galaxy S8</h4>
                      <p> <strike className = "__bestSellers_tab_product_strike">$599.00</strike>
                      <span className = "__bestSellers_tab_product_price">$560.00 </span>
                      </p>
                      <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                  </div>  
                     {/**** overlay starts*****/}
                     <span className = "__bestSellers_tab_product_overlay">
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

                  <div className="__bestSellers_tab_products">
                  <div className = "__bestSellers_tab_products_main_wrapper">
                         <div className="__bestSellers_tab_product_img_wrapper"> 
                             <img className = "__bestSellers_tab_product_img img-responsive" src="../../../static/img/iphone.jpg" alt=""/>
                         </div>
                         <div className="__bestSellers_tab_product_info">
                              <h4 className="__bestSellers_tab_product_name">Apple iPhone</h4>
                              <p> <strike className = "__bestSellers_tab_product_strike">$378.00</strike>
                              <span className = "__bestSellers_tab_product_price">$305.00 </span>
                              </p>
                              <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                         </div> 
                            {/**** overlay starts*****/}
                       <span className = "__bestSellers_tab_product_overlay">
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

                 <div className="__bestSellers_tab_products">
                 <div className = "__bestSellers_tab_products_main_wrapper">
                 <div className="__bestSellers_tab_product_img_wrapper">
                     <img className = "__bestSellers_tab_product_img img-responsive" src="../../../static/img/headphone.jpg" alt=""/>
                 </div>
                 
                 <div className="__bestSellers_tab_product_info">
                  <h4 className="__bestSellers_tab_product_name">Sony Headphone</h4>
                  <p> <strike className = "__bestSellers_tab_product_strike">$25.00</strike>
                  <span className = "__bestSellers_tab_product_price">$20.99 </span>
                  </p>
                  <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
               </div> 
                  {/**** overlay starts*****/}
                  <span className = "__bestSellers_tab_product_overlay">
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

              <div className="__bestSellers_tab_products">
               <div className = "__bestSellers_tab_products_main_wrapper">
                         <div className="__bestSellers_tab_product_img_wrapper"> 
                           <img className = "__bestSellers_tab_product_img img-responsive" src="../../../static/img/canon.jpg" alt=""/>
                         </div>
                         <div className="__bestSellers_tab_product_info">
                              <h4 className="__bestSellers_tab_product_name">Canon DSLR</h4>
                              <p> <strike className = "__bestSellers_tab_product_strike">$315.00</strike>
                              <span className = "__bestSellers_tab_product_price">$250.00 </span>
                              </p>
                              <a href="#" className="btn btn-primary __bestSellers_tab_product_add_to_cart">Add to Cart</a>
                        </div>  
                           {/**** overlay starts*****/}
                       <span className = "__bestSellers_tab_product_overlay">
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
         </div>
     </div>
                                        </div>
                                    </div>
                                </div>
            {this.state.showItemModal ?  <ItemQuickView onHide= {this.onHide} showModal = {this.state.showItemModal} item = {this.state.itemData}/> : null }
        </div>
        )
    }
} 