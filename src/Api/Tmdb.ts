import axios from "axios";

const API_KEY = "e84540b93410e7b9a5711cc9814026e6";
const API_BASE = "https://api.themoviedb.org/3";
const API_LING = "pt-BR";

export const basicFetch = async (endpoint?: string) => {
  const response = await axios.get(`${API_BASE}${endpoint}`);
  return response.data;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "generos",
        title: "todos all",
        items: await basicFetch(
          `/genre/movie/list?api_key=${API_KEY}&language=${API_LING}`
        ),
      },
      {
        slug: "originais",
        title: "Originais da Netflix",
        items: await basicFetch(
          `/discover/tv?with_network=213&api_key=${API_KEY}&language=${API_LING}`
        ),
      },
      {
        slug: "treding",
        title: "Recomendados para Você",
        items: await basicFetch(
          `/trending/all/week?api_key=${API_KEY}&language=${API_LING}`
        ),
      },
      {
        slug: "toprated",
        title: "Em Alta",
        items: await basicFetch(
          `/movie/top_rated?api_key=${API_KEY}&language=${API_LING}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(
          `/discover/movie?with_genres=28&api_key=${API_KEY}&language=${API_LING}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(
          `/discover/movie?with_genres=35&api_key=${API_KEY}&language=${API_LING}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(
          `/discover/movie?with_genres=27&api_key=${API_KEY}&language=${API_LING}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(
          `/discover/movie?with_genres=10749&api_key=${API_KEY}&language=${API_LING}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentário",
        items: await basicFetch(
          `/discover/movie?with_genres=99&api_key=${API_KEY}&language=${API_LING}`
        ),
      },
    ];
  },
};
