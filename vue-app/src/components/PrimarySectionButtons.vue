<template>
  <div class="section--primary__btn">
    <button
      class="section--primary__btn--left"
      :disabled="isTransitionHappening"
      @click="onClickLeft"
    ></button>
    <button
      class="section--primary__btn--right"
      :disabled="isTransitionHappening"
      @click="onClickRight"
    ></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTransitionHappening: false,
    };
  },
  methods: {
    onClickLeft() {
      this.isTransitionHappening = true;

      setTimeout(() => {
        this.isTransitionHappening = false;
      }, 800);

      this.$emit("on-click-left");
    },
    onClickRight() {
      this.isTransitionHappening = true;

      setTimeout(() => {
        this.isTransitionHappening = false;
      }, 800);

      this.$emit("on-click-right");
    },
  },
};
</script>

<style lang="scss">
.section--primary__btn {
  position: relative;
  display: inline-block;
  left: 60%;

  button {
    cursor: pointer;
    border: none;
  }

  .section--primary__btn--left {
    width: 50px;
    height: 50px;
    position: relative;
    background-color: $color__white;
    padding: 13.04px 18px 15.05px 18.07px;

    &:before {
      width: 13.29px;
      height: 21.91px;
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-image: url("../assets/icons/chevron-left.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: 50%;
    }
  }

  .section--primary__btn--right {
    width: 50px;
    height: 50px;
    background-color: $color__white;
    position: relative;
    bottom: 50px;
    padding: 13.04px 18px 15.05px 18.07px;

    &:before {
      width: 13.29px;
      height: 21.91px;
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-image: url("../assets/icons/chevron-right.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: 50%;
    }
  }

  @media (min-width: $breakpoint--sm) {
    left: 75%;
  }

  @media (min-width: $breakpoint--lg) {
    position: absolute;
    left: 56%;
    top: 86%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
}
</style>
