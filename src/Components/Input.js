import React from "react";
import styled from "styled-components";
import { breakpoints } from "./../styles/Media";
import { Container } from "./Container";

const SearchBar = styled.input`
  border-radius: 25px;
  border: 4px solid ${(props) => props.theme.color.green};
  padding: 10px 150px 10px 150px;
`;

const SearchButton = styled.input`
  background-color: ${(props) => props.theme.color.green};
  color: ${(props) => props.theme.color.white};
  padding: 10px 50px 10px 50px;
  cursor: pointer;
  border-radius: 25px;
  border: 2px solid ${(props) => props.theme.color.green};
  font-size: 1rem;
  font-weight: 400;
`;

export default function Input(props) {
  return (
    <form>
      <Container columns="1fr 1fr ">
        <Container place="center">
          <SearchBar
            type="text"
            // value={text}
            name="text"
            // onChange={(e) => setNumber(e.target.value)}
            placeholder="Search a book/author"
          />
        </Container>
        <Container place="center">
          <SearchButton type="submit" />
        </Container>
      </Container>
    </form>
  );
}
