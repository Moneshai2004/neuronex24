import React from "react";

import { Wrapper } from "./modely.style";

import Section from "../Section";
import Interior from "../Interior_Specs";
import Specs from "../Gen_Spec";
import Header from "../Header";
import Footer from "../Footer";

const UIUX = () =>{

    document.title = "UI | UX";
    return(
        <Wrapper>
            <Header/>
            <Section 
                title="UI | UX" 
                backgroundImg="model_y_1.jpeg"
                range='330'
                speed='3.5'
                top='155'
            />
        </Wrapper>
    )
}

export default UIUX;