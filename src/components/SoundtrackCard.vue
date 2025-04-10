<template>
  <div class="soundtrack" v-if="soundtrack">
    <img :src="soundtrack.images[0].url" :alt="soundtrack.name" />
    <div class="soundtrack-info">
      <h3>{{ soundtrack.name }}</h3>
      <p>{{ soundtrack.artists[0].name }}</p>
      <a :href="soundtrack.external_urls.spotify" target="_blank">
        Escuchar en Spotify
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SoundtrackCard',
  props: {
    soundtrack: Object
  }
}
</script>

<style scoped>
.soundtrack {
  display: flex;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem;
  background: #f7f7f7;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.soundtrack img {
  width: 120px;
  height: 120px;
  border-radius: 12px;
  object-fit: cover;
  margin-right: 1.5rem;
}

.soundtrack-info h3 {
  margin: 0;
  font-size: 1.2rem;
}

.soundtrack-info p {
  margin: 0.4rem 0;
  color: #666;
}

.soundtrack-info a {
  display: inline-block;
  margin-top: 0.5rem;
  color: #1db954;
  font-weight: bold;
  text-decoration: none;
}

.soundtrack-info a:hover {
  text-decoration: underline;
}
</style>
