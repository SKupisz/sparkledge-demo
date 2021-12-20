import styled from "styled-components";

export const LoginContainer = styled.section`
    width: calc(95% - 20px);
    height: calc(65vh - 20px);
    min-height: 300px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 4px rgba(0,0,0,.3);
    text-align: center;
    background: rgba(230,230,230,.8);
    position: relative;
    top: 4vh;
    margin-bottom: 4vh;

    @media screen and (min-width: 375px){
        width: calc(80% - 20px);
    }

    @media screen and (min-width: 580px){
        width: calc(60% - 20px);
    }

    @media screen and (min-width: 768px){
        width: calc(50% - 20px);
    }

    @media screen and (min-width: 1024px){
        width: calc(40% - 20px);
    }
`;

export const LoginInputsSection = styled.div`
    width: 100%;
    height: calc(80% - 10vh);
    padding-top: 10vh;
`;

export const LoginInput = styled.input`
    width: calc(95% - 10px);
    padding: 10px 5px;
    border-radius: 10px;
    border: none;
    box-shadow: 3px 3px 4px rgba(0,0,0,.1);
    color: rgba(34, 174, 255, 0.9);
    text-indent: 0.7em;
    font-size: 1.2em;
    letter-spacing: 0.07em;
    font-family: "Mohave", sans-serif;
    margin-bottom: 2.5vh;
    background: rgba(250,250,250,.8);
    transition: all 0.4s;
    cursor: pointer;

    &:hover{
        filter: brightness(70%);
    }

    &:focus{
        outline: none;
        box-shadow: 3px 3px 4px rgba(0,0,0,.2);
    }
    
    @media screen and (min-width: 375px){
        width: calc(90% - 10px);
    }

    @media screen and (min-width: 425px){
        width: calc(80% - 10px);
        font-size: 1.4em;
        text-indent: 1em;
    }
`;

export const LoginSubmitBtn = styled.button`
    width: calc(90% - 20px);
    padding: 10px;
    border-radius: 10px;
    border: none;
    box-shadow: 3px 3px 4px rgba(0,0,0,.2);
    color: rgba(34, 174, 255, 0.9);
    background: rgba(230,230,230,.2);
    position: relative;
    top: 2vh;
    font-size: 1.1em;
    letter-spacing: 0.07em;
    text-shadow: 3px 3px 4px rgba(0,0,0,.1);
    cursor: pointer;
    transition: all 0.4s;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 320px){
        font-size: 1.4em;
    }

    @media screen and (min-width: 425px){
        width: calc(70% - 20px);
    }

    @media screen and (min-width: 768px){
        width: calc(50% - 20px);
    }
`;