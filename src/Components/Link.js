import styled from "styled-components";
import { breakpoints } from "./../styles/Media";

export const Link = styled.a`
  color: ${(props) => props.theme.color.black};
  font-weight: ${(props) => props.weight};
  cursor: pointer;
  text-decoration: none;

  @media screen and (max-width: ${breakpoints.screen4k}) {
    font-size: 1rem; //16px
  }

  :hover {
    text-decoration: underline;
  }
`;

export const LinkFooter = styled(Link)`
  color: ${(props) => props.theme.color.black};
  text-decoration: underline;
  @media screen and (max-width: ${breakpoints.screen4k}) {
    font-size: 1.25rem; //20px
  }

  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    font-size: 1rem; //16px
  }
`;
