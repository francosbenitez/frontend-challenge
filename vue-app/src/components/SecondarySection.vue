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

.section-secondary {
  .section-secondary__title {
    font-family: "Poppins Black";
    font-size: 30px;
    color: $color__primary;
    line-height: 46px;
    height: 86px;
    width: 330px;
    margin: 0 auto;

    .section-secondary__title--special {
      letter-spacing: 7.4px;
    }
  }

  .section-secondary__images {
    /* text-align: center; */

    .section-secondary__img {
      margin: 0 auto;
      width: 350px;
      height: 269px;
      background-image: url("/assets/images/mountains.jpg");
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;

      &:before {
        content: "";
        background-image: url("/assets/images/green.jpg");
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        width: 265px;
        /* padding: 200px; */
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: -1;
        transform: translate(-50%, -50%);
        height: 450px;
      }
    }
  }

  .section-secondary__networks {
    margin: 0 auto;
    width: 330px;

    .section-secondary--grid {
      display: grid;
      grid-template-columns: 1fr 3fr;

      .section-secondary__subtitle {
        line-height: 45px;
        font-family: "Poppins Bold";
        font-size: 18px;
        color: $color__primary;
      }

      .section-secondary__subtitle--p {
        line-height: 32px;
        font-family: "Poppins Regular";
        font-size: 16px;
        color: $color__primary;
      }
    }
  }
}
</style>
