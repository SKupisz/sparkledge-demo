import React from "react";
import {Routes, Route} from "react-router-dom";

import { MainContainer } from "../styled/main.jsx";

import ShowingDocument from "./subpages/showingDocument.jsx";
import LoginPanel from "./subpages/login.jsx";
import ErrorPage from "./subpages/errorPage.jsx";

const Main = () => {
    return <MainContainer className="block-center">
        <Routes>
            <Route exact path = "/" element={<></>}/>
            <Route exact path = "/material" element={<ShowingDocument/>}/>
            <Route exact path = "/login" element={<LoginPanel/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    </MainContainer>
};

export default Main;