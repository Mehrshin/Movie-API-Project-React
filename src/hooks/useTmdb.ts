import { useState, useEffect } from 'react';
import { getMovie } from '../api/tmdb';

//provide generated hook

export const useTmdb = <T,>(movieId: number): { data: T | null, loading: boolean, error: Error | null } => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchMovieData = async () => {
        try {
            setLoading(true);
            const movieData = await getMovie(movieId);
            setData(movieData as T); 
        } catch (err) {
            setError(err as Error);
            console.error('Error fetching data:', err);
        } finally {
            setLoading(false);
        }
        };

        fetchMovieData();
    }, [movieId]);

    return { data, loading, error };
};
