import styled from "styled-components";
import { breakpoints } from "./../styles/Media";

export const Text = styled.p`
  color: ${(props) => props.theme.color.text};
  font-weight: ${(props) => props.weight};
  text-align: ${(props) => props.align};
`;

export const TextRegular = styled(Text)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    font-size: 2.625em; //42px
  }

  @media screen and (max-width: ${breakpoints.laptopLScreen}) {
    font-size: 2.25rem; //36px
  }

  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    font-size: 1.75rem; //28px
  }
`;

export const TextSmall = styled(Text)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    font-size: 1.25rem; //20px
  }

  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    font-size: 1rem; //16px
  }
`;

export const TextNavbar = styled.p`
  color: ${(props) => props.theme.color.white};
  font-weight: 400;
  @media screen and (max-width: ${breakpoints.screen4k}) {
    font-size: 2.625em; //42px
  }

  @media screen and (max-width: ${breakpoints.laptopLScreen}) {
    font-size: 2.25rem; //36px
  }

  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    font-size: 1.75rem; //28px
  }

  :hover {
    text-decoration: underline;
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.color.black};
  font-weight: 700;
  text-align: left;

  @media screen and (max-width: ${breakpoints.screen4k}) {
    font-size: 8.125rem;
  }
  @media screen and (max-width: ${breakpoints.laptopLScreen}) {
    font-size: 6rem;
  }
  @media screen and (max-width: ${breakpoints.tabletScreen}) {
    font-size: 4.6875rem;
  }
  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    font-size: 3.125rem;
  }
`;

export const TitlePages = styled.h4`
  color: ${(props) => props.theme.color.black};
  font-weight: 700;
  text-align: left;

  @media screen and (max-width: ${breakpoints.screen4k}) {
    font-size: 8.125rem;
  }
  @media screen and (max-width: ${breakpoints.laptopLScreen}) {
    font-size: 6rem;
  }
  @media screen and (max-width: ${breakpoints.tabletScreen}) {
    font-size: 4.6875rem;
  }
  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    font-size: 3.125rem;
  }
`;

export const Subtitle = styled.h5`
  color: ${(props) => props.theme.color.black};
  font-weight: 500;
  text-align: left;
  @media screen and (max-width: ${breakpoints.screen4k}) {
    font-size: 3.75rem;
  }

  @media screen and (max-width: ${breakpoints.tabletScreen}) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    font-size: 1.875rem;
  }
`;
