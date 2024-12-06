import React, { useEffect, useState } from 'react';
import { Button } from 'react-native-paper';
import { isMoviePresent } from '../../database/isMoviePresent';
import { saveMovies } from '../../database/saveMovies';
import { removeMovie } from '../../database/removeMovie';

interface Movie {
  id: number;
  original_title: string;
  backdrop_path: string;
  overview: string;
  genres: Array<{
    id: number;
    name: string;
  }>;
}

interface MovieButtonProps {
  movie: Movie;
  showSnackbar: () => void;
}

const MovieButtonComponent: React.FC<MovieButtonProps> = ({ movie, showSnackbar }) => {
  const [isPresent, setIsPresent] = useState<boolean>(false);

  // Check if the movie is already in the database
  useEffect(() => {
    const checkMoviePresence = async (): Promise<void> => {
      const result = await isMoviePresent(movie.id);
      setIsPresent(result);
    };
    checkMoviePresence();
  }, [movie]);

  // Handle Save Movie
  const handleSave = async (): Promise<void> => {
    const success = await saveMovies(movie);
    if (success) {
      setIsPresent(true);
      showSnackbar();
    }
  };

  // Handle Remove Movie
  const handleRemove = async (): Promise<void> => {
    const success = await removeMovie(movie.id);
    if (success) {
      setIsPresent(false);
    }
  };

  return (
    <Button
      icon={isPresent ? "delete" : "heart"}
      mode="contained"
      onPress={isPresent ? handleRemove : handleSave}
      style={{ margin: 8 }}
    >
      {isPresent ? 'Remove Movie' : 'Save Movie'}
    </Button>
  );
};

export default MovieButtonComponent;
