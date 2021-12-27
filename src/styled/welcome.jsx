import styled from "styled-components";
import {animated as a} from "react-spring";

export const WelcomeHeader = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1em;
    letter-spacing: 0.06em;
    color: rgba(34, 174, 255, 0.95);
    text-shadow: 3px 3px 4px rgba(0,0,0,.1);
    position: relative;
    top: 5vh;
    margin-bottom: 9vh;

    @media screen and (min-width: 375px){
        font-size: 1.4em;
    }

    @media screen and (min-width: 425px){
        font-size: 1.7em;
    }

    @media screen and (min-width: 768px){
        width: calc(90% - 20px);
        font-size: 2.3em;
    }
`;

export const WelcomeHeaderPart = styled(a.span)`
    display: inline-block;
    vertical-align: top;
    margin: 0px 5px;
    position: relative;
    top: -2vh;
    opacity: 0;
    transition: all 0.4s;
    animation-name: WelcomePageHeader;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-delay: ${(props) => 
        props.delay ? props.delay*0.05 : "0"}s;
`;

export const WelcomeDescription = styled(a.section)`
    width: calc(100% - 20px);
    padding: 10px;
    color: rgba(34, 174, 255, 0.9);
    text-shadow: 3px 3px 4px rgba(0,0,0,.1);
    font-size: 0.9em;
    letter-spacing: 0.06em;
    line-height: 1.3em;
    position: relative;
    transition: all 0.4s;
    left: ${(props) => 
        props.isshown === "true" ? "0%" : "100%"};
    margin-bottom: 18vh;

    @media screen and (min-width: 425px){
        width: calc(90% - 20px);
        font-size: 1em;
        line-height: 1.5em;
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
        font-size: 1.2em;
        margin-bottom: 24vh;
    }

    @media screen and (min-width: 1024px){
        width: calc(60% - 20px);
        line-height: 1.7em;
        font-size: 1.4em;
    }
`;

export const WelcomeFooter = styled.footer`
    width: calc(100% - 20px);
    padding: 4vh 10px 10px;
    border-top: 1px solid #ccc;
    font-size: 0.85em;
    letter-spacing: 0.05em;
    text-align: center;
    color: rgba(34, 174, 255, 0.9);
    text-shadow: 3px 3px 4px rgba(0,0,0,.1);

    @media screen and (min-width: 425px){
        font-size: 0.95em;
    }

    @media screen and (min-width: 768px){
        width: calc(90% - 20px);
        font-size: 1.1em;
    }
`;