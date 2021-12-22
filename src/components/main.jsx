import React from "react";
import {Routes, Route} from "react-router-dom";

import { MainContainer } from "../styled/main.jsx";

import ShowingDocument from "./subpages/showingDocument.jsx";
import LoginPanel from "./subpages/login.jsx";
import MaterialsShowing from "./subpages/materials.jsx";
import ErrorPage from "./subpages/errorPage.jsx";

const Main = () => {
    return <MainContainer className="block-center">
        <Routes>
            <Route exact path = "/" element={<></>}/>
            <Route exact path = "/material" element={<ShowingDocument/>}/>
            <Route exact path = "/login" element={<LoginPanel/>}/>
            <Route exact path = "/searcher" element={<MaterialsShowing mode={1}/>}/>
            <Route exact path = "/searcher/:q" element={<MaterialsShowing mode={2}/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    </MainContainer>
};

export default Main;