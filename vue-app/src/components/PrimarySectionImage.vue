<template>
  <div
    class="hero-image"
    :style="{ backgroundImage: 'url(' + url + ')' }"
  ></div>
</template>

<script>
export default {
  props: {
    url: String,
  },
};
</script>

<style lang="scss" scoped>
.hero-image {
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 482px;
  width: 604px;
}
</style>
