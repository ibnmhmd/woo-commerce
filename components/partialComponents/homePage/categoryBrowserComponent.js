import React from 'react';

export default class CategoryBrowserComponent extends React.Component {

    componentDidMount() {
        $('.owl-carousel').owlCarousel({
          stagePadding: 50,
          loop:true,
          margin:10,
          nav:true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:5
              }
          }
      });
      }

      render() {
          return (
            <div className="container __categoryBrowser_block">
            <div className="row">
             <div className="col-xs-12">
              <span className="__categoryBrowser_block_title">Browse Our Categories</span>
              <span  className="__categoryBrowser_block_viewall">
                 View al
              </span>
             </div>
            
             <div className="col-xs-12 owl-carousel owl-theme ">
              <div className="item">
                <figure>
                 <a href="">
                  <img className = "img-responsive" src="https://demo.mythemeshop.com/ecommerce/files/2015/07/electronic-270x340.jpg" alt="" srcSet=""/>
                </a>
               </figure>

                {/*overlay div*/}
                <div className="__homepage_second_block_inner_overlay">
                  <div className = "__homepage_second_block_inner_overlay_inner">
                  <div className="__categoryBrowser_block_overlay">
                    <h4 className="__homepage_second_block_inner_text_which_men">accessories</h4>
                </div>
                </div>
               </div>
                {/* overlay ends */}
              </div>

            <div className="item">
                    <figure>
                    <a href="">
                        <img className = "img-responsive" src="https://demo.mythemeshop.com/ecommerce/files/2015/07/female-270x340.jpg" alt="" srcSet=""/>
                    </a>
                    </figure>
 {/*overlay div*/}
 <div className="__homepage_second_block_inner_overlay">
 <div className = "__homepage_second_block_inner_overlay_inner">
 <div className="__categoryBrowser_block_overlay">
   <h4 className="__homepage_second_block_inner_text_which_men">women</h4>
</div>
</div>
</div>
{/* overlay ends */}
                    
              </div>
                <div className="item">
              <figure>
              <a href="">
                <img className = "img-responsive" src="https://demo.mythemeshop.com/ecommerce/files/2015/07/gaming-270x340.jpg" alt="" srcSet=""/>
              </a>
             </figure>

              {/*overlay div*/}
              <div className="__homepage_second_block_inner_overlay">
              <div className = "__homepage_second_block_inner_overlay_inner">
              <div className="__categoryBrowser_block_overlay">
                  <h4 className="__homepage_second_block_inner_text_which_men">games</h4>
              </div>
              </div>
             </div>
            {/* overlay ends */}
              </div>
             <div className="item"> <figure>
              <a href="">
                <img className = "img-responsive" src="https://demo.mythemeshop.com/ecommerce/files/2015/07/laptop-270x340.jpg" alt="" srcSet=""/>
              </a>
             </figure>
             
              {/*overlay div*/}
              <div className="__homepage_second_block_inner_overlay">
              <div className = "__homepage_second_block_inner_overlay_inner">
              <div className="__categoryBrowser_block_overlay">
                <h4 className="__homepage_second_block_inner_text_which_men">computers</h4>
            </div>
            </div>
           </div>
            {/* overlay ends */}

             </div>
              <div className="item"> <figure>
              <a href="">
                <img className = "img-responsive" src="https://demo.mythemeshop.com/ecommerce/files/2015/07/mobiles-270x340.jpg" alt="" srcSet=""/>
              </a>
             </figure>
             
              {/*overlay div*/}
              <div className="__homepage_second_block_inner_overlay">
              <div className = "__homepage_second_block_inner_overlay_inner">
              <div className="__categoryBrowser_block_overlay">
                <h4 className="__homepage_second_block_inner_text_which_men">mobiles</h4>
            </div>
            </div>
           </div>
            {/* overlay ends */}
             </div>
               <div className="item"> <figure>
              <a href="">
                <img className = "img-responsive" src="https://demo.mythemeshop.com/ecommerce/files/2015/06/cat-slider-2-270x340.png" alt="" srcSet=""/>
              </a>
             </figure>
             
              {/*overlay div*/}
              <div className="__homepage_second_block_inner_overlay">
              <div className = "__homepage_second_block_inner_overlay_inner">
              <div className="__categoryBrowser_block_overlay">
                <h4 className="__homepage_second_block_inner_text_which_men">men</h4>
            </div>
            </div>
           </div>
            {/* overlay ends */}
             </div>
             <div className="item"> <figure>
              <a href="">
                <img className = "img-responsive" src="https://demo.mythemeshop.com/ecommerce/files/2015/06/cat-slider-4-270x340.png" alt="" srcSet=""/>
              </a>
             </figure>
             
              {/*overlay div*/}
              <div className="__homepage_second_block_inner_overlay">
              <div className = "__homepage_second_block_inner_overlay_inner">
              <div className="__categoryBrowser_block_overlay">
                <h4 className="__homepage_second_block_inner_text_which_men">shoes</h4>
            </div>
            </div>
           </div>
            {/* overlay ends */}
             </div>
              <div className="item"> <figure>
              <a href="">
                <img className = "img-responsive" src="https://demo.mythemeshop.com/ecommerce/files/2015/07/electronic-270x340.jpg" alt="" srcSet=""/>
              </a>
             </figure>
             
              {/*overlay div*/}
              <div className="__homepage_second_block_inner_overlay">
              <div className = "__homepage_second_block_inner_overlay_inner">
              <div className="__categoryBrowser_block_overlay">
                <h4 className="__homepage_second_block_inner_text_which_men">electronics</h4>
            </div>
            </div>
           </div>
            {/* overlay ends */}
             </div>
             <div className="item"> <figure>
              <a href="">
                <img className = "img-responsive" src="https://demo.mythemeshop.com/ecommerce/files/2015/06/cat-slider-3-270x340.png" alt="" srcSet=""/>
              </a>
          </figure>
          
           {/*overlay div*/}
           <div className="__homepage_second_block_inner_overlay">
           <div className = "__homepage_second_block_inner_overlay_inner">
           <div className="__categoryBrowser_block_overlay">
             <h4 className="__homepage_second_block_inner_text_which_men">kids</h4>
         </div>
         </div>
        </div>
         {/* overlay ends */}
          </div>
              
           </div>
           </div>
          </div>   
          )
      }
}