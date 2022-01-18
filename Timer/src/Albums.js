import React, {useEffect, useState} from 'react';
import api from "./api";
import {Card, Col, Image, ListGroup, Modal, Row} from "react-bootstrap";

function Albums(props) {

  const [albums, setAlbums] = useState([])
  const [albumId, setAlbumId] = useState()
  const [photos, setPhotos] = useState([])
  const [showModal, setShowModal] = useState(false)

  async function getAlbums() {
    const album = await api.get("albums")
    setAlbums(album.data)
  }

  async function getPhotos() {
    console.log(albumId)
    const photo = await api.get("photos?", {
      params: {
        albumid: albumId
      }
    })
    setPhotos(photo.data)
  }

  useEffect(() => {
    getAlbums().catch(console.error)
  }, [])

  useEffect(() => {
    getPhotos().catch(console.error)
  }, [albumId])

  const AlbumCard = ({userId, id, title}) => (
    <Card style={{width: '18rem', marginTop: 20, marginLeft: 20}}>
      <ListGroup variant="flush">
        <ListGroup.Item>user Id: {userId}</ListGroup.Item>
        <ListGroup.Item>id: {id}</ListGroup.Item>
        <ListGroup.Item>title: {title}</ListGroup.Item>
      </ListGroup>
    </Card>
  )

  const show = (id) => {
    setShowModal(() => true)
    setAlbumId(id)
  }

  return (
    <>
      <Row>
        {
          albums.map((album) => (
            <Col key={album.id} onClick={() => show(album.id)}>
              <AlbumCard {...album} />
            </Col>
          ))
        }
      </Row>

      <Modal albumid={albumId} show={showModal}>
        {
          photos.map((photo) => (
            <div key={photo.id}>
              <Modal.Header>
                {photo.title}
              </Modal.Header>
              <Modal.Body>
                <Image src={photo.url}/>
              </Modal.Body>
            </div>

          ))
        }
      </Modal>
    </>
  );
}

export default Albums;