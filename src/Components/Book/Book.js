import React from "react";
import styled from "styled-components";
import FooterSection from "./FooterSection";
import HeaderSection from "./HeaderSection";
import MainSection from "./MainSection";

const BookWrapper = styled.div`
    display: grid;
    grid-template-rows: 50px 1fr 50px;
    background-color: #6e954b;
    border-radius: 20px;
    padding: 10px 20px 10px 20px;
`;  


export default function Book() {
    return (
        <BookWrapper>
            <HeaderSection />
            <MainSection />
            <FooterSection/>
        </BookWrapper>
    );
}