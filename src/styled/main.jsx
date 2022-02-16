import styled from "styled-components";
import {animated as a} from "react-spring";

export const MainContainer = styled.main`
    width: 100%;
    height: fit-content;
    padding: 5px 0px;
    text-align: center;
    position: relative;
    top: 12vh;
    font-family: "Mohave", sans-serif;
    overflow: hidden;
`;

export const FooterWrapper = styled.footer`
    width: calc(100% - 20px);
    min-height: calc(40vh - 40px);
    height: fit-content;
    padding: 20px 10px;
    text-align: center;
    box-shadow: 0px -4px 4px rgba(20,20,20,.2);
`;

export const FooterColumnsWrapper = styled.section`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;

    a{
        text-decoration: none;
        color: inherit;
    }

    @media screen and (min-width: 1024px){
        width: calc(90% - 10px);
    }
`;

export const FooterColumn = styled.div`
    width: calc(80% - 30px);
    padding: 10px;
    margin: 5px;
    display: inline-block;
    vertical-align: top;

    @media screen and (min-width: 375px){
        width: calc(50% - 30px);
    }

    @media screen and (min-width: 768px){
        width: calc(20% - 30px);
        margin: 0px 5px;
    }
`;

export const FooterColumnElem = styled.div`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    margin-bottom: 10px;
    transition: all 0.4s;
    font-size: 0.9em;
    letter-spacing: 0.07em;
    color: rgba(34,174,255,0.9);
    text-shadow: 3px 3px 4px rgba(0,0,0,.07);

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 768px){
        font-size: 1.1em;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.2em;
    }

    @media screen and (min-width: 1440px){
        width: calc(90% - 10px);
        font-size: 1.4em;
    }
`;

export const FooterImage = styled.img`
    width: inherit;
    height: auto;
`;