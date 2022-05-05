<template>
  <div class="section-primary__text">
    <h1>{{ title }}</h1>
    <hr class="section-primary__line" />
    <p>
      Lorem Ipsum has been the industry’s standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was pop
    </p>
    <div class="section-primary__networks">
      <img src="/assets/images/facebook.svg" />
      <img src="/assets/images/linkedin.svg" />
      <img src="/assets/images/twitter.svg" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="scss">
$color__white: #ffffff;

.section-primary__line {
  border: 1px solid $color__white;
}

.section-primary__text {
  margin: 0 auto;
  width: 330px;
}

.section-primary__networks img {
  margin-right: 12px;
}
</style>
