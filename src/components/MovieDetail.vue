<template>
  <div class="detail" v-if="movie">
    <img
      :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
      :alt="movie.title"
      class="detail-poster"
    />
    <div class="detail-info">
      <h2>{{ movie.title }}</h2>
      <p>{{ movie.overview }}</p>
      <p><strong>Fecha de estreno:</strong> {{ movie.release_date }}</p>
      <button @click="$emit('load-soundtrack', movie.title)">
        Escuchar Soundtrack
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieDetail',
  props: {
    movie: Object
  }
}
</script>

<style scoped>
.detail {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  padding: 2rem;
  background-color: #fffbe7;
  border-radius: 16px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
}

.detail-poster {
  width: 240px;
  height: auto;
  border-radius: 12px;
  margin-right: 2rem;
  object-fit: cover;
}

.detail-info {
  max-width: 600px;
}

.detail-info h2 {
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.detail-info p {
  margin-bottom: 0.8rem;
  color: #333;
}

button {
  background-color: #006650;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #004f3b;
}
</style>
