import React from 'react';
import {Card, Col, ListGroup, Row} from "react-bootstrap";
import {useNavigate} from 'react-router-dom'

function Gallery({albums}) {
    const navigate = useNavigate();

    const AlbumCard = ({userId, id, title}) => (
        <Card onClick={() => navigate(`/album/${id}`)}
              style={{width: '18rem', marginTop: 20, marginLeft: 20, cursor: "pointer"}}>
            <ListGroup variant="flush">
                <ListGroup.Item style={{background: "lightblue"}}>ალბომი: {id}</ListGroup.Item>
                <ListGroup.Item>
                    <h6>userId {userId}</h6>
                    <div>{title}</div>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    )

    return (
        <Row>
            {
                albums.map((album) => (
                    <Col key={album.id}>
                        <AlbumCard {...album} />
                    </Col>
                ))
            }
        </Row>
    );

}

export default Gallery;