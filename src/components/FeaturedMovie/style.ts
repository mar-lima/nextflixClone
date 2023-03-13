import styled from "styled-components";
type Image = {
  backImage?: boolean;
  img?: string;
};
export const Featured = styled.section<Image>`
  height: 100vh;
  background-image: ${(props) => props.img};
  background-size: cover;
  background-position: center;
`;

export const FeaturedVertical = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
`;
export const FeaturedHorizontal = styled.div`
  padding: 70px 0px 150px 30px ;
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 30%, transparent 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.div`
  font-size: 60px;
  font-weight: bold;
`;
export const Info = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;

  div {
    display: inline-block;
    margin-right: 15px;
  }
`;
export const Points = styled.div`
  color: #46d369;
`;
export const Year = styled.div``;
export const Seassons = styled.div``;

export const Descriptions = styled.div`
  margin-top: 15px;
  font-size: 29px;
  color: #999;
  max-width: 40%;
`;
export const Buttons = styled.div`
  margin-top: 15px;

  a {
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 11px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    transition: all ease .2s;
    /* width: 100%; */
    /* max-width: 170px; */
  }
  a:hover{
    opacity: .7;
  }
  #btn-A {
    background-color: #FFF;
    color: #202020;
    padding-right: 62px;
  }
  #btn-B {
    background-color: #333;
    color: #FFF;
  }
`;
export const Genres = styled.div`
  margin-top: 15px;
  font-size: 18px;
  color: #999;

`;
