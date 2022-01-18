import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Col, Container, Image, Row} from "react-bootstrap";

function Pictures() {

    const [pictures, setPictures] = useState([])

    async function getPictures(){
        const response = await axios.get("https://jsonplaceholder.typicode.com/photos?albumId=1");
        setPictures(response.data);
    }
    useEffect(()=>{
        getPictures().catch(console.error);
    }, []);


    const PictureGrid = ({albumId,id,title,thumbnailUrl}) => (
        <Container style={{marginTop:10}}>
            <Row>
                <Col>album ID - {albumId}</Col>
                <Col>ID - {id}</Col>
                <Col>title - {title}</Col>
                <Col><Image src={thumbnailUrl}/></Col>
            </Row>
        </Container>
    )

    return (

        pictures.map((picture)=>(
            <PictureGrid {...picture} key={picture.id} />
        ))

    );
}

export default Pictures;