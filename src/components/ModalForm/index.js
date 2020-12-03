// == Import npm
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

// == Import
import PropTypes from 'prop-types';
// import './style.scss';

// == Composant
const ModalForm = (props) => {
    return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Ajouter un(e) ami(e)
            </Modal.Title>
        </Modal.Header>
            <Form onSubmit={props.clickAddUser} >
            <Modal.Body>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Son nom (ou son surnom):</Form.Label>
                    <Form.Control type="texte" placeholder="Nom" onChange={(e) => {
                        props.onChangeInput(e.target.value)
                        }} value={props.inputModal}/>
                </Form.Group>

            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" type="submit">Ajouter</Button>
            <Button variant="outline-primary" onClick={props.onHide}>Annuler</Button>
            </Modal.Footer>
        </Form>
    </Modal>
);
};

ModalForm.propTypes = {
    onHide: PropTypes.func.isRequired,
    clickAddUser: PropTypes.func.isRequired,
    inputModal: PropTypes.string.isRequired,
    onChangeInput: PropTypes.string.isRequired,
}

// == Export
export default ModalForm;