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
import PrimarySectionImage from "@/components/PrimarySectionImage.vue";
import PrimarySectionButtons from "@/components/PrimarySectionButtons.vue";
import PrimarySectionTexts from "@/components/PrimarySectionTexts.vue";

export default {
  components: {
    PrimarySectionImage,
    PrimarySectionTexts,
    PrimarySectionButtons,
  },
  props: {
    url: Number,
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
.section-primary {
  background-color: $color__primary;
  color: $color__white;

  @media (min-width: $breakpoint--md) {
    display: flex;
    flex-wrap: wrap;
    /* margin-left: -15px;
    margin-right: -15px; */
  }
}
</style>
