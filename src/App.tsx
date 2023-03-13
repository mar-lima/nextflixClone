import { useEffect, useState } from "react";
import "./App.styled.ts";
import Tmdb from "./Api/Tmdb";
import * as S from "./App.styled";
import { list } from "./Types/List";
import MovieRow from "./components/MovieRow/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie/FeaturedMovie";
import { ThemeProvider } from "styled-components";
import light from "./styles/theme";

const App = () => {
  const [movieList, setmovieList] = useState<list[]>([]);
  const [featureData, setFeatureData] = useState();

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setmovieList(list);

      // destac movie = feature
      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * originals[0].items.results.length - 1
      );
      let chosen = originals[0].items.results[randomChosen];
      let choseInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeatureData(choseInfo);
    };

    loadAll();
  }, []);
  return (
    <ThemeProvider theme={light}>
      <S.App>
        {featureData && <FeaturedMovie item={featureData} />}
        <S.Lists>
          {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} />
          ))}
        </S.Lists>
        header destaque as listas por generos.
      </S.App>
    </ThemeProvider>
  );
};

export default App;
