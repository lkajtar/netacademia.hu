<template>
  <div>
    <nav class="navbar fixed-top">
      <nuxt-link class="navbar-brand" to="/"><img src="~/assets/logo-ikon.svg" height="50" alt="logo" style="background-color: transparent;"></nuxt-link>
    </nav>
    <nuxt/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";

export default {
  components: { Footer }
};
</script>

<style>
</style>
