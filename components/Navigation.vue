<template>
  <nav class="navbar fixed-top navbar-expand-md" :class="navThemeClass">
    <nuxt-link class="navbar-brand" to="/">
      <img width="40px" src="~/assets/logo-ikon.svg" alt="NetAcademia Oktatóközpont Kft."/>
    </nuxt-link>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <!--<ul class="navbar-nav ml-auto">-->
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link" href="/tanfolyamkeresov2">Tanfolyamkereső</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/indulotanfolyamok">Induló tanfolyamok</a>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/certificate">NetAcademia Certificate</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/lenyugozo-tanfolyamok">Lenyűgöző tanfolyamok</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/ultimateakcio">Akció</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/elofizetes">Előfizetés</nuxt-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://app.netacademia.hu/Adataim">Adataim</a>
        </li>
      </ul>
      <!--<ul class="navbar-nav ml-auto">-->
        <!--<li v-if="!isLoggedIn">-->
          <!--<nuxt-link class="nav-link" :to="`/Account/Logon?returnUrl=${this.$route.path}`">Bejelentkezés</nuxt-link>-->
        <!--</li>-->
        <!--<li class="nav-item dropdown" v-else>-->
          <!--<nuxt-link class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">-->
            <!--{{user.name}}-->
          <!--</nuxt-link>-->
          <!--<div class="dropdown-menu" :class="{'bg-dark': isDark}" aria-labelledby="navbarDropdownMenuLink">-->
            <!--<nuxt-link class="dropdown-item" :class="{'text-light dark-hover': isDark}" to="/Adataim">Profil</nuxt-link>-->
            <!--<nuxt-link class="dropdown-item" :class="{'text-light dark-hover': isDark}" to="#" @click.prevent="logOut">-->
              <!--Kijelentkezes-->
            <!--</nuxt-link>-->
          <!--</div>-->
        <!--</li>-->
      <!--</ul>-->
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: "light",
      validator: function(val) {
        return ["light", "dark", "transparent"].indexOf(val) !== -1;
      }
    }
  },
  // mounted: function() {
  //   // TODO: base url-eket cserelni ha meglesz environment
  //   fetch("https://app.netacademia.hu/api/Profile/1.0.0/profile", {
  //     credentials: "include"
  //   })
  //     .then(r => {
  //       if (r.ok) {
  //         this.isLoggedIn = true;
  //
  //         r = r.json().then(r => {
  //           this.user.name = r.name ? r.name : "Felhasználó";
  //           if (r.email) this.user.email = r.email;
  //           return r;
  //         });
  //       }
  //       return r;
  //     })
  //     .catch(err => console.warn(err));
  // },
  // methods: {
  //   logOut() {
  //     // TODO: base url-eket cserelni ha meglesz environment
  //     fetch("https://app.netacademia.hu/Account/LogOffAjax", {
  //       method: "POST"
  //     }).then(r => {
  //       if (r.ok) {
  //         this.isLoggedIn = false;
  //         this.user.name = "";
  //         this.user.email = "";
  //       } else {
  //         console.log("logout para");
  //       }
  //     });
  //   }
  // },
  data: function() {
    return {
      // isLoggedIn: false,
      // user: {
      //   name: "",
      //   email: ""
      // }
    };
  },
  computed: {
    navThemeClass: function() {
      switch (this.theme) {
        case "transparent":
          return ["navbar-dark"];
        case "dark":
          return ["navbar-dark", "bg-dark"];
        default:
          return ["navbar-light", "bg-light"];
      }
    },
    // isDark: function() {
    //   return this.theme === "dark";
    // }
  }
};
</script>
<style>
/*.dark-hover:hover {*/
  /*background-color: #999c9f;*/
/*}*/
</style>
