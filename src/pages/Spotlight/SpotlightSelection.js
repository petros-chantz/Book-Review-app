import React from "react";
import { Container } from "../../Components/Container";
import styled from "styled-components";
import { breakpoints } from "./../../styles/Media";

const SelectContainer = styled(Container)`
  padding: 50px;

  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    place-items: center;
  }
`;

const Select = styled.select`
  padding: 10px 50px 10px 50px;
  border: none;
  border-bottom: 3px solid ${(props) => props.theme.color.green};
  outline: none;
  cursor: pointer;

  option {
    background-color: ${(props) => props.theme.color.green};
    color: ${(props) => props.theme.color.white};
    cursor: pointer;

    hover {
      background-color: ${(props) => props.theme.color.white};
      color: ${(props) => props.theme.color.black};
    }
  }
`;

export default function SpotlightSelection(props) {
  return (
    <SelectContainer place="center end">
      <Select onChange={props.HandleTopicChange} value={props.value}>
        <option value="hardcover-fiction">Hardcover Fiction</option>
        <option value="hardcover-nonfiction">Hardcover Nonefiction</option>
        <option value="paperback-books">Paperback Books</option>
        <option value="culture">Culture</option>
        <option value="health">Health</option>
        <option value="race-and-civil-rights">Race and Civil Rights</option>
        <option value="sports">Sports</option>
        <option value="childrens-middle-grade">Childrens Middle Grade</option>
      </Select>
    </SelectContainer>
  );
}
