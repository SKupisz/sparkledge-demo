import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { MaterialsContainer, NoMaterialsBanner, NoMaterialsBannerHidder,
    MaterialsPreLoader, MaterialsPreloaderElem } from "../../styled/materials.jsx";
import { ShowingDocumentHeader } from "../../styled/showingDocument.jsx";

import MaterialWidget from "../support/materialWidget.jsx";

const MaterialsShowing = () => {

    const [searchResult, setSearchResult] = useState([]);
    const [dataStatus, setDataStatus] = useState(0); // 0 - loading, 1 - data loaded, 2 - no data or data error

    useEffect(() => {
        axios.get("searchData.json").then((response) => {
            setSearchResult(response.data);
            setDataStatus(1);
        })
        .catch(() => setTimeout(() => setDataStatus(2), 500));
    }, []);

    return <>
        <ShowingDocumentHeader className="block-center">
            Wyniki wyszukiwania
        </ShowingDocumentHeader>
        <MaterialsContainer className="block-center">
            {dataStatus === 0 ? <MaterialsPreLoader className="block-center">
                <MaterialsPreloaderElem/>
                <MaterialsPreloaderElem/>
                <MaterialsPreloaderElem/>
            </MaterialsPreLoader>: dataStatus === 2 ? <>
                <NoMaterialsBanner className="block-center">
                    Brak wyników wyszukiwania. Spróbuj zmienić wyszukiwaną frazę
                </NoMaterialsBanner>
                <NoMaterialsBannerHidder className="block-center" height = {dataStatus === 2 ? "0em" : "3em"} 
                    top = {dataStatus === 2 ? "0em" : "-3em"}/>
            </>
            : searchResult.map((elem, ind) => elem["isRendered"] === true ? <Link to = {elem["link"]} key = {"material-"+ind}>
                <MaterialWidget data={elem} color={"rgba(90,60,90,."+((ind % 2)+1)+")"}/>
            </Link> : <></>)}
        </MaterialsContainer>
    </>
};

export default MaterialsShowing;