<template>
  <div>
    <button class="btn-left"></button>
    <button class="btn-right"></button>
  </div>
</template>

<style lang="scss">
.btn-left {
  width: 50px;
  height: 50px;
  background-color: transparent;

  &:before {
    width: 50px;
    height: 50px;
    content: "<";
    /* background: url(../assets/images/icon1.svg) no-repeat; */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
  }
}

.btn-right {
  width: 50px;
  height: 50px;
  background-color: transparent;

  &:before {
    width: 50px;
    height: 50px;
    content: ">";
    /* background: url(../assets/images/icon1.svg) no-repeat; */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
  }
}
</style>
