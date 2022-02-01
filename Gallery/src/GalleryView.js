import React, {useEffect, useState} from 'react';
import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import api from "./api";

function GalleryView() {

    const [albums, setAlbums] = useState([])

    async function getAlbums(params) {
        const albums = await api.get("albums", {
            params
        });
        setAlbums(albums.data);
    }

    useEffect(() => {
        getAlbums().catch(console.error)
    }, [])


    return (
        <>
            <SearchForm onSubmit={getAlbums}/>
            <Gallery albums={albums}/>
        </>
    );
}

export default GalleryView;