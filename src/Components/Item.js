import styled from "styled-components";
import React from "react";
import { TextRegular, TextSmall } from "./Text";
import { Link } from "./Link";
import { Container } from "./Container";

const ItemContainer = styled.a`
  display: grid;
  grid-template-rows: 1fr 1fr 7fr 1fr;
  gap: 10px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 13px 27px -5px hsl(240deg 30% 28% / 25%),
    0 8px 16px -8px hsl(0deg 0% 0% / 30%), 0 -6px 16px -6px hsl(0deg 0% 0% / 3%);
  grid-gap: 5px;
  width: 80%;
  height: 100%;
  background-color: white;
  transition-duration: 0.3s;
  cursor: pointer;

  :hover {
    transform: scale(1.03);

    ${Link} {
      text-decoration: underline !important;
    }
  }
`;

export default function NewsItem(props) {
  const { news } = props;
  console.log(news);
  return (
    <ItemContainer>
      <Container place="center start">
        <TextSmall>{news.section}</TextSmall>
      </Container>
      <Container place="center end">
        <TextSmall>{news.results[props.itemId].byline}</TextSmall>
      </Container>
      <Container place="center start">
        <TextRegular weight="600" align="left">
          {news.results[props.itemId].title}
        </TextRegular>
      </Container>
      <Container place="center end">
        <Link
          href={news.results[props.itemId].url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </Link>
      </Container>
    </ItemContainer>
  );
}
