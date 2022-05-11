<template>
  <section
    class="section--primary"
    :class="{
      'section--primary__initial-animation': !slideRight && !slideLeft,
    }"
  >
    <PrimarySectionImage
      :image="image"
      :slideLeft="slideLeft"
      :slideRight="slideRight"
    />
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
    slideRight: Boolean,
    slideLeft: Boolean,
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

  @media (min-width: $breakpoint--lg) {
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }
}

.section--primary__initial-animation {
  .section--primary__image-background {
    -webkit-animation: scale-in-br 0.8s ease-out both;
    animation: scale-in-br 0.8s ease-out both;
    -webkit-animation-delay: 0.05s;
    animation-delay: 0.05s;
  }

  .section--primary__menu {
    -webkit-animation: slide-in-right 0.8s ease-out both;
    animation: slide-in-right 0.8s ease-out both;
    -webkit-animation-delay: 0.25s;
    animation-delay: 0.25s;
  }

  .section--primary__btn--left {
    -webkit-animation: slide-in-bottom 0.8s ease-out both;
    animation: slide-in-bottom 0.8s ease-out both;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }

  .section--primary__btn--right {
    -webkit-animation: slide-in-bottom 0.8s ease-out both;
    animation: slide-in-bottom 0.8s ease-out both;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }

  .section--primary__title {
    -webkit-animation: slide-in-bottom 0.8s ease-out both;
    animation: slide-in-bottom 0.8s ease-out both;
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
  }

  .section--primary__line {
    -webkit-animation: slide-in-bottom 0.8s ease-out both;
    animation: slide-in-bottom 0.8s ease-out both;
    -webkit-animation-delay: 0.15s;
    animation-delay: 0.15s;
  }

  .section--primary__description {
    -webkit-animation: slide-in-bottom 0.8s ease-out both;
    animation: slide-in-bottom 0.8s ease-out both;
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }

  .section--primary__networks {
    -webkit-animation: slide-in-bottom 0.8s ease-out both;
    animation: slide-in-bottom 0.8s ease-out both;
    -webkit-animation-delay: 0.25s;
    animation-delay: 0.25s;
  }
}
</style>
