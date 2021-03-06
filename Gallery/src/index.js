import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Timer from "./Timer";
import App from "./App";
import {Alert} from "react-bootstrap";
import Album from "./Album";
import GalleryView from "./GalleryView";


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<GalleryView/>}/>
                <Route path='gallery' element={<GalleryView/>}/>
                <Route path='timer' element={<Timer/>}/>
                <Route path='album/:albumId' element={<Album/>}/>
                <Route path='*' element={<Alert variant="danger"> 404 page not found</Alert>}/>
            </Route>
        </Routes>
    </BrowserRouter>,

    document.getElementById('root')
);


