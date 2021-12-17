import React, {useState} from "react";
import {Link} from "react-router-dom";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

import { NavbarContainer, NavbarResponsiveSection, NavbarIconContainer,
    NavbarAligningSection, NavbarElement, NavbarMainSection } from "../styled/navbar.jsx";

import NavbarLinksRendering from "./support/NavbarLinksRendering.jsx";

const Navbar = () => {

    const [isOpened, toggleIsOpened] = useState(false);

    const LinksList = {
        leftAlign: [
            {
                to: "/",
                content: "ScriptShare"
            },
            {
                to: "/searcher",
                content: "Wyszukiwarka"
            },
            {
                to: "/material",
                content: "Materiał"
            }
        ],
        rightAlign: [
            {
                to: "/login",
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