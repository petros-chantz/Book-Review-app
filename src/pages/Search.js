import React from "react";
import styled from "styled-components";
import Keyword from "../Components/Keyword";
import Title from "./../Components/Title";

const SearchWrapper = styled.div`
    margin: 100px;
    display: grid;
    grid-template-rows: 150px 80px 250px 1fr;
    grid-gap: 20px;
`;

const KeywordsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;
    place-items: center;
    margin: 20px 100px 0px 100px;
`;

export default function Search() {
    return (
        <SearchWrapper id="search">
            <Title pageTitle="Search" />
            <KeywordsWrapper>
                <Keyword  keyword="Books"/>
                <Keyword  keyword="Authors"/>
                <Keyword  keyword="ISBN"/>
                <Keyword keyword="Date"/>
            </KeywordsWrapper>
            <div>
                <input type="text" name="text" id=""/>
            </div>
            
        </SearchWrapper>
    );
}