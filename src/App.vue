<template>
  <div id="app">
    <NavBar @search="handleSearch" />

    <main class="main-content">
      <MovieSlider
        :movies="popularMovies"
        @select="handleMovieSelect"
      />

      <MovieDetail
        v-if="selectedMovie"
        :movie="selectedMovie"
        @load-soundtrack="handleLoadSoundtrack"
      />

      <!-- Mostrar soundtrack debajo del detalle -->
      <SoundtrackCard
        v-if="selectedSoundtrack"
        :soundtrack="selectedSoundtrack"
      />
    </main>

    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import MovieSlider from './components/MovieSlider.vue';
import MovieDetail from './components/MovieDetail.vue';
import SoundtrackCard from './components/SoundtrackCard.vue';
import Footer from './components/Footer.vue';

import {
  fetchPopularMovies,
  fetchMovieDetails
} from './services/tmdbservice.js';
import { fetchSoundtrack } from './services/spotifyservice.js';

export default {
  name: 'App',
  components: {
    NavBar,
    MovieSlider,
    MovieDetail,
    SoundtrackCard,
    Footer
  },
  data() {
    return {
      popularMovies: [],
      selectedMovie: null,
      selectedSoundtrack: null
    };
  },
  methods: {
    async loadPopularMovies() {
      try {
        this.popularMovies = await fetchPopularMovies();
      } catch (error) {
        console.error('Error loading popular movies:', error);
      }
    },
    async handleMovieSelect(movie) {
      this.selectedMovie = await fetchMovieDetails(movie.id);
      this.selectedSoundtrack = null; // reiniciar soundtrack al cambiar película
    },
    async handleLoadSoundtrack(title) {
      try {
        this.selectedSoundtrack = await fetchSoundtrack(title);
      } catch (error) {
        console.error('Error loading soundtrack:', error);
      }
    },
    async handleSearch(query) {
      console.log('Buscar película:', query);
    }
  },
  mounted() {
    this.loadPopularMovies();
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Georgia', serif;
  background-color: #e8e2d9;
  color: #2b2b2b;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
  padding: 1rem 2rem;
}
</style>
