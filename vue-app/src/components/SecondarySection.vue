<template>
  <section class="section-secondary">
    <h2 class="section-secondary__title">
      Hay un mundo<br />
      <span class="section-secondary__title--special"> ENORME</span>
    </h2>
    <div class="section-secondary__images"></div>
    <div class="section-secondary__networks">
      <div>
        <img src="/assets/images/icon-0.svg" />
        <div>
          <h3>Unforgettable experiences</h3>
          <p>Creating your trip is entirely collaborative and our Travel</p>
        </div>
      </div>
      <div>
        <img src="/assets/images/icon-1.svg" />
        <div>
          <h3>Unforgettable experiences</h3>
          <p>Creating your trip is entirely collaborative and our Travel</p>
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

  .section-secondary__networks {
    margin: 0 auto;
    width: 330px;
  }
}
</style>
