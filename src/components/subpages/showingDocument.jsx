import React, {useState, useEffect, useLayoutEffect} from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from 'react-pdf';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import { ShowingDocumentHeader, ShowingDocumentData,
    DocumentPreLoader, DocumentPreLoaderInner, 
    ShowingDocumentMenuIcon, ShowingDocumentMenuPage, 
    ShowingDocumentDisplay, ShowingDocumentMenu } from "../../styled/showingDocument.jsx";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const useWindowSize = () => {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

const ShowingDocument = () => {


    const [isLoaded, toggleIsLoaded] = useState(false);
    const [documentScale, setDocumentScale] = useState(1);
    const [pageNumber, setPageNumber] = useState(null);
    const [totalPages, setTotalPages] = useState(null);
    const width = useWindowSize();

    const onLoad = ({numPages}) => {
        toggleIsLoaded(true);
        setTotalPages(numPages);
        setPageNumber(1);
    }

    useEffect(() => {
        if(width < 320){
            setDocumentScale(0.4);
        }
        else if(width < 375){
            setDocumentScale(0.5);
        }
        else if(width < 540){
            setDocumentScale(0.6);
        }
        else if(width < 768){
            setDocumentScale(0.8);
        }
        else{
            setDocumentScale(1);
        }
    }, [width]);

    return <>
        <ShowingDocumentHeader className="block-center">
            Tytuł dokumentu
        </ShowingDocumentHeader>
        <ShowingDocumentData className="block-center">
            Wstawione 18/12/2021 przez użytkownika Jan Kowalski
        </ShowingDocumentData>
        {isLoaded ? null : <>
            <DocumentPreLoaderInner className="block-center pdf-loader"/>
            <DocumentPreLoader className="block-center pdf-loader"/>
        </>}
        <ShowingDocumentMenu className={isLoaded  ? "block-center" : "block-center hidden"}>
            <ShowingDocumentMenuIcon aviable={pageNumber > 1 ? "true" : "false"}>
                <ArrowCircleLeftIcon onClick = {() => pageNumber - 1 >=1 ? setPageNumber(pageNumber-1) : null}/>
            </ShowingDocumentMenuIcon>
            <ShowingDocumentMenuPage>
                {pageNumber !== null ? pageNumber : ""}
            </ShowingDocumentMenuPage>
            <ShowingDocumentMenuIcon aviable = {"true"}>
                <ArrowCircleRightIcon onClick = {() => pageNumber+1 < totalPages ?  setPageNumber(pageNumber+1) : null}/>
            </ShowingDocumentMenuIcon>
        </ShowingDocumentMenu>
        <ShowingDocumentDisplay className="block-center" ispdf="true">
            <Document file = "Regulamin_Tech_Minds_2910.pdf"
            onLoadSuccess={(numPages) => onLoad(numPages)} loading={null}>
                <Page pageNumber={pageNumber} scale={documentScale} />
            </Document>
        </ShowingDocumentDisplay>
    </>
};

export default ShowingDocument;