<template>
  <div>
    <Navigation theme="dark"></Navigation>
    <nuxt/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: { Navigation, Footer }
};
</script>

<style>
</style>
