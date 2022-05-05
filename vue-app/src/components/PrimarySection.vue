<template>
  <section class="section__primary">
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

<style lang="scss"></style>
