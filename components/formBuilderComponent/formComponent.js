import Form from 'react-bootstrap/Form';
 
 const FormBuilder = (props) => {
    const formData = props.props;
    if("none" == formData.type) {
        return(<NotesComponent note = { formData.note }/>);
    }else{
    return(
        <Form.Group controlId = {formData.controlId}>
            <Form.Label>{formData.label}</Form.Label>
            <Form.Control onChange = {formData.change} className = {formData.class} inputref= {formData.controlId} data-formdata = {JSON.stringify(formData)} type = {formData.type} placeholder = {formData.placeholder} />
           { formData.note ? <NotesComponent note = { formData.note }/> : null }
       </Form.Group>
    ); }
}



const NotesComponent = (note) => {
    return(<Form.Text className= {note.class}>
             {note.note}
          </Form.Text>);
}
export default FormBuilder;