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
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 30%, transparent 70%);
`;

export const Name = styled.div``
export const Info = styled.div``
export const Points = styled.div``
export const Year = styled.div``
export const Seassons = styled.div``
export const Descriptions = styled.div``