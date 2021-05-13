import React from "react";
import { Container } from "./../../Components/Container";
import styled from "styled-components";
import { breakpoints } from "./../../styles/Media";
import { TitlePages } from "../../Components/Text";
import Input from "../../Components/Input";
import PageTitle from "../../Components/PageTitle";

const SearchContainer = styled(Container)`
  background-color: ${(props) => props.theme.color.white};
  height: 100vh;
  padding: 50px 0px 50px 0px;
`;

export default function Search(props) {
  return (
    <SearchContainer id="search" rows="1fr 50px 1fr 2fr">
      <PageTitle
        pageTitle="Search"
        pageSubtitle="Search for a book/author or an ISBN."
      />
      <Container></Container>
    </SearchContainer>
  );
}
