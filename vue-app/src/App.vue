<template>
  <div id="app">
    <PrimarySection
      @on-click-left="receiveOnClickLeft"
      @on-click-right="receiveOnClickRight"
      :image="image"
      :title="title"
      :slideRight="slideRight"
      :slideLeft="slideLeft"
    />
    <SecondarySection />
  </div>
</template>

<script>
import PrimarySection from "@/components/PrimarySection.vue";
import SecondarySection from "@/components/SecondarySection.vue";

export default {
  name: "App",
  components: {
    PrimarySection,
    SecondarySection,
  },
  data() {
    return {
      image: 0,
      images: [0, 1, 2],
      title: "Crea un<br /> impacto positivo",
      titles: [
        "Crea un<br /> impacto positivo",
        "Elije tu<br /> próximo destino",
        "Encuentra<br /> la inspiración",
      ],
      step: 0,
      slideRight: false,
      slideLeft: false,
    };
  },
  watch: {
    image: function (newValue, prevValue) {
      if (newValue > prevValue || (newValue === 0 && prevValue === 2)) {
        this.slideRight = true;
        this.slideLeft = false;
      } else {
        this.slideRight = false;
        this.slideLeft = true;
      }
    },
  },
  methods: {
    receiveOnClickRight() {
      this.step++;

      if (this.step > 2) {
        this.step = 0;
      }

      this.image = this.images[this.step];
      this.title = this.titles[this.step];
    },
    receiveOnClickLeft() {
      this.step--;

      if (this.step < 0) {
        this.step = 2;
      }

      this.image = this.images[this.step];
      this.title = this.titles[this.step];
    },
  },
};
</script>

<style lang="scss">
#app {
  height: 100vh;
  min-height: 100vh;
  position: relative;
  width: 100%;
}
</style>
