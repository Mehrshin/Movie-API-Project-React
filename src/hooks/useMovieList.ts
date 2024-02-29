import { useState, useEffect } from 'react';
import { getPopularMovie, getTrendingMovies, getNowPlaying } from '../api/tmdb'; 

export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    genre_ids: number[];
    genres: string[];
}

interface MoviesListData {
    movies: Movie[];
    total_pages: number;
    loading: boolean;
    error: Error | null;
  }

export const useMoviesList = (category: string, page: number): MoviesListData => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [totalPages,setTotalPages] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
            // console.log("Fetching movies for page:", page);

        const fetchMovies = async () => {
        setLoading(true);
        try {
            let data;
            
            switch (category) {
            case 'popular':
                data = await getPopularMovie(page);
                break;
            case 'discover':
                data = await getTrendingMovies('week',page);
                break;
            case 'change':
                data = await getNowPlaying(page);
                break;
            default:
                data = [];
            }
            setMovies(data.results);
            setTotalPages(data.total_pages || 0)
        } catch (err) {
            setError(err as Error);
        } finally {
            setLoading(false);
        }
        };  

    fetchMovies();
}, [category,page]);
return { movies, total_pages:totalPages ,loading, error };
};
