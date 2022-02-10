import React from "react";
import { Link } from "react-router-dom";

import { FooterWrapper, FooterColumnsWrapper, FooterColumn, FooterColumnElem } from "../../styled/main.jsx";

const Footer = () => {

    const FooterList = [
        [
            {
                to: "/",
                content: "ScriptShare"
            }
        ],
        [
            {
                to: "/",
                content: "Główna"
            },
            {
                to: "/searcher",
                content: "Wyszukiwarka"
            },
            {
                to: "/login",
                content: "Panel logowania"
            }
        ],
        [
            {
                to: "https://www.vecteezy.com/free-vector/education",
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
                        {button["content"]}
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