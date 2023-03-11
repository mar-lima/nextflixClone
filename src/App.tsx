import { useEffect, useState } from "react";
import "./App.styled.ts";
import Tmdb from "./Api/Tmdb";
import * as S from "./App.styled";
import { list } from "./Types/List";
import MovieRow from "./components/MovieRow/MovieRow";

const App = () => {
  const [movieList, setmovieList] = useState<list[]>([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setmovieList(list);
      // console.log(list[0].items);
    };

    loadAll();
  }, []);
  return (
    <S.App>
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      header destaque as listas por generos
    </S.App>
  );
};

export default App;
