import { getMovieDetails } from '../services/tmdbservice';

export async function loadMovieDetails(movieId) {
  return await getMovieDetails(movieId);
}
