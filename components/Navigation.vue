<template>
  <nav class="navbar fixed-top navbar-expand-md" :class="navThemeClass">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <nuxt-link class="navbar-brand" href="/">
      <img width="40px" src="~/assets/logo-ikon.svg" alt="NetAcademia Oktatóközpont Kft." />
    </nuxt-link>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav mx-auto">
        <nuxt-link class="nav-item nav-link" to="/elofizetes">Előfizetés</nuxt-link>
        <a class="nav-item nav-link" href="/indulotanfolyamok">Induló tanfolyamok</a>
        <a class="nav-item nav-link" href="/tanfolyamkeresov2">Tanfolyamkereső</a>
        <a class="nav-item nav-link" href="/ultimateakcio">Akció</a>
        <nuxt-link class="nav-item nav-link" to="/certificate">NetAcademia vizsga</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: 'light',
      validator: function(val) {
        return ['light', 'dark'].indexOf(val) !== -1;
      }
    }
  },
  computed: {
    navThemeClass: function() {
      return this.theme === 'light'
        ? ['navbar-light', 'bg-light']
        : ['navbar-dark', 'bg-dark'];
    }
  }
};
</script>

<style>

</style>
