import axios from "axios";

//BASE DA URL:https://api.themoviedb.org/3/
// URL DA API https://api.themoviedb.org/3/movie/now_playing?api_key=6f55b44e411d5df780e1e10f3c62b4c7

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
