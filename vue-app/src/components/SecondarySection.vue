<template>
  <section class="section-secondary">
    <h2 class="section-secondary__title">
      Hay un mundo<br />
      <span class="section-secondary__title--special"> ENORME</span>
    </h2>
    <div class="section-secondary__images">
      <div class="section-secondary__img" />
    </div>
    <div class="section-secondary__networks">
      <div class="section-secondary--grid">
        <img src="/assets/icons/world.svg" />
        <div>
          <h3 class="section-secondary__subtitle">Unforgettable experiences</h3>
          <p class="section-secondary__subtitle--p">
            Creating your trip is entirely collaborative and our Travel
          </p>
        </div>
        <img src="/assets/icons/rudder.svg" />
        <div>
          <h3 class="section-secondary__subtitle">Unforgettable experiences</h3>
          <p class="section-secondary__subtitle--p">
            Creating your trip is entirely collaborative and our Travel
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
$color__primary: #335a39;
$color__white: #ffffff;
$breakpoint--md: 768px;

.section-secondary {
  @media (min-width: $breakpoint--md) {
    display: flex;
    flex-wrap: wrap;
  }

  .section-secondary__title {
    font-family: "Poppins Black";
    font-size: 30px;
    color: $color__primary;
    line-height: 46px;
    height: 86px;
    width: 330px;
    margin: 0 auto;
    margin-top: 49px;

    @media (min-width: $breakpoint--md) {
      order: 2;
      font-size: 71px;
      line-height: 107px;
      width: auto;
      text-align: right;
      z-index: 1;
    }

    .section-secondary__title--special {
      letter-spacing: 7.4px;
      float: right;

      @media (min-width: $breakpoint--md) {
        font-size: 102px;
        line-height: 153px;
        letter-spacing: 75.48px;
      }
    }
  }

  .section-secondary__images {
    /* text-align: center; */
    @media (min-width: $breakpoint--md) {
      order: 1;
      margin: 0 0 153px 145px;
    }

    .section-secondary__img {
      margin: 0 auto;
      width: 265px;
      height: 450px;
      background-image: url("/assets/images/green.jpg");
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      margin-top: 38px;
      margin-bottom: 66.86px;

      @media (min-width: $breakpoint--md) {
        margin-top: 100px;
        width: 425px;
        height: 724px;
        background-position: right;
      }

      &:before {
        content: "";
        width: 350px;
        height: 269px;
        background-image: url("/assets/images/mountains.jpg");
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        @media (min-width: $breakpoint--md) {
          top: 75%;
          left: 75%;
        }
      }
    }
  }

  .section-secondary__networks {
    margin: 0 auto;
    width: 330px;
    @media (min-width: $breakpoint--md) {
      order: 3;
    }

    .section-secondary--grid {
      display: grid;
      grid-template-columns: 81.2px 256px;
      padding-bottom: 55px;

      .section-secondary__subtitle {
        line-height: 45px;
        font-family: "Poppins Bold";
        font-size: 18px;
        color: $color__primary;
        margin-top: 13.14px;
        margin-bottom: 10px;
      }

      .section-secondary__subtitle--p {
        line-height: 32px;
        font-family: "Poppins Regular";
        font-size: 16px;
        color: $color__primary;
        margin: 0;
      }
    }
  }
}
</style>
