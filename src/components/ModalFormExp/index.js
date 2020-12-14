// == Import npm
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

// == Import
import PropTypes from 'prop-types';
// import './style.scss';

// == Composant
const ModalFormExp = (props) => {
    const { currentUserExpID, onChangeInput, inputModal, onHide, onSubmitExp } = props
    const handleInputChange = (evt) => { onChangeInput({ [evt.target.name]: evt.target.value }) };

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
            <Form onSubmit={(e) => {
                e.preventDefault();
                onSubmitExp(currentUserExpID)
                }} >
                <Modal.Body>
                    <Form.Group controlId="type">
                        <Form.Label>Libellé de la dépense</Form.Label>
                        <Form.Control type="text" placeholder="Nom" name="inputModalExp" onChange={handleInputChange} value={inputModal} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Combien ?</Form.Label>
                        <Form.Control type="text" placeholder="Nom" name="inputModalExpNum" onChange={handleInputChange} value={inputModal} parse={(val) => parseInt(val, 10)} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit">Ajouter</Button>
                    <Button variant="outline-primary" onClick={onHide}>Annuler</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
};

ModalFormExp.propTypes = {
    onHide: PropTypes.func.isRequired,
    onSubmitExp: PropTypes.func.isRequired,
    inputModal: PropTypes.string,
    onChangeInput: PropTypes.func.isRequired,
    currentUserExpID: PropTypes.number,
}

// == Export
export default ModalFormExp;