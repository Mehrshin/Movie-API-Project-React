import React, { useEffect, useState } from 'react';
import { Box, Image, Heading, Text, Center, Button, Grid, Badge} from '@chakra-ui/react';
import { getMovie } from '../../api/tmdb';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
// import Header from '../Header'; // Import the Header component

interface Movie {
    backdrop_path: string;
    genres: { id: number; name: string }[];
    overview: string;
    release_date: string;
    tagline: string;
    spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
    title: string;
    vote_average: number;
    vote_count: number;
}

// interface MovieDetailProps {
//     movieId: string;
// }

const MovieDetail: React.FC = () => {
    const { movieId } = useParams<{ movieId: string }>();
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                if (movieId) {
                    const movieData: Movie = await getMovie(Number(movieId));
                    setMovie(movieData);
                } else {
                    console.error('Movie ID is undefined.');
                }
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [movieId]);

    if (!movie) {
        return <p>Loading...</p>;
    }

    const {
        backdrop_path,
        genres,
        overview,
        release_date,
        tagline,
        spoken_languages,
        title,
        vote_average,
    } = movie;

    const percentage = (vote_average / 10) * 100;

    return (
        <>
          <Center bg="black" color="white" minHeight="100vh">
            <Grid
                templateColumns={{ base: '1fr', md: '1fr 2fr' }}
                gap={6}
                p={8}
                textAlign={{ base: 'center', md: 'left' }} 
                alignItems="start" 
                maxWidth="container.xl"
                margin="auto"
            >
                <Box>
                    <Image
                    src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                    alt={title}
                    borderRadius="lg"
                    boxShadow="xl"
                    />
                </Box>
                <Box>
                    <Heading as="h2" size="2xl" mb={4}>
                        {title} ({new Date(release_date).getFullYear()})
                    </Heading>
                    <Text fontSize="md" mb={2}>{tagline}</Text>
                    <CircularProgress value={percentage} size="100px" color="green.400" mb={4}>
                        <CircularProgressLabel>{percentage.toFixed(0)}%</CircularProgressLabel>
                    </CircularProgress>
                    <Box mb={4}>
                        {genres.map((genre) => (
                            <Badge key={genre.id} mr={2} colorScheme="green">
                            {genre.name}
                            </Badge>
                        ))}
                    </Box>
                    <Text fontSize="md" mb={4}><strong>Release Date:</strong> {new Date(release_date).toDateString()}</Text>
                    <Text fontSize="md" mb={4}><strong>Spoken Languages:</strong> {spoken_languages.map((lang) => lang.english_name).join(', ')}</Text>
                    <Button colorScheme="teal" size="lg" mb={4}>Play Trailer</Button>
                    {/* Overview Section */}

                    <Box bg="gray.700" p={6} borderRadius="md">
                        <Heading as="h3" size="lg" mb={4} color="teal.300">
                            Overview
                        </Heading>

                        <Text mb={6}>
                            {overview}
                        </Text>
                        <Grid templateColumns="repeat(auto-fit, minmax(120px, 1fr))" gap={4}>
                            <Box>
                                <Text fontWeight="bold">Matthew Vaughn</Text>
                                <Text>Director</Text>
                            </Box>
                            <Box>
                                <Text fontWeight="bold">Jason Fuchs</Text>
                                <Text>Writer</Text>
                            </Box>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Center>
    </>
);}

export default MovieDetail;
