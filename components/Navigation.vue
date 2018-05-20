<template>
  <nav v-if="theme === 'logo'" class="navbar fixed-top">
    <nuxt-link class="navbar-brand" to="/">
      <img width="40px" src="~/assets/logo-ikon.svg" alt="NetAcademia Oktatóközpont Kft."
           style="background-color: transparent;"/>
    </nuxt-link>
  </nav>
  <nav v-else class="navbar fixed-top navbar-expand-md" :class="themeClass.nav">
    <nuxt-link class="navbar-brand" to="/">
      <img width="40px" src="~/assets/logo-ikon.svg" alt="NetAcademia Oktatóközpont Kft."/>
    </nuxt-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul class="navbar-nav ml-auto">
        <!--<ul class="navbar-nav mx-auto">-->
        <li class="nav-item flex-center">
          <a class="nav-link" href="/tanfolyamkeresov2">Tanfolyamkereső</a>
        </li>
        <li class="nav-item flex-center">
          <a class="nav-link" href="/indulotanfolyamok">Induló tanfolyamok</a>
        </li>
        <li class="nav-item flex-center">
          <nuxt-link class="nav-link" to="/certificate">NetAcademia Certificate</nuxt-link>
        </li>
        <li class="nav-item flex-center">
          <nuxt-link class="nav-link" to="/lenyugozo-tanfolyamok">Lenyűgöző tanfolyamok</nuxt-link>
        </li>
        <li class="nav-item flex-center">
          <nuxt-link class="nav-link" to="/ultimateakcio">Akció</nuxt-link>
        </li>
        <li class="nav-item flex-center">
          <nuxt-link class="nav-link" to="/elofizetes">Előfizetés</nuxt-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li v-if="!user.isLoggedIn">
          <a class="nav-link text-center" :href="loginUrl">Bejelentkezés</a>
        </li>
        <li class="nav-item dropdown text-center" v-else>
          <nuxt-link class="nav-link dropdown-toggle" to="" id="navbarDropdownMenuLink" data-toggle="dropdown">
            {{user.name}}
          </nuxt-link>
          <div class="dropdown-menu" :class="themeClass.dropdownMenu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" :class="themeClass.dropdownItem"
               href="/Adataim">Profil</a>
            <button class="dropdown-item" :class="themeClass.dropdownItem" @click.prevent="logOut">
              Kijelentkezes
            </button>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { AUTH_LOGOUT_ACTION, AUTH_REQ_ACTION } from "../store/user";
import { mapState } from "vuex";

export default {
  props: {
    theme: {
      type: String,
      default: "light",
      validator: function(val) {
        return ["light", "dark", "transparent", "logo"].indexOf(val) !== -1;
      }
    }
  },
  computed: {
    ...mapState({
      user: state => state.user,
      loginUrl(state) {
        return (
          `${state.url.backend}${state.url.login}` +
          `?returnUrl=${state.url.base}${this.$route.path}`
        );
      }
    }),
    themeClass: function() {
      switch (this.theme) {
        case "transparent":
          return {
            nav: ["navbar-dark", "bg-under-md"],
            dropdownMenu: ["bg-under-md"],
            dropdownItem: ["text-light-under-md"]
          };
        case "dark":
          return {
            nav: ["navbar-dark", "bg-dark"],
            dropdownMenu: ["bg-dark"],
            dropdownItem: ["text-light dark-hover"]
          };
        default:
          return {
            nav: ["navbar-light", "bg-light"],
            dropdownMenu: [],
            dropdownItem: []
          };
      }
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch(`user/${AUTH_LOGOUT_ACTION}`);
    }
  },
  mounted: function() {
    this.$store.dispatch(`user/${AUTH_REQ_ACTION}`);
  }
};
</script>
<style>
.dark-hover:hover {
  background-color: #999c9f;
}

@media (max-width: 767px) {
  .bg-under-md {
    background-color: #343a40;
  }

  .text-light-under-md {
    color: #f8f9fa;
  }
}
</style>
