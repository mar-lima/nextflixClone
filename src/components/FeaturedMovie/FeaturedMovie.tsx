import React, { useEffect, useState } from "react";
import { featureid } from "../../Types/featureid";
import * as S from "./style";

import Switch from "react-switch";

const FeaturedMovie = ({ item }: featureid) => {
  const firstDate = new Date(item?.first_air_date);
  let filtred = [];
  for (let i in item?.genres) {
    filtred.push(item?.genres[i].name);
  }

  // console.log(genres[0]);
  console.log(item?.id);
  // console.log(item?.genres);
  return (
    <S.Featured
      img={`url(https://image.tmdb.org/t/p/original${item?.backdrop_path})`}>
      <S.FeaturedVertical>
        <S.FeaturedHorizontal>
          <S.Name>{item?.original_name} </S.Name>
          <S.Info>
            <S.Points>{item?.vote_average} pontos </S.Points>
            <S.Year>{firstDate.getFullYear()} </S.Year>
            <S.Seassons>
              {item?.number_of_seasons} Temporada
              {item?.number_of_seasons != 1 ? "s" : ""}
            </S.Seassons>
          </S.Info>
          <S.Descriptions> {item?.overview} </S.Descriptions>
          <S.Buttons>
            <a id="btn-A" href={`/watch/${item?.id}`}>► Assitir</a>
            <a id="btn-B" href={`/list/add/${item?.id}`}> + Minha Lista</a>
          </S.Buttons>
          <S.Genres> {filtred.join(", ")} </S.Genres>
        </S.FeaturedHorizontal>
      </S.FeaturedVertical>
    </S.Featured>
  );
};

export default FeaturedMovie;
