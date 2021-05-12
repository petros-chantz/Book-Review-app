import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) =>
    props.pressed ? props.theme.color.green : props.theme.color.white};
  color: ${(props) =>
    props.pressed ? props.theme.color.white : props.theme.color.black};
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.color.green};
  font-size: 1rem;
  font-weight: 400;

  :hover {
    background-color: ${(props) => props.theme.color.green};
    color: ${(props) => props.theme.color.white};
  }
`;

export const ItemButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.color.green};
  cursor: pointer;
`;
