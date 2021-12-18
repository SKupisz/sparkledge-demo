import styled from "styled-components";

export const ShowingDocumentHeader = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.3em;
    letter-spacing: 0.07em;
    color: rgba(240,240,240,.9);
    text-shadow: 3px 3px 4px #000;
    line-height: 1.1em;
    margin-bottom: 4vh;
    position: relative;
    top: 2vh;

    @media screen and (min-width: 320px){
        font-size: 1.5em;
    }

    @media screen and (min-width: 425px){
        font-size: 1.8em;
    }

    @media screen and (min-width: 768px){
        width: calc(90% - 20px);
        font-size: 2.4em;
    }
`;

export const ShowingDocumentData = styled.div`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 0.7em;
    color: rgba(240,240,240,.7);
    letter-spacing: 0.08em;
    text-shadow: 3px 3px 4px #000;
    margin-bottom: 5vh;

    @media screen and (min-width: 375px){
        font-size: 0.8em;
    }

    @media screen and (min-width: 425px){
        font-size: 1em;
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 10px);
        font-size: 1.2em;
    }

    @media screen and (min-width: 1024px){
        width: calc(60% - 10px);
        font-size: 1.4em;
    }

`;

export const DocumentPreLoader = styled.div`
    width: 140px;
    height: 140px;
    animation-name: OuterCircleRotation;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    margin-bottom: 4vh;
    position: relative;
    top: -50px;

    @media screen and (min-width: 375px){
        width: 280px;
        height: 280px;
        top: -100px;
    }
`;

export const DocumentPreLoaderInner = styled.div`
    width: 40px;
    height: 40px;
    position: relative;
    top: 60px;
    animation-name: InnerCircleRotation;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    
    @media screen and (min-width: 375px){
        width: 80px;
        height: 80px;
        top: 100px;
    }
`;

export const ShowingDocumentDisplay = styled.section`
    width: ${(props) => 
        props.ispdf === "true" ? "fit-content" : "calc(70% - 22px)"};
    padding: ${(props) => 
        props.ispdf === "true" ? "0px" : "10px"};
    border-radius: 10px;
    border: 1px solid #000;
    box-shadow: 3px 3px 4px #000;
    height: ${(props) => 
        props.ispdf === "true" ? "fit-content" : "calc(70vh - 22px)"};
    margin-bottom: 4vh;
    text-align: center;
    overflow-y: hidden;
`;

export const ShowingDocumentMenu = styled.nav`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    height: calc(10vh - 10px);
    
    @media screen and (min-width: 425px){
        width: calc(70% - 10px);
    }

    @media screen and (min-width: 768px){
        width: calc(50% - 10px);
    }
`;

export const ShowingDocumentMenuIcon = styled.div`
    width: calc(20% - 10px);
    margin: 2vh 5px 0px;
    height: 6vh;
    color: ${(props) => 
        props.aviable === "true" ? "rgba(240,240,240,.9)" : "rgba(240,240,240,.6)"};
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
    transition: all 0.4s;

    &:hover{
        ${(props) => 
            props.aviable === "true" ? `filter: brightness(70%);` : ""}
    }

    @media screen and (min-width: 425px){
        width: calc(10% - 10px);
    }
`;

export const ShowingDocumentMenuPage = styled.div`
    width: calc(20% - 20px);
    height: calc(8vh - 10px);
    line-height: calc(6vh - 10px);
    margin: 1vh 5px 0px;
    padding: 5px;
    text-align: center;
    font-size: 1.1em;
    letter-spacing: 0.07em;
    color: rgba(240,240,240,.8);
    text-shadow: 3px 3px 4px #000;
    display: inline-block;
    vertical-align: top;

    @media screen and (min-width: 425px){
        font-size: 1.3em;
    }
`;