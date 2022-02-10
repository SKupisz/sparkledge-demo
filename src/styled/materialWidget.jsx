import styled from "styled-components";
import {animated as a} from "react-spring";

export const MaterialWidgetContainer = styled.div`
    width: calc(100% - 20px);
    height: fit-content;
    min-height: calc(40vh - 20px);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 4px rgba(0,0,0,.25);
    margin-bottom: 4vh;
    background: ${(props) => 
        props.background ? props.background : "rgba(230,230,230,.8)"};
    cursor: pointer;
    transition: all 0.4s;

    &:hover{
        filter: brightness(70%);
    }
    
    &:focus{
        outline: none;
        filter: brightness(80%);
        box-shadow: 3px 3px 4px rgba(0,0,0,.3);
    }

    @media screen and (min-width: 650px){
        width: calc(90% - 20px);
    }

    @media screen and (min-width: 1024px){
        width: calc(80% - 20px);
    }
`;

export const MaterialWidgetDataInfo = styled.div`
    width: calc(100% - 10px);
    height: 100%;
    display: inline-block;
    vertical-align: top;
    margin: 0px 5px;

    @media screen and (min-width: 425px){
        width: calc(70% - 10px);
        height: 100%;
    }
`;

export const MaterialWidgetAudienceInfo = styled.div`
    width: calc(100% - 10px);
    height: 7vh;
    padding-top: 3vh;
    display: inline-block;
    vertical-align: top;
    margin: 0px 5px;

    @media screen and (min-width: 425px){
        width: calc(30% - 10px);
        height: calc(100% - 3vh);
    }
`; 

export const MaterialWidgetHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    font-size: 1.1em;
    letter-spacing: 0.07em;
    color: rgba(34, 174, 255, 0.95);
    text-shadow: 3px 3px 4px rgba(0,0,0,.15);
    margin-bottom: 2vh;
    position: relative;
    text-align: center;
    text-indent: 0em;
    top: 1vh;

    @media screen and (min-width: 425px){
        text-align: left;
        text-indent: 0.9em;
    }

    @media screen and (min-width: 630px){
        font-size: 1.4em;
        text-indent: 1.2em;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.6em;
    }
`;

export const MaterialWidgetAuthor = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    font-size: 1em;
    letter-spacing: 0.06em;
    color: rgba(34, 174, 255, 0.85);
    text-shadow: 3px 3px 4px rgba(0,0,0,.1);
    text-align: center;
    text-indent: 0;
    margin-bottom: 6vh;

    @media screen and (min-width: 425px){
        text-indent: 2.5em;
        text-align: left;
        margin-bottom: 8vh;
    }

    @media screen and (min-width: 650px){
        width: calc(80% - 10px);
        text-indent: 4em;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.3em;
    }
`;

export const MaterialWidgetCategoriesContainer = styled.section`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;

    @media screen and (min-width: 425px){
        text-align: left;
    }

    @media screen and (min-width: 1024px){
        width: calc(90% - 10px);
    }
`;

export const MaterialWidgetCategorie = styled.div`
    width: fit-content;
    padding: 8px;
    font-size: 0.7em;
    letter-spacing: 0.06em;
    color: rgba(240,240,240,.8);
    background: rgba(34, 174, 255, 0.95);
    display: inline-block;
    vertical-align: top;
    margin: 5px;
    border-radius: 10px;
    box-shadow: 3px 3px 4px rgba(0,0,0,.1);

    @media screen and (min-width: 650px){
        font-size: 0.8em;
    }

    @media screen and (min-width: 1024px){
        font-size: 1em;
    }
`;

export const MaterialWidgetData = styled.div`
    width: calc(33% - 20px);
    padding: 5px;
    color: rgba(34, 174, 255, 0.9);
    text-shadow: 3px 3px 4px rgba(0,0,0,.1);
    font-size: 0.5em;
    letter-spacing: 0.07em;
    margin: 0px 5px;
    display: inline-block;
    vertical-align: top;
    text-align: center;

    @media screen and (min-width: 320px){
        font-size: 0.7em;
    }

    @media screen and (min-width: 375px){
        font-size: 0.8em;
    }

    @media screen and (min-width: 425px){
        width: calc(100% - 10px);
        display: block;
        margin: 0px auto;
        margin-bottom: ${(props) => 
            props.isdate ? "3vh" : "1vh"};
    }

    @media screen and (min-width: 650px){
        font-size: 1em;
    }
    
    @media screen and (min-width: 1024px){
        font-size: 1.2em;
    }

    @media screen and (min-width: 1440px){
        font-size: 1.3em;
        width: calc(90% - 10px);
    }
`;

export const MaterialWidgetDataSpan = styled.div`
    margin-left: 0.3em;
    display: inline-block;
    vertical-align: top;

    @media screen and (min-width: 650px){
        margin-left: 0.3em;
    }
`;