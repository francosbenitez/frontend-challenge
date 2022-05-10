<template>
  <div class="section--primary__images">
    <Transition>
      <div :key="image">
        <div
          class="section--primary__image-background"
          :style="{
            backgroundImage:
              'url(' +
              require('../assets/images/cover-' + image + '.jpg') +
              ')',
          }"
        >
          <div class="section--primary__menu">
            <div class="section--primary__menu-wrapper">
              <div class="section--primary__line-1"></div>
              <div class="section--primary__line-2"></div>
              <div class="section--primary__line-3"></div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  props: {
    image: Number,
  },
};
</script>

<style lang="scss">
.section--primary__images {
  .section--primary__image-background {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 482px;

    .section--primary__menu {
      top: 3rem;
      width: 57px;
      height: 57px;
      background-color: $color__primary;
      position: absolute;
      display: table;

      @media (max-width: $breakpoint--lg) {
        left: 3rem;
      }

      .section--primary__menu-wrapper {
        display: table-cell;
        vertical-align: middle;
        text-align: center;

        & > div {
          margin-top: 3.21px;
        }

        .section--primary__line-1,
        .section--primary__line-3 {
          top: 71px;
          left: 49px;
          width: 19px;
          height: 0px;
          border: 1.5px solid #ffffff;
          opacity: 1;
          margin-right: auto;
          margin-left: auto;
        }

        .section--primary__line-2 {
          top: 77px;
          left: 42px;
          width: 32px;
          height: 0px;
          border: 1.5px solid #ffffff;
          opacity: 1;
          margin-right: auto;
          margin-left: auto;
        }
      }

      @media (min-width: $breakpoint--lg) {
        right: 3rem;
      }
    }

    @media (min-width: $breakpoint--lg) {
      height: 771px;
    }
  }

  @media (min-width: $breakpoint--lg) {
    position: relative;
    width: 100%;
    flex: 0 0 43.92%;
    max-width: 43.92%;
    order: 2;
  }
}
</style>
