<template>
  <div class="col-6-texts">
    <div class="section-primary__text">
      <h1 class="section-primary__title" v-html="title"></h1>
      <hr class="section-primary__line" />
      <p class="section-primary__description">
        Lorem Ipsum has been the industry’s standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged. It was pop
      </p>
      <div class="section-primary__networks">
        <img src="/assets/icons/facebook.svg" />
        <img src="/assets/icons/linkedin.svg" />
        <img src="/assets/icons/twitter.svg" />
      </div>
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
$breakpoint--md: 768px;

.col-6-texts {
  @media (min-width: $breakpoint--md) {
    /* padding-left: 15px;
    padding-right: 15px; */
    position: relative;
    width: 100%;
    flex: 0 0 50%;
    max-width: 50%;
    order: 1;
  }
}

.section-primary__text {
  margin: 0 auto;

  @media (max-width: $breakpoint--md) {
    width: 330px;
    height: 668px;
  }

  @media (min-width: $breakpoint--md) {
    max-height: 441px;
    max-width: 564.35px;
    margin: 128px 96.65px 103.2px 105px;
  }

  .section-primary__title {
    font-family: "Poppins Black";
    margin-top: 22.1px;
    font-size: 35px;
    line-height: 53px;
    margin-bottom: 12.41px;

    @media (min-width: $breakpoint--md) {
      font-size: 60px;
      line-height: 90px;
    }
  }

  .section-primary__line {
    border-top: 5px solid $color__white;
    margin-bottom: 26.59px;
  }

  .section-primary__description {
    font-family: "Poppins Regular";
    font-size: 16px;
    line-height: 45px;
  }

  .section-primary__networks {
    margin-top: 33.75px;

    img {
      margin-right: 12px;
    }

    @media (min-width: $breakpoint--md) {
      margin-top: 77.75px;
    }
  }
}
</style>
