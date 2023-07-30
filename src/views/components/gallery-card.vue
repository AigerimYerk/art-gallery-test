<template>
  <li class="gallery__item">
    <router-link :to="this.link">
      <img 
        :src="item.urls.small"
        :style="{'background-color':item.color}"
        :alt="item.alt_description"
        >
      <span>{{ item.alt_description }}</span>
    </router-link>
  </li>
</template>

<script>

export default ({
  name: 'gallery-card',
  props: {
    item: Object,
  },
  data() {
    return {
      link: '/pictures/'+ String(this.item.id),
    }
  }
})
</script>
