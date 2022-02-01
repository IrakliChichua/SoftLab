import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Alert} from "react-bootstrap";
import CategoriesView from "./CategoriesView";
import App from "./App";
import MakersView from "./MakersView";


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<CategoriesView/>}/>
                <Route path='/categories' element={<CategoriesView/>}/>
                <Route path='/makers' element={<MakersView/>}/>
                <Route path='*' element={<Alert variant="danger"> 404 page not found</Alert>}/>
            </Route>
        </Routes>
    </BrowserRouter>,

    document.getElementById('root')
);


