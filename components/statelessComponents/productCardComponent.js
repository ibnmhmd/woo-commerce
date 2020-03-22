import { useState } from 'react';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';
import ItemQuickView from '../../components/modals/itemQuickViewModalComponent';

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


const ProductCard = (props) => {
    const [showItemModal , setShowItemModal ] = useState(false);
    const [ itemData , setItemData ] = useState ({});
 const quickViewItem = (props) => {
    setShowItemModal(true);
    setItemData(props);
 }
 const onHide = () => {
    setShowItemModal(false);
 }

   return (
    <div className="__item_listing_card">
        <div className = "__item_listing_card_main_wrapper">
          <div className="__item_listing_card_img_wrapper">                 
              <img className = "__item_listing_card_img img-responsive" src = { props.productInfo.img }  alt=""/>
          </div>
          <div className="__item_listing_card_info">
               <h4 className="__item_listing_card_name"> { props.productInfo.name } </h4>
               <p> <strike className = "__item_listing_card_strike"> $ { props.productInfo.oldPrice } </strike>
               <span className = "__item_listing_card_price"> $ { props.productInfo.newPrice } </span>
               </p>
               <a href="#" className="btn btn-primary __item_listing_card_add_to_cart">Add to Cart</a>
           </div> 
           
              {/**** overlay starts*****/}
           <span className = "__item_listing_card_overlay">
             <OverlayTrigger placement="top" overlay={wishListTooltip}>
              <i className="far fa-heart"></i>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={quickViewTooltip}>
               <i className="far fa-eye"  onClick = { () => quickViewItem({name : "Apple iPhone" , availQty : 12, oldPrice : 378.00, newPrice : 305.00, sku : "MST784521YiPH" , description : "Versace Perfume - Eros by Versace - Perfume for Men, 100 ml - EDT Spray", by : "Versace", img : "https://images-na.ssl-images-amazon.com/images/I/81woq5xTlRL._SX679_.jpg"})}></i>
            </OverlayTrigger>
          </span>
           {/**** ends ******/}
       </div>
       { showItemModal ?  <ItemQuickView onHide= { onHide } showModal = { showItemModal } item = { itemData }/> : null }
    </div>
   );
}
export default ProductCard;