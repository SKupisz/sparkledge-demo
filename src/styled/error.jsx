import styled from "styled-components";

export const ErrorHeader = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.3em;
    letter-spacing: 0.08em;
    color: rgba(240,240,240,.8);
    text-shadow: 3px 3px 4px #000;
    margin-bottom: 7vh;
    position: relative;
    top: 3vh;

    @media screen and (min-width: 320px){
        font-size: 1.6em;
    }

    @media screen and (min-width: 425px){
        width: calc(90% - 20px);
        font-size: 2.3em;
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
        font-size: 2.9em;
    }
`;

export const ErrorContentWrapper = styled.section`
    width: calc(100% - 20px);
    height: calc(40vh - 20px);
    padding: 10px;
    text-align: center;

    @media screen and (min-width: 425px){
        width: calc(90% - 20px);
    }

    @media screen and (min-width: 768px){
        width: calc(70% - 20px);
    }
`;

export const ErrorContent = styled.div`
    width: 95%;
    text-align: center;
    font-size: 1em;
    letter-spacing: 0.06em;
    color: rgba(240,240,240,.8);
    text-shadow: 3px 3px 4px #000;
    line-height: 1.3em;
    display: inline-block;
    vertical-align: top;
    position: relative;
    top: -100%;

    @media screen and (min-width: 425px){
        font-size: 1.3em;
        line-height: 1.1em;
    }

    @media screen and (min-width: 768px){
        font-size: 1.6em;
    }
`;

export const ErrorContentCover = styled.div`
    width: ${(props) => 
        props.width ? props.width : "100%"};
    margin-left: ${(props) => 
        props.margin ? props.margin : "0%"};
    height: 100%;
    background: #222;
    border-radius: 10px;
    transition: all 0.6s;
    position: relative;
    display: inline-block;
    vertical-align: top;
    z-index: 4;
`;