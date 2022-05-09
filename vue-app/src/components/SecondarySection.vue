<template>
  <section class="section-secondary">
    <div class="section-secondary__title">
      <h2>
        Hay un mundo<br />
        <span class="section-secondary__title--special"> ENORME</span>
      </h2>
    </div>
    <div class="section-secondary__images">
      <div class="section-secondary__img" />
    </div>
    <div class="section-secondary__networks">
      <div class="section-secondary--grid">
        <img src="../assets/icons/world.svg" />
        <div>
          <h3 class="section-secondary__subtitle">Unforgettable experiences</h3>
          <p class="section-secondary__subtitle--p">
            Creating your trip is entirely collaborative and our Travel
          </p>
        </div>
        <img src="../assets/icons/rudder.svg" />
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
.section-secondary {
  @media (min-width: $breakpoint--md) {
    display: grid;
    max-width: 991px;
    margin: 0 auto;
    /* grid-template-columns: repeat(2, 1fr); */
    grid-template-columns: 500px 600px;
    grid-template-rows: 450px;
    padding: 100px 143px 153px 145px;
  }

  .section-secondary__title {
    @media (min-width: $breakpoint--md) {
      order: 2;
      width: auto;
      margin-top: 83px;
      /* text-align: right; */
      text-align: left;
      z-index: 1;
      /* margin-bottom: 60.86px; */
      grid-column-start: 2;
      grid-row-start: 1;
      grid-row-end: 1;
    }

    h2 {
      font-family: "Poppins Black";
      font-size: 30px;
      color: $color__primary;
      line-height: 46px;
      height: 86px;
      width: 330px;
      margin: 0 auto;
      margin-top: 49px;

      @media (min-width: $breakpoint--md) {
        font-size: 71px;
        line-height: 107px;
        width: auto;
        margin-top: 0;
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
  }

  .section-secondary__images {
    @media (min-width: $breakpoint--md) {
      grid-column-start: 1;
      grid-row-start: 1;
      grid-row-end: 2;
    }

    .section-secondary__img {
      margin: 0 auto;
      width: 265px;
      height: 450px;
      background-image: url("../assets/images/green.jpg");
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      margin-top: 38px;
      margin-bottom: 66.86px;

      @media (min-width: $breakpoint--md) {
        width: 425px;
        height: 724px;
        background-position: right;
        margin-bottom: 0;
        grid-column-start: 1;
        grid-row-start: 1;
        grid-row-end: 1;
      }

      &:before {
        content: "";
        width: 350px;
        height: 269px;
        background-image: url("../assets/images/mountains.jpg");
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
      grid-column-start: 2;
      grid-row-start: 2;
      grid-row-end: 2;
      /* margin-left: 60.8px; */
      right: 0;
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
