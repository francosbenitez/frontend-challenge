<template>
  <div id="app">
    <PrimarySectionDescription />
    <PrimarySectionImage />
  </div>
</template>

<script>
import PrimarySectionDescription from "./components/PrimarySectionDescription.vue";
import PrimarySectionImage from "./components/PrimarySectionImage.vue";

export default {
  name: "App",
  components: {
    PrimarySectionDescription,
    PrimarySectionImage,
  },
};
</script>
