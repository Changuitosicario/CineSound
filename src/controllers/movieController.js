import { getPopularMovies } from '../services/tmdbservice';

export async function loadPopularMovies() {
  return await getPopularMovies();
}
