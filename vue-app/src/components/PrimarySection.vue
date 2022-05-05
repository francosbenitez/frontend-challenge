<template>
  <section>
    <PrimarySectionImage :url="url" />
    <PrimarySectionButtons
      @on-moving-to-left="receiveBtnLeftAction"
      @on-moving-to-right="receiveBtnRightAction"
    />
    <PrimarySectionDescription />
  </section>
</template>

<script>
import PrimarySectionImage from "./PrimarySectionImage.vue";
import PrimarySectionButtons from "./PrimarySectionButtons.vue";
import PrimarySectionDescription from "./PrimarySectionDescription.vue";

export default {
  components: {
    PrimarySectionImage,
    PrimarySectionDescription,
    PrimarySectionButtons,
  },
  props: {
    url: String,
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

<style lang="scss" scoped></style>
