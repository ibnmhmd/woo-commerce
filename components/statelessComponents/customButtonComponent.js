const CustomButton = (props) => {
    return (<React.Fragment>
              <a href="#" className="customButton"><i className= {`${props.fontName} __quick_item_font_awsome` }></i>{props.buttonName}</a>
    </React.Fragment>)
  }
export default CustomButton;  