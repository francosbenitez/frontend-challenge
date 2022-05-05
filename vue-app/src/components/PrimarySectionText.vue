<template>
  <div>
    <h1>{{ title }}</h1>
    <p>
      Lorem Ipsum has been the industry’s standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was pop
    </p>
    <div>
      <img src="/assets/images/facebook.svg" />
      <img src="/assets/images/linkedin.svg" />
      <img src="/assets/images/twitter.svg" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>
