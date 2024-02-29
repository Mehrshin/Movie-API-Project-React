import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/index';
import BrowseContainer from './containers/BrowseContainer';
import ShowPage from './components/ShowPage';
import Login from './components/Login';
import Signup from './components/Signup';
import MovieDetail from './components/MovieDetails/MovieDetails';
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<ShowPage />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/browse" element={<BrowseContainer />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
