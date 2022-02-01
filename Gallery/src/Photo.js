import React from 'react';
import {Button, Image, Modal} from "react-bootstrap";

function Photo({photo, showModalPhoto, setShowModalPhoto}) {

    const {url} = photo[0] || ''

    return (
            <Modal show={showModalPhoto} onHide={() => setShowModalPhoto(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title> Using Grid in Modal </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Image src={url}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShowModalPhoto(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
    );
}

export default Photo;