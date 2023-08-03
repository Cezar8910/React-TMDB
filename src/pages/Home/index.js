import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import "./home.css";
//https://api.themoviedb.org/3/movie/now_playing?api_key=6f55b44e411d5df780e1e10f3c62b4c7

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "6f55b44e411d5df780e1e10f3c62b4c7",
          language: "pt-BR",
          page: 1,
        },
      });
      setFilmes(response.data.results.slice(0, 10));
      setLoad(false);
    }
    loadFilmes();
  }, []);

  if (load) {
    return (
      <div className="load">
        <h2>Carregando filmes...</h2>
      </div>
    );
  }
  

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filmes) => {
          return (
            <article key={filmes.id}>
              <strong>{filmes.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${filmes.poster_path}`}
                alt={filmes.title}
              />
              <Link to={`/filme/${filmes.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
export default Home;
