export default class Movie {
  constructor({ id, title, overview, poster_path, soundtrack }) {
    this.id = id;
    this.title = title;
    this.overview = overview;
    this.poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
    this.soundtrack = soundtrack;
  }
}
