import axios from "axios";
import { BASE_URL, API_KEY } from "../constants/urls";

export const GetAllMovies = (page, setData) => {
  axios
    .get(`${BASE_URL}/movie/popular?${API_KEY}&language=pt-BR&page=${page}`)
    .then((res) => {
      setData(res.data.results);
    })
    .catch((error) => {});
};
export const GetSearch = (search, setData) => {
  if (search) {
    axios
      .get(
        `${BASE_URL}/search/movie?${API_KEY}&language=pt-BR&include_adult=false&query=${encodeURI(
          search?.toString()
        )}`
      )
      .then((res) => {
        setData(res.data.results);
      })

      .catch((error) => {});
  } else {
    setData(undefined);
  }
};
export const GetDetails = (setData, id) => {
  axios
    .get(`${BASE_URL}/movie/${id}?${API_KEY}&language=pt-BR`)
    .then((res) => {
      setData(res.data);
    })
    .catch((error) => {});
};
export const GetCast = (setData, id) => {
  axios
    .get(`${BASE_URL}/movie/${id}/credits?${API_KEY}&language=pt-BR`)
    .then((res) => {
      setData(res.data.cast);
    })
    .catch((error) => {});
};
export const GetTrailers = (setData, id) => {
  axios
    .get(`${BASE_URL}/movie/${id}/videos?${API_KEY}&language=pt-BR`)
    .then((resp) => {
      const trailer = resp.data.results.filter((video) => {
        if (video.type === "Trailer") {
          return video;
        }
        return trailer;
      });
      setData(trailer);
    })
    .catch((error) => {});
};
export const GetMovieGenres = (setData) => {
  axios
    .get(`${BASE_URL}/genre/movie/list?${API_KEY}&language=pt-BR`)
    .then((res) => {
      setData(res.data.genres);
    })
    .catch((error) => {});
};
export const GetAgeGroup = (setData, id) => {
  axios
    .get(`${BASE_URL}/movie/${id}/release_dates?${API_KEY}`)
    .then((resp) => {
      const data = resp.data.results;
      for (let ageObj of data) {
        if (ageObj.iso_3166_1 === "BR") {
          setData(ageObj);
        }
      }
    })
    .catch((error) => {});
};
