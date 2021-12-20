import React from "react";

import { ShowingDocumentHeader } from "../../styled/showingDocument.jsx";
import { LoginContainer, LoginInputsSection, LoginInput,
    LoginSubmitBtn } from "../../styled/login.jsx";

const LoginPanel = () => {
    return <>
        <ShowingDocumentHeader className="block-center">
            Logowanie
        </ShowingDocumentHeader>
        <LoginContainer className="block-center">
            <LoginInputsSection className="block-center">
                <LoginInput type="text" placeholder="Login..." className="block-center" required/>
                <LoginInput type="password" placeholder="Hasło..." className="block-center" required/>
            </LoginInputsSection>
            <LoginSubmitBtn className="block-center" type="button">
                Zaloguj się
            </LoginSubmitBtn>
        </LoginContainer>
    </>;
};

export default LoginPanel;