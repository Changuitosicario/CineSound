<template>
  <section class="movie-slider">
    <h2 class="slider-title">Películas populares</h2>
    <div class="slider-container">
      <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        @select="$emit('select', movie)"
      />
    </div>
  </section>
</template>

<script>
import MovieCard from './MovieCard.vue';

export default {
  name: 'MovieSlider',
  components: { MovieCard },
  props: {
    movies: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.movie-slider {
  padding: 2rem 1rem;
  background-color: #e8e2d9;
}

.slider-title {
  color: #2b2b2b;
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: left;
}

.slider-container {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: 1rem;
  padding-bottom: 1rem;
  scroll-behavior: smooth;
}

.slider-container::-webkit-scrollbar {
  height: 8px;
}

.slider-container::-webkit-scrollbar-thumb {
  background-color: #999;
  border-radius: 4px;
}
</style>
