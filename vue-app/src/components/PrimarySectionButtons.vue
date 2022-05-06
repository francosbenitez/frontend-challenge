<template>
  <div class="btn">
    <button class="btn--left" @click="onMovingToLeft"></button>
    <button class="btn--right" @click="onMovingToRight"></button>
  </div>
</template>

<script>
export default {
  methods: {
    onMovingToLeft() {
      this.$emit("on-moving-to-left");
    },
    onMovingToRight() {
      this.$emit("on-moving-to-right");
    },
  },
};
</script>

<style lang="scss">
$color__white: #ffffff;
$breakpoint--md: 768px;

.btn {
  position: relative;
  left: 75%;

  @media screen and (min-width: $breakpoint--md) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  button {
    cursor: pointer;
    border: none;
  }

  .btn--left {
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
      background-image: url("/assets/icons/chevron-left.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: 50%;
    }
  }

  .btn--right {
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
      background-image: url("/assets/icons/chevron-right.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: 50%;
    }
  }
}
</style>
