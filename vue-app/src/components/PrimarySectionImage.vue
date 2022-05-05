<template>
  <div class="hero-image">
    <img src="../assets/images/cover-1.jpg" />
  </div>
</template>

<script>
export default {
  props: {
    url: String,
  },
};
</script>

<style lang="scss" scoped>
.hero-image img {
  max-height: 482px;
  max-width: 604px;
}
</style>
