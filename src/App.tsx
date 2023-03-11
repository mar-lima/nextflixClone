import { useEffect, useState } from "react";
import "./App.styled.ts";
import Tmdb from "./Api/Tmdb";
import * as S from './App.styled'



const App = () => {
  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
  
      console.log(list);
    };
  
    loadAll();
  }, []);
  return (
    <S.App>
      asdasd
    </S.App>
  )
}

export default App