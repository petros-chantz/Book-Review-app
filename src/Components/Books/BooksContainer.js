import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import '../../App.css';

const BooksContainerWrapper = styled(animated.div)`
    background-color: white;
    height: 70%;
    width: 90%;
    border-radius: 20px;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, .4);
    display: grid;
    place-items: center;
`;

export default function BooksContainer() {
    const props = useSpring({
        opacity: 1,
        transition: 'opacity 0.35s cubic-bezier(0.61, 1, 0.88, 1)',
        from: { opacity: 0 }
    })
  return (
    <BooksContainerWrapper style={props}>
          <h2>hello</h2>
    </BooksContainerWrapper>
  );
}
