<template>
  <div class="col-6-image">
    <Transition name="fade">
      <div :key="url">
        <div
          class="hero-image"
          :style="{ backgroundImage: 'url(' + url + ')' }"
        >
          <div class="hero-image__menu">
            <div class="hero-image__wrapper">
              <div class="hero-image__line--1"></div>
              <div class="hero-image__line--2"></div>
              <div class="hero-image__line--3"></div>
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
    url: String,
  },
};
</script>

<style lang="scss">
$color__primary: #335a39;
$color__white: #ffffff;
$breakpoint--md: 768px;

.col-6-image {
  @media screen and (min-width: $breakpoint--md) {
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
    width: 100%;
    flex: 0 0 50%;
    max-width: 50%;
    order: 2;
  }
}

.hero-image {
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 482px;

  @media screen and (min-width: $breakpoint--md) {
    height: 761px;
  }

  .hero-image__menu {
    /* margin: 3rem 0 0 3rem; */
    top: 3rem;
    width: 57px;
    height: 57px;
    background-color: $color__primary;
    position: absolute;
    display: table;

    @media screen and (max-width: $breakpoint--md) {
      left: 3rem;
    }

    @media screen and (min-width: $breakpoint--md) {
      right: 3rem;
    }

    .hero-image__wrapper {
      display: table-cell;
      vertical-align: middle;
      text-align: center;

      & > div {
        /* margin-top: 6.42px; */
        margin-top: 3.21px;
      }

      .hero-image__line--1,
      .hero-image__line--3 {
        top: 71px;
        left: 49px;
        width: 19px;
        height: 0px;
        border: 1.5px solid #ffffff;
        opacity: 1;
        margin-right: auto;
        margin-left: auto;
      }

      .hero-image__line--2 {
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
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  position: absolute;
}
</style>
