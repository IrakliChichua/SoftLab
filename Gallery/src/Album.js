import React from 'react';
import {Button, Col, Image, Modal, Row} from "react-bootstrap";


function Album({showModalAlbum, setShowModalAlbum, album, showPhoto}) {


    return (
        <Modal show={showModalAlbum} onHide={()=>setShowModalAlbum(false)} size="xl">
            <Modal.Header closeButton>
                <Modal.Title> Using Grid in Modal </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Row className="gx-0">
                    {album.map((album) => (
                        <Col key={album.id} className="mb-4 me-4 border text-center">
                                <Image onClick={()=>showPhoto(album.id)} style={{cursor:"pointer"}} src={album.thumbnailUrl}/>
                                <div className="p-1">{album.title}</div>
                        </Col>
                    ))
                    }
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>setShowModalAlbum(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Album;
