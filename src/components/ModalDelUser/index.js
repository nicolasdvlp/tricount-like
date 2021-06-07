// == Import npm
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

// == Import
import PropTypes from 'prop-types';
// import './style.scss';

// == Composant
const ModalDelUser = (props) => {
  const { currentUserExpID, onHide, onSubmitDelUser, userName } = props

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Etes vous sur de vouloir supprimer le participant {userName} ?
                </Modal.Title>
      </Modal.Header>
      <Form onSubmit={(e) => {
        e.preventDefault();
        onSubmitDelUser(currentUserExpID)
      }} >
        <Modal.Footer>
          <Button variant="primary" type="submit">Oui</Button>
          <Button variant="outline-primary" onClick={onHide}>Non</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
};

ModalDelUser.propTypes = {
  onHide: PropTypes.func.isRequired,
  onSubmitDelUser: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  currentUserExpID: PropTypes.string,
}

// == Export
export default ModalDelUser;