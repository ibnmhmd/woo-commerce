import { useState ,useEffect  } from 'react';
import ProductCard from '../../statelessComponents/productCardComponent';
import { LoadMore } from '../../statelessComponents/loadMoreProductsComponent';

function ProductLisiting (props) {
   const [productInfo , setProductInfo ] = useState([]);
   useEffect(() => {
     let product = new Array() , obj = {};
     for(let i =0 ; i < 15; i++) {
        obj = {};
        obj.name = `Macno Speakers - ${ i }`; 
        obj.oldPrice = 574+i;
        obj.newPrice = 404+i;
        obj.img = "../../../static/img/speaker.jpg";
        product.push(obj);
     }
     setProductInfo(product);
     product.map(( product , index ) => {
       console.log(product + ' -- '+ index)
     })
   } , [])

    return(<>
          <div className="container-fluid __productlisting">
                 <div className="row">
                      <div className="col-xs-12 col-md-3">
                        Filters
                      </div>
                     <div className="col-xs-12 col-md-9 __productlisting_products_wrapper">  
                         <div className="row __productlisting_products">                
                            {
                               productInfo.map(( product , index ) => {
                                 return  (
                                    <div className="col-xs-12 col-md-3" key = {index}>
                                      <ProductCard productInfo = { product } key = {index} />
                                   </div>
                               );
                              })
                            } 
                        </div>  
                        {/**** load more ... ****/}  
                        <LoadMore />                                       
                     </div>
                 </div>
             </div>
    </>)
}

export default ProductLisiting;