<template>
  <section class="section--primary">
    <PrimarySectionImage :image="image" />
    <PrimarySectionButtons
      @on-click-left="receiveOnClickLeft"
      @on-click-right="receiveOnClickRight"
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
    image: Number,
    title: String,
  },
  methods: {
    receiveOnClickRight() {
      this.$emit("on-click-right");
    },
    receiveOnClickLeft() {
      this.$emit("on-click-left");
    },
  },
};
</script>

<style lang="scss">
.section--primary {
  background-color: $color__primary;
  color: $color__white;

  @media (min-width: $breakpoint--md) {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
