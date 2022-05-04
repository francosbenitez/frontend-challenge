<template>
  <section>
    <PrimarySectionImage />
    <PrimarySectionDescription />

    <!-- <li role="presentation">
          <a href="#" @click="currentView='primary-section-image'">Manage Posts</a>
        </li>
        <li role="presentation">
          <a href="#" @click="currentView='primary-section-description'">Create Post</a>
        </li>

    <div>
      <component :is="currentView" transition="fade" transition-mode="out-in"></component>
    </div> -->
  </section>
</template>

<script>
import PrimarySectionImage from "./PrimarySectionImage.vue";
import PrimarySectionDescription from "./PrimarySectionDescription.vue";

export default {
  components: {
    PrimarySectionImage,
    PrimarySectionDescription,
  },
};
</script>
