// import React from "react";
// import { useTmdb } from "../hooks/useTmdb";
// import Card from "../components/Card";

// interface MovieProps {
//   movieId: number;
// }

// interface MovieData {
//   id: number;
//   title: string;
//   poster_path: string;
//   vote_average: number;
//   genre_ids: number[];
//   genres?:string[];
// }

// const Movie: React.FC<MovieProps> = ({ movieId }) => {
//   const { data, loading, error } = useTmdb<MovieData>(movieId);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   if (!data) {
//     return <div>Movie not found</div>;
//   }

//   return (
//     <div>
//       <Card
//         id= {movieId}
//         title={data.title}
//         poster_path={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
//         vote_average={data.vote_average}
//         genre_ids={data.genre_ids}
//       />
//     </div>
//   );
// };

// export default Movie;
