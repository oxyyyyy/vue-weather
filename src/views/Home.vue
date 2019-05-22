<template>
  <div class="home">
    <incrementBtn></incrementBtn>
  </div>
</template>

<script>
import incrementBtn from '@/components/incrementBtn.vue';

export default {
  name: "home",
  components: {
    incrementBtn
  }
};
</script>
