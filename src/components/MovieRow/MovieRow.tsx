import React, { useEffect, useState } from "react";
import { list } from "../../Types/List";
import { resultfetch } from "../../Types/ResultFetch";
import * as S from './style'


const MovieRow = ({ title, items }: list) => {
  const [resultList, setResultList] = useState<resultfetch[]>([]);
  useEffect(() => {
    const results = async () => {
      var list = await items?.results;
      setResultList(list);
      console.log(list)
      return resultList;
    };

    results();
  }, []);

  // <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt="" />;

  return (
    <>
      <h2> {title} </h2>
      <S.MovieList>
        {resultList.length > 0 &&
          resultList.map((item, key) => (
            <div key={key}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                alt={item.original_title}
              />
            </div>
          ))}
      </S.MovieList>
    </>
  );
};

export default MovieRow;
