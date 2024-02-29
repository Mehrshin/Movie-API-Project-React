import { useState, useEffect } from "react";
import { API_KEY } from "../service/api_client";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  genre_ids: number[];
  genres: string[];
}

interface MovieSearchData {
  movies: Movie[];
  total_pages: number;
  loading: boolean;
  error: string | null;
}

export const useMovieSearch = (
  query: string,
  page: number
): MovieSearchData => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchGenres = async () => {
      const genreResponse = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );
      const genreData = await genreResponse.json();
      return new Map(
        genreData.genres.map((genre: any) => [genre.id, genre.name])
      );
    };

    const fetchMovies = async () => {
      let url;
      if (query) {
        url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
          query
        )}&page=${page}&include_adult=false`;
      } else {
        url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      if (data.results && Array.isArray(data.results)) {
        const genresMap = await fetchGenres();

        const moviesData = data.results.map((movie: any) => ({
          movieId: movie.id,
          title: movie.title,
          vote_average: movie.vote_average,
          genre_ids: movie.genre_ids,
          poster_path: movie.poster_path,
          genres: movie.genre_ids.map((genreId: number) =>
            genresMap.get(genreId)
          ),
        }));
        setMovies(moviesData || []);
        setTotalPages(data.total_pages || 0);
      } else {
        setMovies([]);
        setTotalPages(0);
      }
    };

    fetchMovies()
      .catch((err) => {
        setError("An error occurred while fetching data");
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query, page]);

  return { movies, total_pages: totalPages, loading, error };
};
