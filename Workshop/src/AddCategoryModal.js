import React, {useState} from 'react';
import {Button, Form, Modal, Row} from "react-bootstrap";


function AddCategoryModal({showModal, setShowModal, addNewCategory}) {

    const [category_name, setCategory_name] = useState('')
    const [parent_id, setParent_id] = useState('')

    return (
        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
            <Modal.Header closeButton>
                <Modal.Title> Add Category </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Form className="m-3">
                    <Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Category Name</Form.Label>
                            <Form.Control placeholder="Enter Category Name" value={category_name}
                                          onChange={e => setCategory_name(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Parent ID</Form.Label>
                            <Form.Control placeholder="Enter Parent ID" value={parent_id}
                                          onChange={e => setParent_id(e.target.value)}/>
                        </Form.Group>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => addNewCategory({category_name,parent_id})}>Add</Button>
                <Button onClick={() => setShowModal(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddCategoryModal;