import React from 'react';
import {Button, Col, Image, Modal} from "react-bootstrap";

function Photo({photo, showModalPhoto,setShowModalPhoto}) {


    return (
        <Modal show={showModalPhoto} onHide={()=>setShowModalPhoto(false)} size="lg">
            <Modal.Header closeButton>
                <Modal.Title> Using Grid in Modal </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                    {photo.map((album) => (
                        <Col key={album.id}>
                            <Image src={album.url}/>
                        </Col>
                    ))
                    }
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>setShowModalPhoto(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Photo;