import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ValidationModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
             { props.header }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>   
           <p>
              { props.message }
          </p>
        </Modal.Body>
        
      </Modal>
    );
  }
  export default ValidationModal;