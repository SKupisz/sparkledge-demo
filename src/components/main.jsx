import React from "react";
import {Routes, Route} from "react-router-dom";

import { MainContainer } from "../styled/main.jsx";

import ShowingDocument from "./subpages/showingDocument.jsx";

const Main = () => {
    return <MainContainer className="block-center">
        <Routes>
            <Route exact path = "/" element={<></>}/>
            <Route exact path = "/material" element={<ShowingDocument/>}/>
        </Routes>
    </MainContainer>
};

export default Main;