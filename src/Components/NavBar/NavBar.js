import React from "react";
import styled from "styled-components";

const NavBarWrapper = styled.div`
    background-color: white;
    height: 25%;
    margin: 0px  80px 0px 80px;
    dislay: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const SvgWrapper = styled.div`

`;

const ContentWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
`;

export default function NavBar() {
    return (
        <NavBarWrapper>
            <SvgWrapper>
                <h2>svg</h2>
            </SvgWrapper>
            <ContentWrapper>
                <div className="content-titles">
                    <h2 className="title">Book Reviews</h2>
                    <h3 className="subTitle">Discover more books</h3>
                </div>
                <div>
                    <form action="">
                        <input type="text" name="" id="" />
                        <button>search</button>
                    </form>
                </div>
            </ContentWrapper>
        </NavBarWrapper>
    );
}



























// const NavBarContentWrapper = styled.div`
//     height: 60%;
//     width: 65%;
//     display: grid;
//     grid-template-rows: 4fr 1fr;
// `;

// const Content = styled.div`
//     height: 100%;
//     width: 100%;
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     place-items: center;

//     .content-emoji{
//         width: 50%;
//         display: grid;
//         place-items: center;
//         border: 5px solid white;
//         border-radius: 50%;
//         border-shadow: 0px 13px 27px 10px black;

//         #emoji{
//             width: 100%;
//             height: 70%;
//         }
//     }

//     .content-text{
//         color: white;

//         .title{
//             font-size: 75px;;
//             text-shadow: 1px 1px 5px black;
//             text-align: right;
//         }
//         .subTitle{
//             font-size: 20px;;
//             text-shadow: 1px 1px 3px black;
//             text-align: right;
//         }
//     }
// `;

// const SearchBarWrapper = styled.div`
//     height: 100%;
//     width: 100%;
//     display: grid;
//     place-items: center;
//     color: black;
// `;

// export default function NavBar() {
//   return (
//     <NavBarWrapper>
//         <NavBarContentWrapper>
//             <Content>

//               <div className="content-emoji">

//               </div>
//               </Content>
//               <SearchBarWrapper>

//               </SearchBarWrapper>
//         </NavBarContentWrapper>
//     </NavBarWrapper>
//   );
// }

