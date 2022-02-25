import React, {useState, useEffect} from "react";

import { WelcomeWrapper, WelcomeWrapperFilter, WelcomeHeader, WelcomeHeaderPart, WelcomeDescription,
    WelcomeFooter } from "../../styled/welcome.jsx";

import Footer from "../support/footer.jsx";

import Background from "../../assets/academic_background_2.jpg";

const Welcome = ({mode=1}) => { // 1 - used as a welcome page, 2 - used as a part of default searcher view

    const [isLoaded, toggleIsLoaded] = useState(false);

    const TitleSplitter = "Sparkledge - jeden portal, by rządzić wszystkimi notatkami".split(" ").map((elem, ind) => 
    <WelcomeHeaderPart key={"welcome-part-"+ind} delay={ind}>
        {elem}
    </WelcomeHeaderPart>);

    const Description = "Sparkledge to unikatowe miejsce, gdzie możesz się dzielić swoją wiedzą ze społecznością akademicką. W naszej bazie znajdziesz materiały do nauki publikowane zarówno przez studentów, jak i wykładowców - wystarczy się zalogować i nauka stoi otworem.";

    useEffect(() => {
        setTimeout(() => toggleIsLoaded(!isLoaded), 400);
    }, [])

    return <>
        <WelcomeWrapper className="block-center" background={Background}
            isinframe={mode === 1 ? false : true}>
            <WelcomeWrapperFilter>
                <WelcomeHeader className="block-center">
                    {TitleSplitter}
                </WelcomeHeader>
                <WelcomeDescription className="block-center" isshown = {isLoaded ? "true" : "false"}>
                    {Description}
                </WelcomeDescription>
            </WelcomeWrapperFilter>
        </WelcomeWrapper>
        {mode === 1 ? <Footer/> : <></>}
    </>
};

export default Welcome;