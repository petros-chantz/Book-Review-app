import styled from "styled-components";
import { useSpring, animated } from 'react-spring';

const MainBodyTitleWrapper = styled.div`
    display: grid;
    place-items: center start;
`;

const BodyTitleBoxwrapper = styled(animated.div)`
    height: 35%;
    width: 70%;
    margin-left: 50px;
    display:grid;
    grid-template-rows: 1fr 2fr 1fr;
    place-items: center start;
    margin-top: 100px;

    .Box-name{
        .name{
            font-size: 20px;
            color: white;
        }
        .name-link{
            color: white;
            text-style: none;
        }
    }

    .Box-title{
        .title{
            font-size: 60px;
            color: black;
            text-align: left;
        }
    }

    .Box-input{
        padding-top: 40px;
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-gap: 20px;

        .input{
            padding: 10px 140px 10px 140px;
            background-image: url('/1F50E.svg');
            background-position: 10px;
            background-size: 25px;
            background-repeat: no-repeat;
            padding-left: 40px;
            border-radius: 30px;
            border: none;
            width: 100%;
            box-shadow: 0 13px 27px -5px hsl(240deg 30% 28% / 25%), 0 8px 16px -8px hsl(0deg 0% 0% / 30%), 0 -6px 16px -6px hsl(0deg 0% 0% / 3%);
            font-size: 15px;
            outline: none;
        }

        .input-btn{
           border-radius: 30px;
           border: none;
           backgounrd-color: white;
           color: black;
           font-weight: 700;
            box-shadow: 0 13px 27px -5px hsl(240deg 30% 28% / 25%), 0 8px 16px -8px hsl(0deg 0% 0% / 30%), 0 -6px 16px -6px hsl(0deg 0% 0% / 3%);
            outline: none;
        }
    }
`;

export default function Body(props) {
    const animation = useSpring({
        opacity: 1,
        transition: 'opacity 0.35s cubic-bezier(0.61, 1, 0.88, 1)',
        from: { opacity: 0 }
    })
  return (
      <MainBodyTitleWrapper >
        <BodyTitleBoxwrapper style={animation}>
          <div className="Box-name">
              <h4 className="name">Created by <a href="http://petros-chantzopoulos.com" target="_blank" rel="noopener noreferrer" className="name-link">Petros</a></h4>
          </div>
          <div className="Box-title">
              <h2 className="title">Discover diffrent books and genres from book reviews.</h2>
          </div>
          <div className="Box-input">
              <form action="" >
                  <input type="text" name="" id="" className="input" onChange={props.onItemChange} />
              </form>
              <button className="input-btn">search</button>
          </div>
        </BodyTitleBoxwrapper>
    </MainBodyTitleWrapper>
  );
}
