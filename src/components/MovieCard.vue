<template>
  <div class="movie-card" @click="$emit('select', movie)">
    <img
      :src="posterUrl"
      :alt="movie.title"
      class="movie-poster"
      loading="lazy"
    />
    <div class="movie-info">
      <h3>{{ movie.title }}</h3>
      <p>{{ formattedReleaseDate }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  computed: {
    posterUrl() {
      return this.movie.poster_path 
        ? `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`
        : require('@/assets/placeholder-movie.jpg');
    },
    formattedReleaseDate() {
      return this.movie.release_date 
        ? new Date(this.movie.release_date).getFullYear()
        : 'N/A';
    }
  }
}
</script>

<style scoped>
.movie-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 180px;
  min-width: 180px;
}

.movie-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.movie-poster {
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
  background: #e0e0e0;
}

.movie-info {
  padding: 0.75rem;
  text-align: center;
}

.movie-info h3 {
  font-size: 1rem;
  margin: 0 0 0.25rem;
  color: #1a1a1a;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.3;
  display: -webkit-box;
  display: box;
  -webkit-line-clamp: 2;
  line-clamp: 2; /* Agregado como sugerido */
  -webkit-box-orient: vertical;
  box-orient: vertical;
}

.movie-info p {
  color: #666;
  font-size: 0.85rem;
  margin: 0;
}

@media (max-width: 480px) {
  .movie-card {
    width: 140px;
    min-width: 140px;
  }

  .movie-info h3 {
    font-size: 0.9rem;
  }

  .movie-info p {
    font-size: 0.8rem;
  }
}
</style>
