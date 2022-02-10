import styled from "styled-components";
import {animated as a} from "react-spring";

export const MaterialsContainer = styled.section`
    width: calc(100% - 10px);
    padding: 5px;
    position: relative;
    top: 3vh;

    a{
        text-decoration: none;
    }

    @media screen and (min-width: 650px){
        width: calc(90% - 10px);
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 10px);
    }

    @media screen and (min-width: 1024px){
        width: calc(70% - 10px);
    }
`;

export const MaterialSearchContainer = styled.section`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    margin-bottom: 4vh;

    @media screen and (min-width: 425px){
        width: calc(80% - 20px);
    }

    @media screen and (min-width: 768px){
        width: calc(60% - 20px);
    }
`;

export const MaterialSearchInput = styled.input`
    width: calc(70% - 10px);
    height: calc(7vh - 20px) !important;
    padding: 10px 5px;
    display: inline-block;
    vertical-align: top;
    text-indent: 0.5em;
    font-size: 0.8em;
    letter-spacing: 0.06em;
    border: none;
    border-radius: 10px 0px 0px 10px;
    box-shadow: -3px 3px 4px rgba(0,0,0,.2);
    text-shadow: 3px 3px 4px rgba(0,0,0,.12);
    color: rgba(34, 174, 255, 0.95);
    background: rgba(230,230,230,.9);
    transition: all 0.4s;

    &:hover{
        filter: brightness(70%);
    }

    &:focus{
        outline: none;
        filter: brightness(80%);
    }

    @media screen and (min-width: 375px){
        font-size: 1em;
        width: calc(80% - 10px);
    }

    @media screen and (min-width: 768px){
        font-size: 1.2em;
    }
`;

export const MaterialSearchButton = styled.button`
    width: fit-content;
    height: calc(7vh - 10px);
    line-height: calc(7vh - 10px);
    padding: 5px;
    border: none;
    border-radius: 0px 10px 10px 0px;
    text-align: center;
    font-size: 2.2em;
    background: transparent;
    color: rgba(34, 174, 255, 0.95);
    text-shadow: 3px 3px 4px rgba(0,0,0,.1);
    cursor: pointer;
    transition: all 0.4s;
    display: inline-block;
    vertical-align: top;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 768px){
        font-size: 2.4em;
    }
`;

export const NoMaterialsBanner = styled.header`
    width: calc(90% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.8em;
    letter-spacing: 0.08em;
    color: rgba(34, 174, 255, 0.85);
    text-shadow: 3px 3px 4px rgba(0,0,0,.15);
    margin-bottom: 5vh;
`;

export const NoMaterialsBannerHidder = styled(a.header)`
    width: 90%;
    background: rgba(240,240,240,1);
    height: ${(props) => 
        props.height ? props.height : "3em"};
    position: relative;
    top: ${(props) => 
        props.top ? props.top : "-3em"};
    transition: all 0.4s;
`;

export const MaterialsPreLoader = styled.div`
    width: 180px;
    padding: 10px;
    text-align: center;
    position: relative;
    top: 14vh;

    animation-name: MaterialsContainerLoaderAnim;
    animation-iteration-count: infinite;
    animation-duration: 2s;
`;

export const MaterialsPreloaderElem = styled(a.div)`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${(props) => 
        props.background ? props.background : "rgba(90,60,90.6)"};
    display: inline-block;
    vertical-align: top;
    margin: 0px 5px;
    transform-origin: -10px 10px;
    animation-name: MaterialsLoaderAnim;
    animation-iteration-count: infinite;
    animation-duration: 1s;

    ${(props) => 
        props.delay ? `animation-delay: ${props.delay}s;` : ""}
    transition: all 0.3s;

    @media screen and (min-width: 425px){
        width: 20px;
        height: 20px;
        transform-origin: -20px 20px;
        margin: 0px 10px;
    }
`;

export const ThrivingContainer = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 16vh;
`;