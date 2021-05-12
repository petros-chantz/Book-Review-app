import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: ${(props) => props.theme.color.background};
  padding: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;

  :hover {
    text-decoration: underline;
  }
`;

export const ButtonCustomize = styled.button`
  background-color: ${(props) => props.theme.color.background};
  padding: 10px;
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.color.text};
  border-radius: 5px;

  :hover {
    background-color: ${(props) => props.theme.color.text};
    color: ${(props) => props.theme.color.background};
  }
`;
