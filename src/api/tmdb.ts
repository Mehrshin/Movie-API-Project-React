import axios, { AxiosResponse } from "axios";
import apiClient, { API_KEY, BEARER_TOKEN } from "../service/api_client";
// get api key and token

// create axios

const tmdbApi = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
        "Content-Type": "application/json;charset=utf-8",
    },
});
// const moviesWithGenres = async (movies: any[]): Promise<any[]> => {
//         const genreList = await getGenreList();
//         const genreMap = new Map(genreList.genres.map((genre: any) => [genre.id, genre.name]));
    

//         const uniqueMovies = new Map<string, any>();
//         movies.forEach(movie => {
//         const genreNames = movie.genre_ids.map((id: number) => genreMap.get(id)).filter(Boolean);
//         if (genreNames.length > 0) {
//             uniqueMovies.set(movie.title, { ...movie, genres: genreNames });
//         }
//         });
    
//     return Array.from(uniqueMovies.values());
//   };
// fetch movie

export const getMovie = async (movieId: number) => {
    const response = await tmdbApi.get(`/movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
};


export const getPopularMovie = async (page:number):Promise<any> => {
    const response = await apiClient.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}&region=US`);

    return (response.data);
};

export const getTrendingMovies = async (timeWindow: 'day' | 'week', page: number) => {
    const response = await tmdbApi.get(`/trending/movie/${timeWindow}`, {
        params: {
            api_key: API_KEY,
            language: 'en-US', 
            page: page,
        },
      });
      return (response.data);

  };
  
  

  export const getNowPlaying = async (page: number) => {
    const startDate = getStartDate();
    const response = await tmdbApi.get(`/movie/now_playing?api_key=${API_KEY}&language=en-US&region=US&page=${page}`, {
        params: {
        start_date: startDate.toISOString().split("T")[0],
        api_key: API_KEY,
    },
});
    return (response.data);
} 

const getStartDate = () => {
    const currentDate = new Date();
    const pass24Hours = 24 * 60 * 60 * 1000;
    const startDate = new Date(currentDate.getTime() + pass24Hours);
    return startDate;
};

export const getGenreList = async (): Promise<any> => {
    try {
        const response: AxiosResponse = await tmdbApi.get(
        `/genre/movie/list?language=en&api_key=${API_KEY}`
        );
        return response.data;
    } catch (error: any) {
        throw new Error(`Error fetching genre list: ${error.message}`);
    }
};

export const fetchGenreNames = async (genreIds: number[]): Promise<string[]> => {
    try {
        const genreList = await getGenreList();
        // console.log('Received genreList:', genreList); 
        if (!genreList || !genreList.genres || !Array.isArray(genreList.genres)) {
            console.error('Error fetching genre names: Invalid genre list or genres array.');
            return [];
        }
    
        const genreMap = new Map(genreList.genres.map((genre: any) => [genre.id, genre.name]));
    
        const names = genreIds.map((id) => genreMap.get(id)).filter(Boolean);
        return names as string[];
        } catch (error) {
        console.error('Error fetching genre names:', error);
        return [];
        }
};

