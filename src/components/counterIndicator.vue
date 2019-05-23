<template>
  <div>
    <h2>{{ count }}</h2>
  </div>
</template>

<script>
  export default {
    computed: {
      count() {
        return this.$store.state.count
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
