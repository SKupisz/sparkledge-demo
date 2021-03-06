import styled from "styled-components";
import {animated as a} from "react-spring";

export const NavbarContainer = styled(a.div)`
    width: calc(100% - 10px);
    padding: 0px 5px;
    text-align: center;
    background: rgba(230,230,230,1);
    box-shadow: 0px 5px 7px rgba(0,0,0,.15);
    height: ${(props) => 
        props.opened === "true" ? "100vh" : "12vh"};
    position: fixed;
    top: 0vh;
    left: 0vh;
    overflow-y: hidden;
    transition: height 0.4s;
    z-index: 10;

    a{
        text-decoration: none;
        color: rgba(34, 174, 255, 1);
    }

    @media screen and (min-width: 768px){
        height: 12vh;
        line-height: 0vh;
        padding: 0px 5px;
    }
`;

export const NavbarResponsiveSection = styled.section`

    width: 100%;
    padding: 5px 0px;
    height: calc(10vh - 10px);
    text-align: right;

    @media screen and (min-width: 768px){
        display: none;
    }
`;

export const NavbarIconContainer = styled.div`
    padding: 2px;
    border-radius: 10px;
    background: rgba(240,240,240,.2);
    transition: all 0.4s;
    cursor: pointer;
    color: rgba(34, 174, 255, 0.7);
    width: fit-content;
    height: fit-content;
    margin-left: auto;
    margin-right: 10px;
    font-size: 0.6em;
    margin-top: 0vh;

    transform: rotate(${(props) => 
        props.isrotated === "true" ? "180": "0"}deg);

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-height: 500px){
        font-size: 0.8em;
        margin-top: 1vh;
    }

    @media screen and (min-height: 600px){
        font-size: 1em;
        margin-top: 2vh;
    }
`;

export const NavbarMainSection = styled.section`
    padding-top: 5vh;

    @media screen and (min-width: 425px){
        padding-top: 15vh;
    }
    @media screen and (min-width: 768px){
        padding-top: 0px;
    }
`;

export const NavbarAligningSection = styled.div`
    @media screen and (min-width: 768px){
        height: fit-content;
        float: ${(props) => 
            props.float ? props.float : "left"};
    }
`;

export const NavbarElement = styled.div`
    height: calc(15vh - 20px);
    line-height: calc(15vh - 20px);
    min-height: fit-content;
    padding: 10px;
    width: calc(90% - 20px);
    display: block;
    margin: 0px auto 1vh;
    font-size: 1.2em;
    letter-spacing: 0.09em;
    font-family: "Mohave";
    text-shadow: 3px 3px 4px rgba(0,0,0,.1);
    border-radius: 10px;
    background: rgba(240,240,240,.2);
    transition: filter 0.4s;
    cursor: pointer;
    position: relative;
    top: 1vh;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-height: 668px){
        height: calc(10vh - 20px);
        line-height: calc(10vh - 20px);
    }

    @media screen and (min-width: 425px){
        width: calc(80% - 20px);
        font-size: 1.4em;
    }

    @media screen and (min-width: 768px){
        padding: 10px 30px;
        width: fit-content;
        display: inline-block;
        vertical-align: top;
        margin: 0px 5px;
    }
`;

export const NavbarImage = styled.img`
    height: 5vh;
    margin-top: 5vh;
    width: auto;

    @media screen and (min-width: 320px){
        height: 9vh;
        margin-top: 3vh;
    }

    @media screen and (min-width: 375px){
        height: inherit;
        margin-top: 0vh;
    }
`;