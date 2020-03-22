import Head from './head';
import Nav from './nav';
import SearchBarComponent from './searchBar';
import TopBarComponent from './stickyTopBar';
import DiscountBarComponent from './discountBar';
import Footer from './footerComponent';
import { string } from 'prop-types';
import  StyleContextProvider from '../components/contextAPI/styleContext';
import  RouteContextProvider from './contextAPI/routingContext';
const title = '';
const Wrapper = (props) => 
(<React.Fragment>
    
            <Head title= {props.title} description = {props.description} />
            <TopBarComponent />
            <SearchBarComponent />
                <Nav />
                <DiscountBarComponent />
                {props.children}   
            <Footer />
  
</React.Fragment>);
Wrapper.prototype = {
 title : string
}
export default React.memo(Wrapper);