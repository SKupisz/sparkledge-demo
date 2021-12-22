import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import FindInPageIcon from '@mui/icons-material/FindInPage';

import { MaterialsContainer, MaterialSearchContainer, MaterialSearchInput, MaterialSearchButton,
    NoMaterialsBanner, NoMaterialsBannerHidder,
    MaterialsPreLoader, MaterialsPreloaderElem } from "../../styled/materials.jsx";
import { ShowingDocumentHeader } from "../../styled/showingDocument.jsx";

import MaterialWidget from "../support/materialWidget.jsx";

const MaterialsShowing = ({mode=1}) => { // 1 - not searched, 2 - searched

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [dataStatus, setDataStatus] = useState(-1); // -1, only searching 0 - loading, 1 - data loaded, 2 - no data or data error
    const {q} = useParams();

    const getSearchData = async (q) => {
        console.log(q);
        await axios.get("../../searchData.json").then((response) => {
            setSearchResult(response.data);
            setDataStatus(1);
        })
        .catch(() => setTimeout(() => setDataStatus(2), 500));
    }

    useEffect(() => {

        if(mode === 2){

            setDataStatus(0);
            getSearchData(q);
        }

    }, []);

    return <>
        <ShowingDocumentHeader className="block-center">
            {dataStatus === -1 ? "Szukaj dokumentu" :"Wyniki wyszukiwania"}
        </ShowingDocumentHeader>
        <MaterialSearchContainer className="block-center">
            <MaterialSearchInput type="text" placeholder="Wyszukaj..." name="p"
                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            <a href= {"/searcher/"+searchQuery}>
                <MaterialSearchButton type="button">
                    <FindInPageIcon style={{color: "inherit", fontSize: "inherit"}}/>
                </MaterialSearchButton>
            </a>
        </MaterialSearchContainer>
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