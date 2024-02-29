const getImageUrl = (path: string) => {
    const baseUrl = "https://image.tmdb.org/t/p/w400/";
    return baseUrl + path;
};
export default getImageUrl;
