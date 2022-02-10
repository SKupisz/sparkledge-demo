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
        ]
    ]

    return <FooterWrapper className="block-center">
        <FooterColumnsWrapper className="block-center">
            {FooterList.map((elem, ind) => <FooterColumn key={"main-footer-column-"+ind}>
                {elem.map((button, btnInd) => 
                <Link to = {button["to"]} key={"column-"+ind+"-button-"+btnInd}>
                    <FooterColumnElem className="block-center">
                        {button["content"]}
                    </FooterColumnElem>
                </Link>)}
            </FooterColumn>)}
        </FooterColumnsWrapper>
    </FooterWrapper>;
};

export default Footer;