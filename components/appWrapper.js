import Head from './head';
import Nav from './nav';
import SearchBarComponent from './searchBar';
import TopBarComponent from './stickyTopBar';
import DiscountBarComponent from './discountBar';
import Footer from './footerComponent';
import { string } from 'prop-types';
import  StyleContextProvider from '../components/contextAPI/styleContext'
const title = '';
const Wrapper = (props) => 
(
     <StyleContextProvider>
            <Head title= {props.title} description = {props.description} />
            <TopBarComponent />
            <SearchBarComponent />
            <Nav />
            <DiscountBarComponent />
             {props.children}
            
            <Footer />
    </StyleContextProvider>
);
Wrapper.prototype = {
 title : string
}
export default Wrapper;