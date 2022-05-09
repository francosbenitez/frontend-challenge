<template>
  <div id="app">
    <div class="sections-wrapper">
      <PrimarySection
        @on-moving-to-left="receiveBtnLeftAction"
        @on-moving-to-right="receiveBtnRightAction"
        :image="image"
        :title="title"
      />
      <SecondarySection />
    </div>
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
    };
  },
  methods: {
    receiveBtnRightAction() {
      this.step++;

      if (this.step > 2) {
        this.step = 0;
      }

      this.image = this.images[this.step];
      this.title = this.titles[this.step];
    },
    receiveBtnLeftAction() {
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
  position: relative;
  width: 100%;
}

.sections-wrapper {
  min-height: 100vh;
  /* position: relative;
  width: 100%; */
}
</style>
