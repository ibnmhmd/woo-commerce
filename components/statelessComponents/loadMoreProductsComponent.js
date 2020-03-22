import CustomButton from '../statelessComponents/customButtonComponent';

export const LoadMore = (props) => {
    return(<React.Fragment>
               <div className ="row">
                   <div className = "col-xs-12 col-md-4"></div>
                     <div className = "col-xs-12 col-md-4">
                        <CustomButton  buttonName = "LOAD MORE ITEMS.."/>
                     </div>
                    <div className = "col-xs-12 col-md-4"></div>
               </div>
   </React.Fragment>)
}
