<template>
  <section>
    <PrimarySectionImage :url="url" />
    <PrimarySectionButtons />
    <PrimarySectionDescription />

    <!-- <transition name="fade" mode="out-in">
        <span key="1" class="float-right align-middle" v-if="!isOpenCreatives">
          <img class="w-h-10" src="/icons/filter_arrow_icon_gray.svg" alt="" />
        </span>
        <span key="2" class="float-right align-middle" v-else>
          <img class="w-h-10" src="/icons/filter_arrow_icon_top.svg" alt="" />
        </span>
      </transition> -->

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
import PrimarySectionButtons from "./PrimarySectionButtons.vue";
import PrimarySectionDescription from "./PrimarySectionDescription.vue";

export default {
  components: {
    PrimarySectionImage,
    PrimarySectionDescription,
    PrimarySectionButtons,
  },
  data() {
    return {
      url: "",
      title: "",
      description: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
