<template>
  <section class="pb-5">
    <div class="container">
      <h2 class="text-center pt-5">{{title}}</h2>
    </div>

    <div id="cd-timeline" class="cd-container">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "TANULÁSI ÚTVONAL"
    }
  }
};
</script>

<style scoped>
</style>
