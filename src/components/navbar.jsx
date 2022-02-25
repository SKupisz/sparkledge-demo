import React, {useState} from "react";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';


import { NavbarContainer, NavbarResponsiveSection, NavbarIconContainer,
    NavbarAligningSection, NavbarMainSection } from "../styled/navbar.jsx";

import NavbarLinksRendering from "./support/NavbarLinksRendering.jsx";

import MainLogo from "../assets/sparkledge_logo.png";

const Navbar = () => {

    const [isOpened, toggleIsOpened] = useState(false);

    const LinksList = {
        leftAlign: [
            {
                to: "/",
                isImage: true,
                content: MainLogo
            },
            {
                to: "/searcher",
                isImage: false,
                content: "Wyszukiwarka"
            },
            {
                to: "/material",
                isImage: false,
                content: "Materiał"
            }
        ],
        rightAlign: [
            {
                to: "/login",
                isImage: false,
                content: "Zaloguj"
            }
        ]
    }

    return <NavbarContainer className="block-center" opened={String(isOpened)}>
        <NavbarResponsiveSection className="block-center">
            <NavbarIconContainer isrotated={String(isOpened)} onClick = {() => toggleIsOpened(!isOpened)}>
                <ArrowCircleDownIcon style={{fontSize: "2.8em"}}/>
            </NavbarIconContainer>
        </NavbarResponsiveSection>
        <NavbarMainSection className="block-center">
            <NavbarAligningSection float="left">
                <NavbarLinksRendering keyPart="left-link-" sectionData={LinksList["leftAlign"]} callback = {() => toggleIsOpened(!isOpened)}/>
            </NavbarAligningSection>
            <NavbarAligningSection float="right">
                <NavbarLinksRendering keyPart="right-link-" sectionData={LinksList["rightAlign"]} callback = {() => toggleIsOpened(!isOpened)}/>
            </NavbarAligningSection>
        </NavbarMainSection>
    </NavbarContainer>
};

export default Navbar;