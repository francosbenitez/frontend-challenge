<template>
  <div class="hero-image" :style="{ backgroundImage: 'url(' + url + ')' }">
    <div class="hero-image__menu">
      <div class="line-1"></div>
      <div class="line-2"></div>
      <div class="line-3"></div>
    </div>
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
$color__primary: #335a39;
$color__white: #ffffff;

.hero-image {
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 482px;
}

.hero-image__menu {
  width: 57px;
  height: 57px;
  background-color: $color__primary;
  padding: 5px;
  display: inline-block;

  & > div {
    margin-top: 6.5px;
  }

  .line-1,
  .line-3 {
    top: 71px;
    left: 49px;
    width: 19px;
    height: 0px;
    border: 3px solid #ffffff;
    opacity: 1;
    margin-right: auto;
    margin-left: auto;
  }

  .line-2 {
    top: 77px;
    left: 42px;
    width: 32px;
    height: 0px;
    border: 3px solid #ffffff;
    opacity: 1;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>
