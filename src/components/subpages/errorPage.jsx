import React, {useState, useEffect} from "react";

import { ErrorHeader, ErrorContentWrapper, ErrorContent, ErrorContentCover } from "../../styled/error.jsx";

const ErrorPage = () => {

    const [isShowed, toggleIsShowed] = useState(false);

    useEffect(() => {
        setTimeout(() => toggleIsShowed(!isShowed), 500);
    }, []);

    return <>
        <ErrorHeader className="block-center">
            Coś poszło nie tak
        </ErrorHeader>
        <ErrorContentWrapper className="block-center">
            <ErrorContentCover width = {isShowed ? "0%" : "100%"} margin = {isShowed ? "100%" : "0%"}/>
            <ErrorContent>Wygląda na to, że strona, której szukasz, nie istnieje lub została przeniesiona pod inny adres.</ErrorContent>
        </ErrorContentWrapper>
    </>
};

export default ErrorPage;