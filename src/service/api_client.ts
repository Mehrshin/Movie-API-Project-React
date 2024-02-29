import axios from "axios";

export const API_KEY = "956a0881f9c18a10c6402f0dc1491617"; 
export const BEARER_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTZhMDg4MWY5YzE4YTEwYzY0MDJmMGRjMTQ5MTYxNyIsInN1YiI6IjY1YjA4YmQ5OGMzMTU5MDE3MzMxZTJkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rR4Nt51lJL6T8BN3nLCFXFvPGS4tdzLcCzEVI7ZwNw0";

const apiClient = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: API_KEY,
    },
});

export default apiClient;
