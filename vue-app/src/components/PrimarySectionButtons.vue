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

.btn {
  position: absolute;
  right: 5%;
}

button {
  cursor: pointer;
}

.btn--left {
  width: 50px;
  height: 50px;
  background-color: $color__white;

  &:before {
    width: 13px;
    height: 22px;
    content: "<";
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
  }
}

.btn--right {
  width: 50px;
  height: 50px;
  background-color: $color__white;

  &:before {
    width: 13px;
    height: 22px;
    content: ">";
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
  }
}
</style>
