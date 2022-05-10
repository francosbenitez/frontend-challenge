<template>
  <div class="section--primary__texts">
    <Transition>
      <div :key="title">
        <div class="section--primary__texts-wrapper">
          <h1 class="section--primary__title" v-html="title"></h1>
          <hr class="section--primary__line" />
          <p class="section--primary__description">
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was pop
          </p>
          <div class="section--primary__networks">
            <img src="../assets/icons/facebook.svg" />
            <img src="../assets/icons/linkedin.svg" />
            <img src="../assets/icons/twitter.svg" />
          </div>
        </div>
      </div>
    </Transition>
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
.section--primary__texts {
  .section--primary__texts-wrapper {
    margin: 0 auto;

    @media (max-width: $breakpoint--lg) {
      width: 330px;
      height: 668px;
    }

    .section--primary__title {
      font-family: "Poppins Black";
      margin-top: 22.1px;
      font-size: 35px;
      line-height: 53px;
      margin-bottom: 12.41px;

      @media (min-width: $breakpoint--lg) {
        font-size: 60px;
        line-height: 90px;
        margin-bottom: 41.41px;
      }
    }

    .section--primary__line {
      border-top: 5px solid $color__white;
      margin-bottom: 26.59px;

      @media (min-width: $breakpoint--lg) {
        margin-bottom: 39.59px;
      }
    }

    .section--primary__description {
      font-family: "Poppins Regular";
      font-size: 16px;
      line-height: 45px;
    }

    .section--primary__networks {
      margin-top: 33.75px;

      img {
        margin-right: 12px;
      }

      @media (min-width: $breakpoint--lg) {
        margin-top: 77.75px;
      }
    }

    @media (min-width: $breakpoint--lg) {
      max-height: 441px;
      width: 564.35px;
    }
  }

  @media (min-width: $breakpoint--lg) {
    position: relative;
    width: 100%;
    flex: 0 0 56.08%;
    max-width: 56.08%;
    order: 1;

    & > :first-child {
      margin: 0;
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
