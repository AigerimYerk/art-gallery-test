<template>
  <main>
    <h1 class="visually-hidden">San Francisco Art Gallery</h1>
    <div :class="this.imagesList.length!==0 ? 'search-block' : 'search-block big'" >
      <img src="../assets/background1.jpg">
      <form @submit="updateList(event)">
        <input
          id="search"
          type="text"
          placeholder="Поиск"
          v-model="searchPicture"
          @changeinput="updateList"
          >
        <button
          class="search-button"
          @click="updateList"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
            <path d="M22.8596 22.1821L15.8614 15.1838C17.315 13.5699 18.2084 11.442 18.2084 9.10414C18.2083 4.08416 14.1242 0 9.10418 0C4.08416 0 0 4.08416 0 9.10418C0 14.1242 4.08416 18.2084 9.10418 18.2084C11.442 18.2084 13.5699 17.315 15.1839 15.8614L22.1821 22.8596C22.2756 22.9532 22.3983 23 22.5209 23C22.6435 23 22.766 22.9532 22.8597 22.8596C23.0468 22.6724 23.0468 22.3692 22.8596 22.1821ZM9.10418 17.25C4.61294 17.25 0.958363 13.5959 0.958363 9.10418C0.958363 4.61249 4.61294 0.958318 9.10418 0.958318C13.5954 0.958318 17.25 4.61244 17.25 9.10418C17.25 13.5959 13.5954 17.25 9.10418 17.25Z"/>
          </svg>
        </button>
      </form>
    </div>
    <section v-if="this.imagesList.length!==0" class="container">
      <ul class="gallery-section">
        <galleryCard
          v-for="item in this.imagesList"
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
  name: 'HomePage',
  components: {
    galleryCard,
  },
  data() {
    return {
      imagesList: [],
      searchPicture: '',
    }
  },
  created() {
    this.imagesList = this.$store.state.images;
  },
  methods: {
    updateList(event) {
      event.preventDefault();
      this.$store.dispatch('updateList', this.searchPicture).then(() => {
        this.imagesList = this.$store.state.images;
      });
    }
  }
});
</script>
