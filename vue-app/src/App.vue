<template>
  <div id="app">
    <PrimarySection
      @on-moving-to-left="receiveBtnLeftAction"
      @on-moving-to-right="receiveBtnRightAction"
      :url="url"
    />
  </div>
</template>

<script>
import PrimarySection from "./components/PrimarySection.vue";
import "./assets/scss/default.scss";

export default {
  name: "App",
  components: {
    PrimarySection,
  },
  data() {
    return {
      url: "/assets/images/cover-0.jpg",
      title: "",
      description: "",
      step: 0,
    };
  },
  methods: {
    receiveBtnRightAction() {
      console.log("btn right action");
      this.step++;
      if (this.step > 2) {
        this.step = 0;
      }

      ///////////////////////////
      const urls = [
        "/assets/images/cover-0.jpg",
        "/assets/images/cover-1.jpg",
        "/assets/images/cover-2.jpg",
      ];

      this.url = urls[this.step];
      ///////////////////////////

      console.log("this.step", this.step);
    },
    receiveBtnLeftAction() {
      console.log("btn left action");
      this.step--;
      if (this.step < 0) {
        this.step = 2;
      }

      ///////////////////////////
      const urls = [
        "/assets/images/cover-0.jpg",
        "/assets/images/cover-1.jpg",
        "/assets/images/cover-2.jpg",
      ];

      this.url = urls[this.step];
      ///////////////////////////

      console.log("this.step", this.step);
    },
  },
};
</script>
