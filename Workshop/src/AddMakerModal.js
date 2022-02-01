import React, {useState} from 'react';
import {Button, Form, Modal, Row} from "react-bootstrap";

function AddMakerModal({showModal, setShowModal, addNewMaker}) {

    const [maker_name, setMaker_name] = useState('')

    return (
        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
            <Modal.Header closeButton>
                <Modal.Title> Add Maker </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Form className="m-3">
                    <Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Maker Name</Form.Label>
                            <Form.Control placeholder="Enter Maker Name" value={maker_name}
                                          onChange={e => setMaker_name(e.target.value)}/>
                        </Form.Group>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => addNewMaker({maker_name})}>Add</Button>
                <Button onClick={() => setShowModal(false)}>Close</Button>
            </Modal.Footer>
        </Modal>

    );
}

export default AddMakerModal;