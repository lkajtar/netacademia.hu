<template>
  <main>
    <CertiTopHero class="hero-bg"
                  page-title="Webfejlesztő leszek!"
                  lead-text="- vue edition -"
                  sales-pitch-title="Projektalapú front-end fejlesztés az alapoktól"
                  sales-pitch-text="Tanfolyamsorozatunkban a front-end fejlesztés alapjait projekt alapon sajátíthatod el.
        Elkészítjük a fizu.hu weboldalt, melynek célja, hogy fizetéssel és munkával kapcsolatos adatokat kérjen a
        felhasználóktól, majd ezen adatokat felhasználva különböző statisztikák elkészítésére adjon lehetőséget.
        Megismerheted, hogyan tudsz összeállítani egy olyan összetett alkalmazást, ami lekezeli a regisztrációkat, a
        ki- és bejelentkezéseket, statisztikákat számol, diagrammokat rajzol és chatet működtet. A képzések során
        megtanulod, hogyan készíts a projektedből mobilapp és desktop alkalmazást is."
    >
      <img slot="lead-icon" src="~/assets/webfejleszto-vuejs/vue-icon.png" alt="vue-logo" class="img-fluid" width="60">
      <a slot="call-to-action" href="#reszletek" class="btn-cus-border btn-border-green btn-lg ml-3">Részletek</a>
    </CertiTopHero>

    <CertiFeatures price="Most csak 29.900 Ft"></CertiFeatures>

    <TimelineContainer id="reszletek">
      <TimelineCard title="Bootstrap 4"
                    length="20 óra"
                    price="29.900 Ft+áfa"
                    description="A Bootstrap egy olyan keretrendszer, aminek a használatával rendkívül gyorsan tudunk könnyen
                    átlátható és látványos weboldalakat készíteni. A kurzus során projekt alapon, gyakorlati módon
                    ismerjük meg a HTML és CSS kódolást, és a Bootstrap segítségével felépítünk egy ütős oldalt.
                    Ismerd meg a webfejlesztés alapjait és készítsd el a fizu.hu-t!"
                    logo-bg="#5d3f85"
                    card-header-bg="#5d3f85"
                    direction="left"
      >
        <img slot="picture" src="~/assets/webfejleszto-vuejs/bootstrap-icon.png" alt="bootstrap">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.bootstrap"
                  href="https://netacademia.hu/Tanfolyam/2018bt4-bootstrap4"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="jQuery - alapozás"
                    length="8 óra"
                    price="19.900 Ft+áfa"
                    description="Megismerkedünk közelebbről a jQuery könyvtárral. Belenézünk hogyan lehet variálni a korábban használt Bootstrap
                    elemeket. Validálni fogunk formokat, dobunk fel a felhasználóknak modalokat és bizonyos szűrők mentén adatokat
                    jelenítünk meg."
                    logo-bg="#ffffff"
                    card-header-bg="#21609b"
                    direction="right"
      >
        <img slot="picture" src="~/assets/webfejleszto-vuejs/jquery-icon.png" alt="jquery">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.jquery"
                  href="https://netacademia.hu/Tanfolyam/2018jquery-jquery---alapozas"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="Javascript - Szent Habakuk, hisz játszom!"
                    length="16 óra"
                    price="29.900 Ft+áfa"
                    description="Lemegyünk az alap JavaScript szintjére mindenféle könyvtár és keretrendszer nélkül. Kis játékos
                    projekteket valósítunk meg, melyeken keresztül megismerjük a JavaScript és a front-end fejlesztés
                    alapjait. Ez a tudás a későbbiekben felbecsülhetetlen értékkel fog bírni számunkra, hiszen érteni
                    fogjuk azt is, ahol a többiek csak pislognak."
                    logo-bg="#f0ca45"
                    card-header-bg="#f0ca45"
                    direction="left"
      >
        <img slot="picture" src="~/assets/webfejleszto-vuejs/javascript-icon.png" alt="javascript">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.javascript"
                  href="ttps://www.netacademia.hu/Tanfolyam/2018javascript-javascript---szent-habakuk-hisz-jatszom"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="GIT - fájdalommentes verziókövetés"
                    length="4 óra"
                    price="9.900 Ft+áfa"
                    description="A verziókövetés a projektünkben az, mint a korrektúra a word-ben. Mindig lesznek olyan helyzetek
                    a munkánk során, amikor rájövünk, hogy vissza kell állni egy korábbi állapotra, vagy össze kell
                    fésülnünk a munkánkat más fejlesztőkével. Ebben van segítségünkre a GIT."
                    logo-bg="#f05133"
                    card-header-bg="#f05133"
                    direction="right"
      >
        <img slot="picture" src="~/assets/webfejleszto-vuejs/git-icon.png" alt="git">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.git"
                  href="https://netacademia.hu/Tanfolyam/2018GIT-git---fajdalommentes-verziokovetes"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="VueJS - Ja, hogy ezt így is lehet"
                    length="16 óra"
                    price="19.900 Ft+áfa"
                    description="Ebben a kurzusban elkezdjük felépíteni a fizu.hu projektet, miközben megismerjük magát a VueJS
                    frameworköt is. A feladatok az elején ismerősek lesznek, mert a jQuery-s részek átírásával fogunk
                    kezdeni, majd tovább haladunk a kész alkalmazás irányába."
                    logo-bg="#ffffff"
                    card-header-bg="#41b883"
                    direction="left"
      >
        <img slot="picture" src="~/assets/webfejleszto-vuejs/vue-icon.png" alt="vue">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.vue"
                  href="https://www.netacademia.hu/Tanfolyam/2018vuejs2-vuejs---ja-hogy-ezt-igy-is-lehet"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="Vue - A végtelenbe és tovább!"
                    length="16 óra"
                    price="29.900 Ft+áfa"
                    description="Haladunk a projektünkkel tovább, közben a szakmai mélységekbe is belekukkantunk. Megnézzük,
                    hogy mi mindennel tudjuk biztosítani a projektünk számára, hogy túlélje a változó igényeket, az
                    elhúzódó fejlesztési időt és közben támogasson minket a józan eszünk megőrzésében is."
                    logo-bg="#ffffff"
                    card-header-bg="#41b883"
                    direction="right"
      >
        <img slot="picture" src="~/assets/webfejleszto-vuejs/vue-icon.png" alt="vue">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.vueAdvanced"
                  href="https://www.netacademia.hu/Tanfolyam/2018vuejs3-vue---a-vegtelenbe-es-tovabb"
        >Részletek...
        </gtm-link>
      </TimelineCard>

    </TimelineContainer>
    <div class="row justify-content-center text-center py-5 mx-0 align-self-center vue-gtm-app">
      <div class="col-12 col-lg-3 p-4 bg-card m-2 align-self-center py-5 px-3">
        <p class="mb-4">Vedd meg a Webfejlesztő leszek! Angular editiont és a Webfejlesztő leszek! Vue.js editiont
          most
          <br>bruttó
          <span class="ar">39.800 </span>Ft!
        </p>
        <gtm-link isAddToCart :gtm-data="GTMProductCollection.addToCartVueAndAngular"
                  href="https://netacademia.hu/Subscription/Create/webfejleszto-leszek-angular-es-vuejs"
                  class="btn-cus btn-cus-orange"
        >Megveszem!
        </gtm-link>
      </div>
      <div class="col-12 col-lg-3 p-4 bg-card m-2 align-self-center py-5 px-3">
        <p class="mb-4">Van már Webfejlesztő leszek! előfizetésed? Akkor neked a Webfejlesztő leszek! Vue.js edition
          most csak
          <br>bruttó
          <span class="ar">9.900 </span>Ft!
        </p>
        <gtm-link isAddToCart :gtm-data="GTMProductCollection.addToCartVueAsExtension"
                  href="https://www.netacademia.hu/Subscription/Create/0ceafbab-4b10-4835-9a25-f4a4876690b6"
                  class="btn-cus btn-cus-orange mb-4"
        >Megveszem!
        </gtm-link>
      </div>
      <div class="col-12 col-lg-3 p-4 bg-card m-2 align-self-center py-5 px-3">
        <p class=" mb-4">Webfejlesztő leszek! – Vue edition – tanfolyamcsomag ára
          <br>bruttó
          <span class="ar">29.900</span> Ft!
        </p>
        <gtm-link isAddToCart :gtm-data="GTMProductCollection.addToCartVue"
                  href="https://netacademia.hu/Subscription/Create/webfejleszto-leszek-vuejs-edition"
                  class="btn-cus btn-cus-orange mb-4"
        >Megveszem!
        </gtm-link>
      </div>
    </div>

    <!-- certificate, mas kurzusok -->
    <section class="bg-light">
      <div class="container">
        <div class="row py-5">
          <div class="col-12 col-lg-7 mx-auto">
            <div class="row">
              <div class="col-11 mx-auto my-4">
                <h4 class="pb-3">Szerezz NetAcademia Certificate-et!</h4>
                <p class="mb-3">A NetAcademia Certificate-tel egy olyan tanúsítványt hoztunk létre, mely egyaránt
                  leképezi oktatási hozzáállásunkat és módszertanunkat: gyakorlatias és projekt-alapú. A sikeres vizsga
                  bizonyíték arra, hogy képes vagy statikus és dinamikus reszponzív weboldalak készítésére,
                  elboldogulsz a webprogramozás és az alkalmazásfejlesztés világában is.
                </p>
                <nuxt-link to="/certificate">Bővebb információ</nuxt-link>
              </div>
              <div class="col-11 mx-auto col-lg-11 my-4">
                <h4 class="pb-3">Webfejlesztő leszek!
                  <br>
                  <span>-angular edition-</span>
                </h4>
                <p class="mb-3">Ebben a tanfolyamsorozatunkban a főszerepet az Angular keretrendszer kapta, és a kurzus
                  során egy Vatera-szerű
                  alkalmazást készíthetsz el velünk.</p>
                <nuxt-link to="/webfejleszto-angular">Bővebben az Angular edition tanfolyamról...</nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-12 mx-auto col-lg-5 border p-5 ulticol text-center my-auto">
            <h2>Ultimate kedvezmény</h2>
            <p class="mt-4">Van már Webfejlesztő leszek előfizetésed? Tanulj tovább full-stack fejlesztővé! Írj
              nekünk az <span class="text-success">iroda@netacademia.net</span> e-mail címre, és a Webfejlesztő útvonal
              árát most beszámítjuk Ultimate előfizetésünkbe!
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- beharangozo -->
    <div class="container">
      <div class="row justify-content-center py-5">
        <div class="col-11 col-lg-8">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/f1dDEuFqrsI"
                    allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import TimelineCard from "~/components/TimelineCard";
import GtmLink from "~/components/GtmLink";
import TimelineContainer from "../components/TimelineContainer";
import CertiFeatures from "../components/CertiFeatures";
import CertiTopHero from "../components/CertiTopHero";

export default {
  layout: "bs-logo-footer",
  components: {
    CertiTopHero,
    CertiFeatures,
    TimelineContainer,
    TimelineCard,
    GtmLink
  },
  data: function() {
    return {
      GTMProductCollection: {
        addToCartVueAndAngular: {
          name: "Webfejlesztő leszek! Angular + VueJS 12 hónapos előfizetés",
          id: "2b9ffe78-a73f-44e1-ad90-50ae71661efe",
          price: "39800",
          brand: "NetAcademia",
          category: "Elofizetes",
          variant: "",
          quantity: 1
        },
        addToCartVueAsExtension: {
          name: "Webfejlesztő leszek! VueJS Edition 12 hónapos előfizetés",
          id: "0ceafbab-4b10-4835-9a25-f4a4876690b6",
          price: "9900",
          brand: "NetAcademia",
          category: "Elofizetes",
          variant: "",
          quantity: 1
        },
        addToCartVue: {
          name: "Webfejlesztő leszek! VueJS Edition 12 hónapos előfizetés",
          id: "0ceafbab-4b10-4835-9a25-f4a4876690b6",
          price: "29900",
          brand: "NetAcademia",
          category: "Elofizetes",
          variant: "",
          quantity: 1
        },
        bootstrap: {
          name: "Bootstrap 4",
          id: "2018bt4-bootstrap4",
          price: "37973",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Webfejlesztő leszek! VueJS edition",
          position: 1,
          PCategories: [
            "Webfejlesztő leszek! Angular + VueJS",
            "Webfejlesztő leszek! VueJS Edition"
          ]
        },
        jquery: {
          name: "jQuery - alapozás",
          id: "2018jquery-jquery---alapozas",
          price: "25273",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Webfejlesztő leszek! VueJS edition",
          position: 2,
          PCategories: [
            "Webfejlesztő leszek! Angular + VueJS",
            "Webfejlesztő leszek! VueJS Edition"
          ]
        },
        javascript: {
          name: "Javascript - Szent Habakuk, hisz játszom!",
          id: "2018javascript-javascript---szent-habakuk-hisz-jatszom",
          price: "37973",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Webfejlesztő leszek! VueJS edition",
          position: 3,
          PCategories: [
            "Webfejlesztő leszek! Angular + VueJS",
            "Webfejlesztő leszek! VueJS Edition"
          ]
        },
        git: {
          name: "GIT - fájdalommentes verziókövetés",
          id: "2018GIT-git---fajdalommentes-verziokovetes",
          price: "12573",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Webfejlesztő leszek! VueJS edition",
          position: 4,
          PCategories: [
            "Webfejlesztő leszek! Angular + VueJS",
            "Webfejlesztő leszek! VueJS Edition"
          ]
        },
        vue: {
          name: "VueJS - Ja hogy ezt így is lehet",
          id: "2018vuejs2-vuejs---ja-hogy-ezt-igy-is-lehet",
          price: "25273",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Webfejlesztő leszek! VueJS edition",
          position: 5,
          PCategories: [
            "Webfejlesztő leszek! Angular + VueJS",
            "Webfejlesztő leszek! VueJS Edition"
          ]
        },
        vueAdvanced: {
          name: "Vue - A végtelenbe és tovább!",
          id: "2018vuejs3-vue---a-vegtelenbe-es-tovabb",
          price: "37973",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Webfejlesztő leszek! VueJS edition",
          position: 6,
          PCategories: [
            "Webfejlesztő leszek! Angular + VueJS",
            "Webfejlesztő leszek! VueJS Edition"
          ]
        }
      }
    };
  }
};
</script>

<style>
main {
  font-size: 100%;
  background-color: #e9f0f5;
}

.hero-bg {
  background-color: #fafafa;
  background-image: linear-gradient(
      rgba(43, 45, 66, 0.65),
      rgba(43, 45, 66, 0.65)
    ),
    url("~/assets/webfejleszto-vuejs/background.jpg");
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
}

.bg-card {
  background-color: #35495e;
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 400;
  border-radius: 2px;
}

.ulticol {
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

h1,
h2 {
  font-weight: bold;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: -1px;
  line-height: 0.9;
}

h3 {
  font-size: 1.4rem;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: bold;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
}

p {
  line-height: 1.6;
  letter-spacing: 1px;
}
</style>
