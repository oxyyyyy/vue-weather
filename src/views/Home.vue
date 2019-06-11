<template>
  <div class="home">
    <weatherWidget />
  </div>
</template>

<script>
import weatherWidget from '@/components/weatherWidget.vue';

export default {
  name: "home",
  components: {
    weatherWidget
  }
}
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
