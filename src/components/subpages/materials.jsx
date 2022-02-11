import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import FindInPageIcon from '@mui/icons-material/FindInPage';

import { MaterialsContainer, MaterialSearchContainer, MaterialSearchInput, MaterialSearchButton,
    NoMaterialsBanner, NoMaterialsBannerHidder,
    MaterialsPreLoader, MaterialsPreloaderElem, ThrivingContainer, 
    SearcherWrapper, SearcherWrapperFilter } from "../../styled/materials.jsx";
import { ShowingDocumentHeader } from "../../styled/showingDocument.jsx";

import Welcome from "./welcome.jsx";
import MaterialWidget from "../support/materialWidget.jsx";
import Footer from "../support/footer.jsx";

import SearchBackground from "../../assets/searcher_background_3.jpg";

const MaterialsShowing = ({mode=1}) => { // 1 - not searched, 2 - searched

    const TempThrivingData = [
        {
            "id": "aksmsk7192",
            "title": "Zastosowania liczb zespolonych",
            "author": "Marek Kolski",
            "link": "/material",
            "categories": "liczby zespolone, wydział liczb zespolonych",
            "publishedOn": "31/10/2021",
            "stats": {
                "views": 2049,
                "likes": 356
            },
            "isRendered": true
        },{
            "id": "mbjgui7896",
            "title": "Podstawy matematyki dyskretnej",
            "author": "Adam Galan",
            "link": "/material",
            "categories": "grafy, matematyka dyskretna, podstawy matematyki dyskretnej",
            "publishedOn": "10/11/2021",
            "stats": {
                "views": 1869,
                "likes": 390
            },
            "isRendered": true
        },{
            "id": "asdaxvxcvxcv",
            "title": "Podstawy ochrony własności intelektualnej",
            "author": "Andrzej Rozbrat",
            "link": "/material",
            "categories": "własność intelektualna",
            "publishedOn": "31/10/2021",
            "stats": {
                "views": 1602,
                "likes": 298
            },
            "isRendered": true
        },
    ];

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setSearchResult] = useState(null);
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
        <SearcherWrapper className="block-center" background={SearchBackground}>
            <SearcherWrapperFilter className="block-center">
                <ShowingDocumentHeader className="block-center">
                    {dataStatus === -1 ? "Szukaj dokumentu" : "Wyniki wyszukiwania"}
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
                    {mode === 1 ? <>
                        <ThrivingContainer className="block-center">
                            <NoMaterialsBanner className="block-center">
                                Najpopularniejsze materiały
                            </NoMaterialsBanner>
                            {TempThrivingData.map((elem, ind) => <Link to = {elem["link"]} key = {"thriving-"+ind}>
                                <MaterialWidget ismajor={true} data={elem} color={"rgba(240,240,240,."+((ind % 2)+6)+")"}/>
                            </Link>)}
                        </ThrivingContainer>
                    </> : dataStatus === 0 ? <MaterialsPreLoader className="block-center">
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
                    : <ThrivingContainer className="block-center" mbottom={"10vh"}>{searchResult === null ? <></> : 
                        searchResult["exact"].map((elem, ind) => elem["isRendered"] === true ? <Link to = {elem["link"]} key = {"material-"+ind}>
                        <MaterialWidget ismajor={true} data={elem} color={"rgba(90,60,90,."+((ind % 2)+1)+")"}/>
                    </Link> : <></>)}
                    {searchResult === null ? <></> : searchResult["otherMatches"].map((elem, ind) => elem["isRendered"] === true ? <Link to = {elem["link"]} key = {"material-"+ind}>
                        <MaterialWidget ismajor={false} data={elem} color={"rgba(90,60,90,."+((ind % 2)+1)+")"}/>
                    </Link> : <></>)}
                    </ThrivingContainer>}
                </MaterialsContainer>
            </SearcherWrapperFilter>
        </SearcherWrapper>
        {mode === 1 ? <Welcome mode={2}/> : <></>}
        
        <Footer/>
    </>
};

export default MaterialsShowing;