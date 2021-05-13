import React from "react";
import { Container } from "../../Components/Container";
import { breakpoints } from "./../../styles/Media";
import styled from "styled-components";
import BookItem from "./../../Components/BookItem";

const List = styled(Container)`
  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }

  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    padding: 25px;
  }
`;

export default function SpotlightList(props) {
  const number = Math.floor(Math.random() * (15 - 1 + 1) + 1);
  const number1 = Math.floor(Math.random() * (15 - 1 + 1) + 1);
  const number2 = Math.floor(Math.random() * (15 - 1 + 1) + 1);

  const { books } = props;
  return (
    <List columns="repeat(3,1fr)" place="center" gap="50px" padding="50px">
      <BookItem books={books} height="100%" width="95%" number={number} />
      <BookItem books={books} height="100%" width="95%" number={number1} />
      <BookItem books={books} height="100%" width="95%" number={number2} />
    </List>
  );
}
