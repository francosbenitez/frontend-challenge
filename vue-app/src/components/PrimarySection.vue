<template>
  <section class="section-primary">
    <PrimarySectionImage :url="url" />
    <PrimarySectionButtons
      @on-moving-to-left="receiveBtnLeftAction"
      @on-moving-to-right="receiveBtnRightAction"
    />
    <PrimarySectionTexts :title="title" />
  </section>
</template>

<script>
import PrimarySectionImage from "./PrimarySectionImage.vue";
import PrimarySectionButtons from "./PrimarySectionButtons.vue";
import PrimarySectionTexts from "./PrimarySectionTexts.vue";

export default {
  components: {
    PrimarySectionImage,
    PrimarySectionTexts,
    PrimarySectionButtons,
  },
  props: {
    url: String,
    title: String,
  },
  methods: {
    receiveBtnRightAction() {
      this.$emit("on-moving-to-right");
    },
    receiveBtnLeftAction() {
      this.$emit("on-moving-to-left");
    },
  },
};
</script>

<style lang="scss">
$color__primary: #335a39;
$color__white: #ffffff;
$breakpoint--md: 768px;

.section-primary {
  background-color: $color__primary;
  color: $color__white;

  @media screen and (min-width: $breakpoint--md) {
    display: flex;
    /* flex-wrap: wrap; */
    margin-left: -15px;
    margin-right: -15px;
  }
}
</style>
