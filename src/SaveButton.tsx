import React, { useEffect, useState } from 'react';
import { Button } from 'react-native-paper';
import { isMoviePresent } from '../database/isMoviePresent';
import { saveMovies } from '../database/saveMovies';
import { removeMovie } from '../database/removeMovie';

const MovieButton = ({ movie ,showSnackbar} ) => {
  const [isPresent, setIsPresent] = useState(false);

  // Check if the movie is already in the database
  useEffect(() => {
    const checkMoviePresence = async () => {
      const result = await isMoviePresent(movie.id);
      setIsPresent(result);
    };
    checkMoviePresence();
  }, [movie]);

  // Handle Save Movie
  const handleSave = async () => {
    const success = await saveMovies(movie);
    if (success) {
      setIsPresent(true);
      showSnackbar();
    }
  };

  // Handle Remove Movie
  const handleRemove = async () => {
    const success = await removeMovie(movie.id);
    console.log("vcvc")
    console.log(success)
    if (success) {
        setIsPresent(false);
    }
  };

  return (
    <Button
      icon={isPresent ? "delete": "heart"}
      mode="contained"
      onPress={isPresent ? handleRemove : handleSave}
      style={{ margin: 8 }}
    >
      {isPresent ? 'Remove Movie' : 'Save Movie'}
    </Button>
  );
};

export default MovieButton;
