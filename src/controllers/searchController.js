import { searchMovies } from '../services/tmdbservice';

export async function searchMoviesByQuery(query) {
  return await searchMovies(query);
}
