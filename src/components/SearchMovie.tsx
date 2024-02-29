import React, { useState, useEffect } from 'react';
import { Box, Input, Button } from '@chakra-ui/react';

interface SearchMovieProps {
  onSearch: (query: string) => void;
  query: string;
}

const SearchMovie: React.FC<SearchMovieProps> = ({ onSearch }) => {
  const [localQuery, setLocalQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(localQuery);
    }, 500); 

    return () => clearTimeout(timer); 
  }, [localQuery, onSearch]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(localQuery);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Input value={localQuery} onChange={handleSearchChange} placeholder="Search for movies..." />
        <Button type="submit">Search</Button>
      </form>
    </Box>
  );
};

export default SearchMovie;
