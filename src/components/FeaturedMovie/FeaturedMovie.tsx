import React, { useEffect, useState } from "react";
import { featureid } from "../../Types/featureid";
import * as S from "./style";
const FeaturedMovie = ({ item }: featureid) => {
  // const [backGround, setBackGround] = useState(true)
  console.log(item);
  return (
    <S.Featured
      img={`url(https://image.tmdb.org/t/p/original${item?.backdrop_path})`}>
      <S.FeaturedVertical>
        <S.FeaturedHorizontal>
          <S.Name>{item?.original_name} </S.Name>
          <S.Info>
            <S.Points>{item?.vote_average} pontos </S.Points>
            <S.Year>{item?.vote_average} 2999 </S.Year>
            <S.Seassons>
              {item?.number_of_seasons} Temporada
              {item?.number_of_seasons != 1 ? "s" : ""}
            </S.Seassons>
          </S.Info>
          <S.Descriptions>
            {item?.overview}
          </S.Descriptions>
        </S.FeaturedHorizontal>
      </S.FeaturedVertical>
    </S.Featured>
  );
};

export default FeaturedMovie;
