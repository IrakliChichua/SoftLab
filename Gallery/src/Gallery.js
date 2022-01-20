import React, {useEffect, useState} from 'react';
import api from "./api";
import {Card, Col, ListGroup, Row} from "react-bootstrap";

function Gallery({showAlbum}) {

    const [albums, setAlbums] = useState([])

    async function getAlbums() {
        const album = await api.get("albums")
        setAlbums(album.data)
    }

    useEffect(() => {
        getAlbums().catch(console.error)
    }, [])

    const AlbumCard = ({userId, id, title}) => (
        <Card style={{width: '18rem', marginTop: 20, marginLeft: 20, cursor: "pointer"}}>
            <ListGroup variant="flush">
                <ListGroup.Item>ალბომი: {id}</ListGroup.Item>
                <ListGroup.Item>
                    <h6>userId {userId}</h6>
                    <div>{title}</div>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    )

    return (
        <>
            <Row>
                {
                    albums.map((album) => (
                        <Col key={album.id} onClick={() => showAlbum(album.id)}>
                            <AlbumCard {...album} />
                        </Col>
                    ))
                }
            </Row>
        </>
    );
}

export default Gallery;