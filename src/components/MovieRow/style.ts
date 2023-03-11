import styled from "styled-components";

export const MovieRow = styled.div`
  margin-bottom: 30px;

  h2 {
    margin: 0 0 0 30px;
  }
`;

export const MovieListArea = styled.div`
  overflow-x: hidden;
  padding-left: 30px;
`;

export const MovieList = styled.div`
  width: 9999px;
`;

export const MovieItem = styled.div`
  display: inline-block;
  width: 150px;
  cursor: pointer;
  img {
    width: 100%;
    transform: scale(.9);
    transition: all ease-in-out .2s;
}

& img:hover {

      transform: scale(1);

  }
`;
