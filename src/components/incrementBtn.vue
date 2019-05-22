<template>
  <div>
    <button @click="incCounter">Increment!</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      incCounter() {
        this.$store.commit('increment');
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
