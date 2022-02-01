import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import api from "./api";
import {Col, Image, Row} from "react-bootstrap";
import Photo from "./Photo";

function Album() {

    const {albumId} = useParams();
    const [album, setAlbum] = useState([]);
    const [photo, setPhoto] = useState({});
    const [showModalPhoto, setShowModalPhoto] = useState(false)

    useEffect(() => {
        api.get(`photos?albumId=${albumId}`).then(res => setAlbum(res.data));
    }, [albumId])


    const showPhoto = (id) => {
        api.get(`photos?albumId=${albumId}`, {
            params: {id}
        }).then(res => setPhoto(res.data))
        setShowModalPhoto(true)
    }


    return (
        <div>
            <Row className="gx-0 m-3">
                {album.map((photo) => (
                    <Col key={photo.id} className="mb-4 me-4 border text-center">
                        <Image onClick={() => showPhoto(photo.id)} style={{cursor: "pointer"}}
                               src={photo.thumbnailUrl}/>
                        <div className="p-1">{photo.title}</div>
                    </Col>
                ))
                }
            </Row>
            <Photo photo={photo} showModalPhoto={showModalPhoto} setShowModalPhoto={setShowModalPhoto}/>
        </div>
    );
}

export default Album;
