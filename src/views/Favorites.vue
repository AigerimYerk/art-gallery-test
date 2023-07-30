<template>
  <main>
    <h1>Избранное</h1>
    <section class="container">
      <ul class="gallery-section" v-if="this.favorites">
        <galleryCard
          v-for="item in this.favorites"
          :key="item.id"
          :item="item"
           />
      </ul>
    </section>
  </main>
</template>

<script>
import galleryCard from './components/gallery-card.vue';

export default ({
  name: 'FavoritesPage',
  components: {
    galleryCard
  },
  data() {
    return {
      favorites: [],
    }
  },
  created() {
    this.favorites = this.$store.state.favoritesList;
  }
})
</script>

<style scoped>
  h1 {
    text-align: center;
    font-size: 72px;
    line-height: 72px;
    margin-top: 90px;
    font-weight: 700;
  }
</style>
