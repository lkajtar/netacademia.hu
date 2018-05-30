<template>
  <main>
    <video-bg
      :sources="['https://player.vimeo.com/external/264778690.hd.mp4?s=8b80ecb93aeb209e06951980b8d335424dc83c37&profile_id=174']"
      img="/background.jpg">

      <div>
        <div class="flex-center flex-column">
          <h1 class="text-center">Teremtsd meg a jövőd!</h1>
          <div class="flex-center flex-wrap mt-2 mt-md-4">
            <nuxt-link class="gomb gomb-grey" to="/elofizetes#kepzes">Képzéseink</nuxt-link>
            <nuxt-link class="gomb gomb-grey" to="/elofizetes#elofizetes">Előfizetés</nuxt-link>
            <a class="gomb gomb-red" href="https://app.netacademia.hu/oktatas-unnepe">Oktatásünnep</a>
          </div>
          <br/>
          <div class="hirlev">
            <a href="https://app.netacademia.hu/www.netacademia.hu_NewsLetter">
              Hírlevél-feliratkozás
            </a>
          </div>
        </div>

        <div class="lablec fixed-bottom flex-center">
          <span class="d-none d-sm-block">© NetAcademia 1998-{{ currentYear }}</span>
          <span>
          <a href="https://app.netacademia.hu/GeneralTermsAndConditions/Subscription">ÁSZF</a>
        </span>
          <span>
          <a href="https://app.netacademia.hu/GeneralTermsAndConditions/PrivacyStatement">Adatvédelem</a>
        </span>
          <span class="d-none d-sm-block">
          <a href="https://app.netacademia.hu/kapcsolat" class="hideonmobile">Kapcsolat</a>
        </span>
          <span>
          <a href="https://app.netacademia.hu/oktato">Jelentkezz oktatónak!</a>
        </span>
        </div>
      </div>
    </video-bg>
  </main>
</template>

<script>
import VideoBg from "~/components/VideoBG";
import { GtmPageLoad } from "~/components/mixins/GtmPageLoad";

export default {
  name: "landing",
  layout: "landing",
  mixins: [GtmPageLoad("Főoldal")],
  components: { VideoBg },
  computed: {
    currentYear: function() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: "Work sans", Arial;
  color: white;
  font-size: 16px;
}

a {
  color: white;
  text-decoration: none;
}

h1 {
  font-size: 3rem;
  font-weight: 300;
}

.lablec {
  font-family: Arial;
  font-size: 14px;
  margin-bottom: 5px;
}

.lablec a {
  margin: 0px 10px;
  text-decoration: none;
}

.lablec a:hover {
  color: rgb(203, 203, 203);
  transition-duration: 0.5s;
}

.gomb {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 13rem;
  height: 1rem;
  padding: 1.5rem;
  margin: 0.75rem;
  font-family: Arial;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  border: 1px solid transparent;
}

.gomb:hover {
  border: 1px solid white;
  transition-duration: 0.5s;
}

.gomb-grey {
  background: rgba(0, 0, 0, 0.5);
}

.gomb-red {
  background: rgba(255, 0, 0, 0.6);
}

.hirlev {
  margin-top: 1.5rem;
  text-decoration: none;
  font-family: Arial;
  display: inline-block;
}

.hirlev a:hover {
  color: rgb(203, 203, 203);
  transition-duration: 0.5s;
}

.lablec {
  font-family: Arial;
  font-size: 14px;
  margin-bottom: 5px;
  text-align: center;
}

.lablec a {
  margin: 0px 10px;
  text-decoration: none;
}

.lablec a:hover {
  color: rgb(203, 203, 203);
  transition-duration: 0.5s;
}

@media (max-width: 340px) {
  .gomb {
    margin: 2px;
    padding: 1.25rem;
  }

  .lablec {
    font-size: 12px;
  }

  .hirlev {
    margin-top: 0.1rem;
  }
}
</style>
