import React from "react";
import { Link } from "react-router-dom";

import { NavbarElement, NavbarImage } from "../../styled/navbar.jsx";

const NavbarLinksRendering = ({sectionData, keyPart, callback}) => {
    return <>{
        sectionData.map((elem, ind) => <Link to = {elem["to"]} key={keyPart+ind} onClick={() => callback()}>
            <NavbarElement>
                {elem["isImage"] === false ? elem["content"] : <NavbarImage src={elem["content"]}/>}
            </NavbarElement>
        </Link>)}
    </>
};

export default NavbarLinksRendering;