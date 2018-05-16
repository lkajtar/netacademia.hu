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
        <li v-if="!isLoggedIn">
          <a class="nav-link text-center" :href="loginUrl">Bejelentkezés</a>
          <!--<a class="nav-link" href="https://app.netacademia.hu/Account/Logon?returnUrl=http://localhost:3000/">Bejelentkezés</a>-->
        </li>
        <li class="nav-item dropdown text-center" v-else>
          <nuxt-link class="nav-link dropdown-toggle" to="" id="navbarDropdownMenuLink" data-toggle="dropdown">
            {{user.name}}
          </nuxt-link>
          <div class="dropdown-menu" :class="themeClass.dropdownMenu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" :class="themeClass.dropdownItem" href="https://app.netacademia.hu/Adataim">Profil</a>
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
  data: function() {
    return {
      isLoggedIn: false,
      user: {
        name: "",
        email: ""
      },
      loginUrl: `https://app.netacademia.hu/Account/Logon?returnUrl=https://www.netacademia.hu/netacademia.hu${
        this.$route.path
      }`
    };
  },
  computed: {
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
      // TODO: base url-eket cserelni ha meglesz environment
      fetch("https://app.netacademia.hu/Account/LogOffAjax", {
        method: "POST",
        credentials: "include"
      }).then(r => {
        if (r.ok) {
          this.isLoggedIn = false;
          this.user.name = "";
          this.user.email = "";
        } else {
          console.log("logout para");
        }
      });
    }
  },
  mounted: function() {
    // TODO: base url-eket cserelni ha meglesz environment
    fetch("https://app.netacademia.hu/api/Profile/1.0.0/profile", {
      credentials: "include"
    })
      .then(r => {
        if (r.ok) {
          this.isLoggedIn = true;
          return r.json();
        } else {
          throw "Server mondja: You shall not pass!";
        }
      })
      .then(r => {
        this.user.name = r.name ? r.name : "Felhasználó";
        if (r.email) this.user.email = r.email;
        return r;
      })
      .catch(err => console.warn(err));
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
