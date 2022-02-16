import React from "react";
import { Link } from "react-router-dom";

import { FooterWrapper, FooterColumnsWrapper, FooterColumn, 
    FooterColumnElem, FooterImage } from "../../styled/main.jsx";

import MainLogo from "../../assets/scriptshare_logo.png";

const Footer = () => {

    const FooterList = [
        [
            {
                to: "/",
                isImage: true,
                content: MainLogo
            }
        ],
        [
            {
                to: "/",
                isImage: false,
                content: "Główna"
            },
            {
                to: "/searcher",
                isImage: false,
                content: "Wyszukiwarka"
            },
            {
                to: "/login",
                isImage: false,
                content: "Panel logowania"
            }
        ],
        [
            {
                to: "https://www.vecteezy.com/free-vector/education",
                isImage: false,
                content: "Education Vectors by Vecteezy"
            }
        ]
    ]

    return <FooterWrapper className="block-center">
        <FooterColumnsWrapper className="block-center">
            {FooterList.map((elem, ind) => <FooterColumn key={"main-footer-column-"+ind}>
                {elem.map((button, btnInd) => 
                button["to"][0] === "/" ?
                <Link to = {button["to"]} key={"column-"+ind+"-button-"+btnInd}>
                    <FooterColumnElem className="block-center">
                        {button["isImage"] === false ? button["content"] : <FooterImage src={button["content"]}/>}
                    </FooterColumnElem>
                </Link> : <a href = {button["to"]} key={"column-"+ind+"-button-"+btnInd} target="_blank">
                    <FooterColumnElem className="block-center">
                        {button["content"]}
                    </FooterColumnElem></a>)}
            </FooterColumn>)}
        </FooterColumnsWrapper>
    </FooterWrapper>;
};

export default Footer;