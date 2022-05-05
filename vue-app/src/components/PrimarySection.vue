<template>
  <section class="section-primary">
    <PrimarySectionImage :url="url" />
    <PrimarySectionButtons
      @on-moving-to-left="receiveBtnLeftAction"
      @on-moving-to-right="receiveBtnRightAction"
    />
    <PrimarySectionText :title="title" />
  </section>
</template>

<script>
import PrimarySectionImage from "./PrimarySectionImage.vue";
import PrimarySectionButtons from "./PrimarySectionButtons.vue";
import PrimarySectionText from "./PrimarySectionText.vue";

export default {
  components: {
    PrimarySectionImage,
    PrimarySectionText,
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

.section-primary {
  background-color: $color__primary;
  color: $color__white;
}
</style>
