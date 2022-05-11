<template>
  <div id="app">
    <PrimarySection />
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
