<template>
  <MainHeader />
  <router-view></router-view>
</template>

<script>
import MainHeader from './views/components/header.vue';

export default {
  name: 'App',
  components: {
    MainHeader,
  }
}
</script>

<style lang="scss">
  @import './scss/style.scss';
</style>
