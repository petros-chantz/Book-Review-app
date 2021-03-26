import styled from "styled-components";

const MainBodyTitleWrapper = styled.div`
    display: grid;
    place-items: center start;
`;

const BodyTitleBoxwrapper = styled.div`
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
            background-repeat: no-repeat;
            padding-left: 40px;
            border-radius: 30px;
            border: none;
            width: 100%;

             input:focus{
                border: none;
            }
        }

        .input-btn{
           border-radius: 30px;
           border: none;
           backgounrd-color: white;
           color: black;
           font-weight: 700;

           :focus{
               border: none;
           }
        }
    }
`;

export default function BodyTitleBox() {
  return (
      <MainBodyTitleWrapper>
                <BodyTitleBoxwrapper>
          <div className="Box-name">
              <h4 className="name">Created by Petros</h4>
          </div>
          <div className="Box-title">
              <h2 className="title">Discover diffrent books and genres from book reviews.</h2>
          </div>
          <div className="Box-input">
              <form action="" >
                  <input type="text" name="" id="" className="input" />
              </form>
              <button className="input-btn">search</button>
          </div>
    </BodyTitleBoxwrapper>
    </MainBodyTitleWrapper>
  );
}
