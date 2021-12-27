import React, {useState, useEffect} from "react";

import { WelcomeHeader, WelcomeHeaderPart, WelcomeDescription,
    WelcomeFooter } from "../../styled/welcome.jsx";

const Welcome = () => {

    const [isLoaded, toggleIsLoaded] = useState(false);

    const TitleSplitter = "ScriptShare - jeden portal, by rządzić wszystkimi notatkami".split(" ").map((elem, ind) => 
    <WelcomeHeaderPart key={"welcome-part-"+ind} delay={ind}>
        {elem}
    </WelcomeHeaderPart>);

    const Description = "Scriptshare to unikatowe miejsce, gdzie możesz się dzielić swoją wiedzą ze społecznością akademicką. W naszej bazie znajdziesz materiały do nauki publikowane zarówno przez studentów, jak i wykładowców - wystarczy się zalogować i nauka stoi otworem.";

    useEffect(() => {
        setTimeout(() => toggleIsLoaded(!isLoaded), 400);
    }, [])

    return <>
        <WelcomeHeader className="block-center">
            {TitleSplitter}
        </WelcomeHeader>
        <WelcomeDescription className="block-center" isshown = {isLoaded ? "true" : "false"}>
            {Description}
        </WelcomeDescription>
        <WelcomeFooter className="block-center">
            Demo made by Simon G. Kupisz
        </WelcomeFooter>
    </>
};

export default Welcome;