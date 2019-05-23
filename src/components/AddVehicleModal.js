import React from 'react';

import { Modal, Button, Form } from 'react-bootstrap';

function AddVehicleModal(props) {
    return (
        <Modal show={props.modalVisible} onHide={props.toggleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Vehicle</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Group>
                    <Form.Label>New Make Name</Form.Label>
                    <Form.Control value={props.NewMakeName} onChange={props.newVehicleOnChange} name="newMakeName" placeholder="By Make" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>New Model Name</Form.Label>
                    <Form.Control value={props.newModelName} onChange={props.newVehicleOnChange} name="newModelName" placeholder="By Make" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>In Stock</Form.Label>
                    <Form.Control as="select" value={props.newInStockValue} name="newInStockValue" onChange={props.newVehicleOnChange}>
                        <option value=''>Select</option>
                        <option value='in'>In Stock</option>
                        <option value='out'>Out of Stock</option>
                    </Form.Control>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.toggleModal}>Close</Button>
                <Button variant="primary" onClick={props.addNewVehicle}>Save changes</Button>
            </Modal.Footer>
        </Modal >
    );
}

export default AddVehicleModal;