import Gallery from "./Gallery";
import {useState} from "react";
import Album from "./Album";
import api from "./api";
import Photo from "./Photo";

export default function App() {

    const [showModalAlbum, setShowModalAlbum] = useState(false)
    const [showModalPhoto, setShowModalPhoto] = useState(false)
    const [album, setAlbum] = useState([])
    const [photo, setPhoto] = useState([])

    async function getAlbum(albumId) {
        const album = await api.get("photos?", {
            params: {
                albumId: albumId
            }
        })
        setAlbum(album.data)
    }

    async function getPhoto(id) {
        const photo = await api.get("photos?", {
            params: {
                id: id
            }
        })
        setPhoto(photo.data)
    }

    const showAlbum = (id) => {
        setShowModalAlbum(() => true)
        getAlbum(id).catch(console.error)
    }

    const showPhoto = (id)=>{
        setShowModalPhoto(()=>true)
        getPhoto(id).catch(console.error)
    }

    return (
        <>
            <Gallery showAlbum={showAlbum} />
            <Album showPhoto={showPhoto} showModalAlbum={showModalAlbum} setShowModalAlbum={setShowModalAlbum} album={album} />
            <Photo showModalPhoto={showModalPhoto} setShowModalPhoto={setShowModalPhoto} photo={photo} />
        </>

    )
}