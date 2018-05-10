<template>
  <main>
    <CertiTopHero class="hero-bg"
                  page-title="Webfejlesztő leszek!"
                  lead-text=" - angular edition - "
                  sales-pitch-title="Projektalapú front-end fejlesztés az alapoktól"
                  sales-pitch-text="Ismerős a helyzet, amikor gyorsan kellene eladnod valamit, de nem találsz rá időben
                  vevőt? Ez adta az ötletet tanfolyamsorozatunkhoz, mely során egy Vatera-szerű alkalmazást készíthetsz
                  el velünk. Megismerheted, hogyan tudsz összeállítani egy olyan összetett alkalmazást, ami lekezeli a
                  regisztrációkat, a ki- és bejelentkezéseket, árverést hoz létre, chatet működtet. A képzések során
                  megtanulod, hogyan készíts a projektedből mobilapp és desktop alkalmazást is."
    >
      <img slot="lead-icon" src="~/assets/webfejleszto-angular/angular-icon.png" alt="angular-logo" class="img-fluid"
           width="60">
      <nuxt-link slot="call-to-action" to="#reszletek" class="btn-cus-border btn-border-red btn-lg ml-3">Részletek
      </nuxt-link>
    </CertiTopHero>

    <CertiFeatures price="Most csak 29.900 Ft"></CertiFeatures>

    <TimelineContainer id="reszletek">
      <TimelineCard title="Bootstrap - tegyük negyedikbe"
                    length="20 óra"
                    price="10.000 Ft+áfa"
                    description="Tervezd meg az alkalmazásod alapját egy reszponzív oldal formájában, mindeközben
                    pedig ismerkedj meg a Bootstrap 4 használatával és komponenseivel."
                    logo-bg="#5d3f85"
                    card-header-bg="#5d3f85"
                    direction="left"
      >
        <img slot="picture" src="~/assets/webfejleszto-angular/bootstrap-icon.png" alt="bootstrap">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.bootstrap"
                 href="https://app.netacademia.hu/Tanfolyam/2017bootstrap4-bootstrap---tegyuk-negyedikbe"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="jQuery - alapozás"
                    length="24 óra"
                    price="10.000 Ft+áfa"
                    description="Tedd interaktívabbá elkészült oldaladat a jQuery keretrendszer segítségével, legyen
                    szó új elemekről, funkciókról, effektekről vagy a szerverrel való kommunikációról."
                    logo-bg="#ffffff"
                    card-header-bg="#21609b"
                    direction="right"
      >
        <img slot="picture" src="~/assets/webfejleszto-angular/jquery-icon.png" alt="jquery">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.jquery"
                 href="https://app.netacademia.hu/Tanfolyam/2017jquery-jquery---a-hajnalok-hajnalan"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="Angular alapok - Esemény vadász"
                    length="26 óra"
                    price="10.000 Ft+áfa"
                    description="Varázsold oldaladat azzá, aminek elkezdted készíteni. Olyan funkciókat fogsz
                    hozzáépíteni, mint a regisztrálás, bejelentkezés, események kiírása, jegyek listázása és annak
                    részleteinek megjelenítése, mindezt Angular segítségével."
                    logo-bg="#ffffff"
                    card-header-bg="#e23237"
                    direction="left"
      >
        <img slot="picture" src="~/assets/webfejleszto-angular/angular-icon.png" alt="angular">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.angularIntro"
                 href="https://app.netacademia.hu/Tanfolyam/2017angularintro-angular-intro--esemenyvadasz"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="Angular Advanced"
                    length="26 óra"
                    price="10.000 Ft+áfa"
                    description="Az oldal növekedésével egyre több szolgáltatást fogsz beleépíteni abba, ezért szükséges
                    megtanulni a kódod elrendezésének elveit. Ezek után egy árverés funkciót fogsz készíteni,
                    továbbfejlesztve ezzel a jegyértékesítést."
                    logo-bg="#ffffff"
                    card-header-bg="#e23237"
                    direction="right"
      >
        <img slot="picture" src="~/assets/webfejleszto-angular/angular-icon.png" alt="angular">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.angularAdvanced"
                 href="https://app.netacademia.hu/Tanfolyam/2017ngadvanced-ng-advanced"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="Angular Pro"
                    length="26 óra"
                    price="10.000 Ft+áfa"
                    description="Manapság fontos a felhasználók közötti kommunikáció, ezért egy chat alkalmazást fogsz
                    írni ennek megoldására. Ezek után a többnyelvűséget fogod implementálni az oldaladra, hogy
                    nemzetközi szinten is megállja a helyét."
                    logo-bg="#ffffff"
                    card-header-bg="#e23237"
                    direction="left"
      >
        <img slot="picture" src="~/assets/webfejleszto-angular/angular-icon.png" alt="angular">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.angularPro"
                 href="https://app.netacademia.hu/Tanfolyam/2017angularpro-angular-pro"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="Ionic"
                    length="20 óra"
                    price="10.000 Ft+áfa"
                    description="Az eddigi webes alapokról kiindulva jegyértékesítő alkalmazást fogsz írni mobil
                    eszközökre az Ionic segítségével, legyen a cél Android, IoS vagy Windows Phone."
                    logo-bg="#ffffff"
                    card-header-bg="#4e8ef7"
                    direction="right"
      >
        <img slot="picture" src="~/assets/webfejleszto-angular/ionic-icon.png" alt="vue">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.ionic"
                 href="https://app.netacademia.hu/Tanfolyam/2017ionic-ionic---appra-fel"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="Electron"
                    length="18 óra"
                    price="10.000 Ft+áfa"
                    description="Egy eszköztárral lefedni több platformot mindig is egy nagy előny volt mind üzleti
                    mind szakmai szempontból, ezért egy asztali alkalmazást fogsz írni jelenlegi rendszered admin
                    felületéhez."
                    logo-bg="#ffffff"
                    card-header-bg="#47848f"
                    direction="left"
      >
        <img slot="picture" src="~/assets/webfejleszto-angular/electron-icon.png" alt="electron">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.electron"
                 href="https://app.netacademia.hu/Tanfolyam/2017electron-electron"
        >Részletek...
        </gtm-link>
      </TimelineCard>

    </TimelineContainer>
    <div class="row justify-content-center text-center py-5 mx-0 align-self-center">
      <div class="col-12 col-lg-3 p-4 bg-card m-2 align-self-center py-5 px-3">
        <p class="mb-4">Vedd meg a Webfejlesztő leszek! Angular editiont és a Webfejlesztő leszek! Vue.js editiont
          együtt,
          május 14-ig csak
          <br>bruttó
          <span class="ar">39.800 </span>Ft!</p>
        <gtm-link isAddToCart :gtm-data="GTMProductCollection.addToCartVueAndAngular"
                 href="https://app.netacademia.hu/Subscription/Create/webfejleszto-leszek-angular-es-vuejs"
                  class="btn-cus btn-cus-orange"
        >Megveszem!
        </gtm-link>
      </div>
      <div class="col-12 col-lg-3 p-4 bg-card m-2 align-self-center py-5 px-3">
        <p class="mb-4">Van már Webfejlesztő leszek! előfizetésed? Akkor neked a Webfejlesztő leszek! Angular edition
          május 14-ig csak
          <br>bruttó
          <span class="ar">9.900 </span>Ft!</p>
        <gtm-link isAddToCart :gtm-data="GTMProductCollection.addToCartAngularAsExtension"
                  href="https://app.netacademia.hu/Subscription/Create/2d7fea29-44b4-4497-8114-872a0a43d6b7"
                  class="btn-cus btn-cus-orange"
        >Megveszem!
        </gtm-link>
      </div>
      <div class="col-12 col-lg-3 p-4 bg-card m-2 align-self-center py-5 px-3">
        <p class=" mb-4">Webfejlesztő leszek! – Angular edition – tanfolyamcsomag ára <br>május 14-ig csak
          <br>bruttó
          <span class="ar">29.900</span> Ft!</p>
        <gtm-link isAddToCart :gtm-data="GTMProductCollection.addToCartAngular"
                 href="https://app.netacademia.hu/Subscription/Create/webfejleszto-leszek-angular-edition"
                  class="btn-cus btn-cus-orange"
        >Megveszem!
        </gtm-link>
      </div>
    </div>

    <!-- certificate, mas kurzusok -->
    <section class="bg-light">
      <div class="container">
        <div class="row py-5">
          <div class="col-12 col-lg-8 mx-auto">
            <div class="row">

              <div class="col-11 mx-auto my-4">
                <h4 class="pb-3">Szerezz NetAcademia Certificate-et!</h4>
                <p class="mb-3">A NetAcademia Certificate-tel egy olyan tanúsítványt hoztunk létre, mely egyaránt
                  leképezi oktatási hozzáállásunkat és módszertanunkat: gyakorlatias és projekt-alapú. A sikeres vizsga
                  bizonyíték arra, hogy képes vagy statikus és dinamikus reszponzív weboldalak készítésére, elboldogulsz
                  a webprogramozás és az alkalmazásfejlesztés világában is.
                </p>
                <nuxt-link to="/certificate">Bővebb információ</nuxt-link>
              </div>

              <div class="col-11 mx-auto col-lg-11 my-4">
                <h4 class="pb-3">Webfejlesztő leszek!
                  <br>
                  <span>-Vue edition-</span>
                </h4>
                <p class="mb-3">A tanfolyam során a fizu.hu weboldalt készítjük el, melynek célja, hogy fizetéssel és
                  munkával kapcsolatos adatokat kérjen a felhasználóktól, majd ezen adatokat felhasználva különböző
                  statisztikák elkészítésére adjon lehetőséget.
                </p>
                <nuxt-link to="/webfejleszto-vuejs">Bővebben a Vue edition tanfolyamról...</nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-12 mx-auto col-lg-4 border p-5 ulticol text-center my-auto">
            <h2>Ultimate kedvezmény</h2>
            <p class="mt-4">Van már Webfejlesztő leszek előfizetésed? Tanulj tovább full-stack fejlesztővé! Írj
              nekünk az <span class="text-success">iroda@netacademia.net</span> e-mail címre, és a Webfejlesztő útvonal
              árát most beszámítjuk Ultimate előfizetésünkbe!
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import TimelineCard from "~/components/TimelineCard";
import GtmLink from "~/components/GtmLink";
import TimelineContainer from "../components/TimelineContainer";
import CertiFeatures from "../components/CertiFeatures";
import CertiTopHero from "../components/CertiTopHero";

export default {
  layout: "logo-footer",
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
        addToCartAngularAsExtension: {
          name: "Webfejlesztő 12 hónapos előfizetés",
          "id:": "2d7fea29-44b4-4497-8114-872a0a43d6b7",
          price: "9900",
          brand: "NetAcademia",
          category: "Elofizetes",
          variant: "",
          quantity: 1
        },
        addToCartAngular: {
          name: "Webfejlesztő 12 hónapos előfizetés",
          "id:": "2d7fea29-44b4-4497-8114-872a0a43d6b7",
          price: "29900",
          brand: "NetAcademia",
          category: "Elofizetes",
          variant: "",
          quantity: 1
        },
        bootstrap: {
          name: "Bootstrap - tegyük negyedikbe",
          id: "2017bootstrap4-bootstrap---tegyuk-negyedikbe",
          price: "12700",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Webfejlesztő leszek! Angular edition",
          position: 1,
          PCategories: [
            "Webfejlesztő leszek! Angular Edition",
            "Basic",
            "Webfejlesztő leszek! Angular + VueJS",
            "SoproniEgyetem",
            "PecsiEgyetem"
          ]
        },
        jquery: {
          name: "jQuery - a hajnalok hajnalán",
          id: "2017jquery-jquery---a-hajnalok-hajnalan",
          price: "12700",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Webfejlesztő leszek! Angular edition",
          position: 2,
          PCategories: [
            "Webfejlesztő leszek! Angular Edition",
            "Basic",
            "Webfejlesztő leszek! Angular + VueJS",
            "SoproniEgyetem",
            "PecsiEgyetem"
          ]
        },
        angularIntro: {
          name: "Angular intro- Eseményvadász",
          id: "2017angularintro-angular-intro--esemenyvadasz",
          price: "12700",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Webfejlesztő leszek! Angular edition",
          position: 3,
          PCategories: [
            "Webfejlesztő leszek! Angular Edition",
            "Basic",
            "Webfejlesztő leszek! Angular + VueJS",
            "SoproniEgyetem",
            "PecsiEgyetem"
          ]
        },
        angularAdvanced: {
          name: "Angular Advanced",
          id: "2017ngadvanced-ng-advanced",
          price: "12700",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Webfejlesztő leszek! Angular edition",
          position: 4,
          PCategories: [
            "Webfejlesztő leszek! Angular Edition",
            "Basic",
            "Webfejlesztő leszek! Angular + VueJS",
            "SoproniEgyetem",
            "PecsiEgyetem"
          ]
        },
        angularPro: {
          name: "Angular Pro",
          id: "2017angularpro-angular-pro",
          price: "12700",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Webfejlesztő leszek! Angular edition",
          position: 5,
          PCategories: [
            "Webfejlesztő leszek! Angular Edition",
            "Basic",
            "Webfejlesztő leszek! Angular + VueJS",
            "SoproniEgyetem",
            "PecsiEgyetem"
          ]
        },
        ionic: {
          name: "Ionic - Appra fel!",
          id: "2017ionic-ionic---appra-fel",
          price: "12700",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Webfejlesztő leszek! Angular edition",
          position: 6,
          PCategories: [
            "Webfejlesztő leszek! Angular Edition",
            "Basic",
            "Webfejlesztő leszek! Angular + VueJS",
            "SoproniEgyetem",
            "PecsiEgyetem"
          ]
        },
        electron: {
          name: "Electron",
          id: "2017electron-electron",
          price: "12700",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Webfejlesztő leszek! Angular edition",
          position: 7,
          PCategories: [
            "Webfejlesztő leszek! Angular Edition",
            "Basic",
            "Webfejlesztő leszek! Angular + VueJS",
            "SoproniEgyetem",
            "PecsiEgyetem"
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
    url("~/assets/webfejleszto-angular/background_v2.jpg");
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
