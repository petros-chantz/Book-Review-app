import React from "react";
import styled from "styled-components";
import Book from "../Components/Book/Book";
import Title from "./../Components/Title";

const FavouritesWrapper = styled.div`
    margin: 100px;
    display: grid;
    grid-template-rows: 150px  1fr;
    grid-gap: 20px;
`;

export default function Favourites() {
    return (
        <FavouritesWrapper>
            <Title pageTitle="Favourites" />
            <Book/>
        </FavouritesWrapper>
    );
}