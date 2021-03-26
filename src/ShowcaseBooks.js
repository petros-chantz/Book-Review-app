import styled from 'styled-components';
import './App.css';

const ShowcaseBooksWrapper = styled.div`
    background-color: white;
    height: 70%;
    width: 90%;
    border-radius: 20px;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, .4);
    display: grid;
    place-items: center;
`;

export default function ShowcaseBooks() {
  return (
    <ShowcaseBooksWrapper>
          <h2>hello</h2>
    </ShowcaseBooksWrapper>
  );
}
