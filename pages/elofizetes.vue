<template>
  <main>
    <header id="home" class="top-hero jumbotron-fluid pb-5 bg-faded">
      <div class="container">
        <h1 class="display-2 mb-1">
          <img src="~/assets/elofizetes/logo-ultimate.svg" alt="" width="50" class="img-fluid mb-2 mr-2">
          <span class="red">Net</span>Academia</h1>
        <h2 class="mb-5 mt-2">
          <span class="text-uppercase">Certificate</span>
        </h2>
        <p class="lead mt-1 mb-5">A NetAcademia Certificate programunkban olyan szakmákat tanulhatsz, melyekkel akár
          távmunkában is dolgozhatsz, ezzel jelentősen növelve a munkakeresésed esélyeit! Mindegy, hogy Piripócson élsz,
          vagy a Bahamákon, velünk eljuthasz a következő szintre. Távmunkához távtanulás dukál!</p>
        <p class="lead">Több tanfolyamsorozatot is elvégeznél? Válaszd
          <nuxt-link to="#ultimate" class="text-danger font-weight-bold">Ultimate előfizetésünket</nuxt-link>
          , mellyel mindegyik
          elérhető!
        </p>
        <div class="row pt-2">
          <div class="col-3 col-lg-1 my-auto">
            <nuxt-link to="/unity-developer">
              <img src="~/assets/elofizetes/unity-logo.svg" alt="unity-logo" width="60">
            </nuxt-link>
          </div>
          <div class="col-3 col-lg-1 my-auto">
            <nuxt-link to="/junior-csharp-developer">
              <img src="~/assets/elofizetes/c-sharp-logo.svg" alt="c-sharp-logo" width="60">
            </nuxt-link>
          </div>
          <div class="col-3 col-lg-1 my-auto">
            <nuxt-link to="/webfejleszto-vuejs">
              <img src="~/assets/elofizetes/vue-logo.svg" alt="vue-logo" width="60">
            </nuxt-link>
          </div>
          <div class="col-3 col-lg-1 my-auto">
            <nuxt-link to="/webfejleszto-angular">
              <img src="~/assets/elofizetes/angular-logo.svg" alt="angular-logo" width="60">
            </nuxt-link>
          </div>
          <div class="col-3 col-lg-1 my-auto">
            <nuxt-link to="/ecommerce">
              <img src="~/assets/elofizetes/e-commerce-logo.svg" alt="e-commerce-logo" width="60">
            </nuxt-link>
          </div>
          <!--<div class="col-3 col-lg-1 my-auto">
          <img src="~/assets/elofizetes/android-logo2.png" alt="android-logo" width="60">
        </div>
        -->
          <div class="col-3 col-lg-1 my-auto">
            <nuxt-link to="/windowsserver">
              <img src="~/assets/elofizetes/server-logo.png" alt="server-logo" width="60">
            </nuxt-link>
          </div>
        </div>

        <BouncingDownArrow text="Válts szakmát, és teremtsd meg a jövőd!"></BouncingDownArrow>
      </div>
    </header>

    <div class="container py-5" id="kepzes">
      <div class="row justify-content-center text-center mt-5">
        <div class="col-12 second-title">
          <h3 class="mb-5 display-4">A jövődet meghatározó képzési útvonalaink</h3>
        </div>
        <div class="col-12">
          <p class="lead">
            Mindegyik tanfolyamsorozatunkhoz gyakorlati vizsga tartozik, mellyel bebizonythatod, hogy Te meg
            tudod csinálni! A presztizsértékű
            <nuxt-link to="/certificate" class="text-danger font-weight-bold"> NetAcademia Certified</nuxt-link>
            címmel ezt meg fogod tudni mutatni az egész világnak!
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row pt-5 justify-content-center dotted-bg">

        <elofizetes-product-card title="Certified Unity Expert Developer" who="A játékmester"
                                 description="Legyél az ország első Certified Unity Developere, és merülj el a többplatformos játékfejlesztés világában!"
                                 length="55 óra" link="/unity-developer"
                                 :gtm-data="GTMProductCollection.unity">
          <img src="~/assets/elofizetes/unity-logo.svg" alt="unity-logo" width="130" class="mx-auto img-border">
        </elofizetes-product-card>

        <elofizetes-product-card title="Certified Junior C# Developer" who="A nagyvállalati programozó"
                                 description="Certified Developer útvonalunkkal az alapoktól kezdve sajátíthatod el a C# programozási nyelvet! Legyen ez a szakmád!"
                                 length="144 óra" link="/junior-csharp-developer"
                                 :gtm-data="GTMProductCollection.csharp">
          <img src="~/assets/elofizetes/c-sharp-logo.svg" alt="c-sharp-logo" width="130" class="mx-auto img-border">
        </elofizetes-product-card>
      </div>

      <div class="row pt-5 justify-content-center dotted-bg">

        <elofizetes-product-card title="Certified Front-End Developer" subtitle="VueJS edition"
                                 who="A kezdő Front-End fejlesztő"
                                 description="Legyél Certified Front-End Developer, és készíts lenyűgöző weboldalakat,
                                              akár mobilapp formában is, Vue.js-sel!"
                                 length="80 óra"
                                 link="/webfejleszto-vuejs"
                                 :gtm-data="GTMProductCollection.vue">
          <img src="~/assets/elofizetes/vue-logo.svg" alt="vue-logo" width="130" class="mx-auto img-border">
        </elofizetes-product-card>

        <elofizetes-product-card title="Certified Front-End Developer" subtitle="Angular edition"
                                 who="A haladó Front-End fejlesztő"
                                 description="Legyél Certified Front-End Developer, merülj el a modern webfejlesztés világában! Készíts alkalmazást bármilyen platformra, Angularral!"
                                 length="160 óra" link="/webfejleszto-angular"
                                 :gtm-data="GTMProductCollection.angular">
          <img src="~/assets/elofizetes/angular-logo.svg" alt="angular-logo" width="130" class="mx-auto img-border">
        </elofizetes-product-card>
      </div>

      <div class="row pt-5 justify-content-center dotted-bg">
        <elofizetes-product-card title="Certified E-commerce Specialist" who="Az üzletember"
                                 description="Legyél Certified E-commerce Specialist, lendítsd fel eladásaidat, vagy készíts egy teljesen új webshopot!"
                                 length="52 óra" link="/ecommerce"
                                 :gtm-data="GTMProductCollection.ecommerce">
          <img src="~/assets/elofizetes/e-commerce-logo.png" alt="e-commerce-logo" width="130"
               class="mx-auto img-border">
        </elofizetes-product-card>

        <!-- <elofizetes-product-card  title="Certified Android Developer"
                                who="Az App-guru"
                                description="Legyél Certified Android Developer, és legyél te a mobilAppok nagymestere!"
                                link="/androidfejleszto"
                                length="128 óra"
                                :gtm-data="GTMProductCollection.ASDFSADFDSADSADFSDA">
        <img src="~/assets/elofizetes/android-logo2.png" alt="android-logo" width="130" class="mx-auto img-border">
      </elofizetes-product-card>      -->

        <elofizetes-product-card title="Certified Windows Administrator" who="A rendszergazda"
                                 description="Legyél Certified Windows Administrator, és üzemeltess Windows Server alapú rendszereket!"
                                 length="48 óra" link="/windowsserver"
                                 :gtm-data="GTMProductCollection.windowsserver">
          <img src="~/assets/elofizetes/server-logo.png" alt="server-logo" width="130" class="mx-auto img-border">
        </elofizetes-product-card>
      </div>
    </div>

    <div class="container pt-md-3 mt-3">

      <div class="row justify-content-center">

        <div class="col-11 pl-0" id="elofizetes">
          <div class="row second-hero justify-content-center mb-3 mb-lg-5 mb-lg-0">
            <div class="col-11 pl-0">
              <h1 class="display-2 mb-lg-3">
                <span class="red">Net</span>Academia</h1>
              <h2 class="mb-3 mt-2">
                <span class="text-uppercase">Előfizetés</span>
              </h2>
            </div>
          </div>
        </div>

        <div class="row justify-content-center dotted-bg">

          <!-- product: ultimate -->
          <div class="col-11 col-md-6 mb-lg-5">
            <div class="row justify-content-center">
              <div class="col-11 col-lg-9 mb-5 second-title">
                <h4 class="display-4" id="ultimate">INFORMATIKUS VAGY? SZERETNÉL AZ LENNI?</h4>
              </div>
              <div class="col-11 col-lg-9 mb-4">
                <h4>
                  <img src="~/assets/elofizetes/logo-ultimate.svg" alt="logo" width="70" class="mr-2">Ultimate
                  előfizetés</h4>
              </div>
              <div class="col-11 col-lg-9">
                <p class="text-justify">Minden informatikus álma! Korlátlan tanulás és fejlődés! Itt nincs mit
                  magyarázni: az összes, weblapunkon elérhető tanfolyamunkhoz 365 napos hozzáférés!</p>
              </div>
              <div class="col-12 col-lg-9 text-center">
                <p class="py-4 lead">
                  <img src="~/assets/elofizetes/time.png" alt="" width="40" class="mr-3">4000+óra</p>
              </div>
              <div class="col-10 col-lg-8 mb-3">
                <p class="text-center mx-auto list-height">CISSP, GDPR, Android, Unity, Ethical Hacking, Java, IOT,
                  Symphony, PHP, Node.JS, Angular, Windows Server, Sharepoint, ISO27001
                </p>
              </div>
            </div>
            <div class="col-12 text-center mb-5">
              <gtm-link :gtm-data="GTMProductCollection.ultimate" class="btn btn-primary"
                        href="/ultimateakcio" role="button">
                Megnézem
              </gtm-link>
            </div>
          </div>

          <!-- product: office -->
          <div class="col-11 col-md-6 mb-lg-5">
            <div class="row justify-content-center">
              <div class="col-11 col-lg-9 mb-5 second-title">
                <h4 class="display-4">SZÁMÍTÓGÉPPEL DOLGOZOL? (KI NEM?)</h4>
              </div>
              <div class="col-11 col-lg-9 mb-4">
                <h4>
                  <img src="~/assets/elofizetes/logo-office.svg" alt="logo" width="70" class="mr-2">Office előfizetés
                </h4>
              </div>
              <div class="col-11 col-lg-9">
                <p class="text-justify">Minden irodai dolgozó álma! Hatékonyság és produktivitás növelés telefonon és
                  számítógépen! 365 napos hozzáférés az összes irodai dolgozóknak szánt tanfolyamunkhoz!</p>
              </div>
              <div class="col-11 col-lg-9 text-center">
                <p class="py-4 lead">
                  <img src="~/assets/elofizetes/time.png" alt="" width="40" class="mr-3">300+óra</p>
              </div>
              <div class="col-11 col-lg-8 mb-3">
                <p class="text-center mx-auto list-height">Word, Excel, OneNote, Időgazdálkodás, Stresszkezelés,
                  Munkavédelem, Tűzvédelem, Informatikai alapismeretek, Képszerkesztés
                </p>
              </div>
            </div>
            <div class="col-12 text-center mb-5">
              <gtm-link :gtm-data="GTMProductCollection.office"
                        class="btn btn-primary"
                        href="/officecsomag" role="button">
                Megnézem
              </gtm-link>
            </div>
          </div>

        </div>
      </div>

      <div class="row my-lg-5 py-5 justify-content-center text-center">
        <div class="col-10 mb-4 mb-md-0 col-md-3">
          <h2 class="mb-3 uniq">24/7</h2>
          <p>Bármikor visszanézhető tanfolyamok</p>
        </div>
        <div class="col-10 mb-4 mb-md-0 col-md-3">
          <img src="~/assets/elofizetes/play.png" alt="" class="mb-4" width="60">
          <p>Folyamatosan bővülő tanfolyamlista</p>
        </div>
        <div class="col-10 mb-4 mb-md-0 col-md-3">
          <h2 class="mb-3 uniq">365</h2>
          <p>1 éves korlátlan hozzáférés a tanfolyamokhoz</p>
        </div>
        <div class="w-100"></div>
        <div class="col-10 mb-4 mb-md-0 col-md-3 mt-lg-5">
          <h2 class="mb-3 uniq">#1</h2>
          <p>Magyarország legnagyobb online tanulási platformja</p>
        </div>
      </div>

      <div class="row second-hero my-lg-5">
        <div class="col-md-6 col-9">
          <h1 class="display-2 ">NetAcademia</h1>
          <h2 class="mb-5">
            <span class="text-uppercase">Certificate</span>
          </h2>
        </div>
        <div class="col-3 col-md-6 my-auto">
          <img src="~/assets/elofizetes/certi-logo.png" alt="" class="img-fluid float-right" width="200">
        </div>
        <div class="col-12 lead mb-5">Olyan minősítési forma ez, mely nem a totózási, hanem a problémamegoldó
          képességedet méri fel. Pontosan ezért képvisel magas értéket mind a munkaadók, mind pedig a munkavállalók
          szemében!​
        </div>
        <div class="mx-auto">
          <nuxt-link class="btn btn-lg btn-danger" to="/certificate" role="button">Részletek</nuxt-link>
        </div>
      </div>
    </div>

  </main>

</template>

<script>
import GtmLink from "~/components/GtmLink.vue";
import ElofizetesProductCard from "~/components/ElofizetesProductCard.vue";
import BouncingDownArrow from "~/components/BouncingDownArrow";
import { GtmPageLoad } from "~/components/mixins/GtmPageLoad";

export default {
  name: "elofizetes",
  mixins: [GtmPageLoad("Listaoldal")],
  components: { BouncingDownArrow, GtmLink, ElofizetesProductCard },
  layout: "nav-dark-footer",
  data: function() {
    return {
      GTMProductCollection: {
        unity: {
          name: "Certified Unity Developer 12 hónapos tanfolyamcsomag",
          id: "17b62be2-c693-4fa3-a79a-382e789f838a",
          price: "69900",
          brand: "NetAcademia",
          category: "Elofizetes",
          variant: "",
          list: "Előfizetés",
          position: 1
        },
        csharp: {
          name: "Certified Junior C# Developer 12 hónapos tanfolyamcsomag",
          id: "d5e46a95-4f92-46df-bfe9-4e70eb3c38d0",
          price: "69900",
          brand: "NetAcademia",
          category: "Elofizetes",
          variant: "",
          list: "Előfizetés",
          position: 2
        },
        vue: {
          name: "Webfejlesztő leszek! VueJS Edition 12 hónapos tanfolyamcsomag",
          id: "0ceafbab-4b10-4835-9a25-f4a4876690b6",
          price: "29900",
          brand: "NetAcademia",
          category: "Elofizetes",
          variant: "",
          list: "Előfizetés",
          position: 3
        },
        angular: {
          name:
            "Webfejlesztő leszek! Angular Edition 12 hónapos tanfolyamcsomag",
          id: "2d7fea29-44b4-4497-8114-872a0a43d6b7",
          price: "29900",
          brand: "NetAcademia",
          category: "Elofizetes",
          variant: "",
          list: "Előfizetés",
          position: 4
        },
        ecommerce: {
          name: "Certified E-commerce Specialist 12 hónapos tanfolyamcsomag",
          id: "2d7fea29-44b4-4497-8114-872a0a43d6b7",
          price: "49900",
          brand: "NetAcademia",
          category: "Elofizetes",
          variant: "",
          list: "Előfizetés",
          position: 5
        },

        windowsserver: {
          name: "Certified Windows Administrator 12 hónapos tanfolyamcsomag",
          id: "0",
          price: "89900",
          brand: "NetAcademia",
          category: "Elofizetes",
          variant: "",
          list: "Előfizetés",
          position: 6
        },

        ultimate: {
          name: "NetAcademia Ultimate 12 hónapos tanfolyamcsomag",
          id: "0",
          price: "126873",
          brand: "NetAcademia",
          category: "Elofizetes",
          variant: "",
          list: "Előfizetés",
          position: 7
        },
        office: {
          name: "Office és irodai alkalmazások 12 hónapos tanfolyamcsomag",
          id: "68cad24a-c08b-4724-910a-c25dc743e9d3",
          price: "62230",
          brand: "NetAcademia",
          category: "Elofizetes",
          variant: "",
          list: "Előfizetés",
          position: 8
        }
      }
    };
  }
};
</script>

<style scoped>
main {
  height: 100%;
  color: #ffffff;
  font-size: 18px;
  background-image: url("~/assets/elofizetes/background.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  z-index: 1;
  background-position: top center;
  padding-top: 20px;
}

.top-hero h1 {
  color: #ffffff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  letter-spacing: -1px;
  line-height: 0.9;
  margin-top: 10px;
  font-size: 2rem;
}

.top-hero h1 span {
  color: #a52b23;
}

.top-hero p {
  color: #edf2f4;
}

.top-hero h2 span {
  font-size: 2.7rem;
  color: #ffffff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
}

.top-hero h2 {
  font-size: 2rem;
  color: #fff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
}

.second-hero h1 {
  color: #ffffff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  font-size: 2rem;
}

.uniq {
  font-size: 3.2rem;
  color: #9d1d21;
}

.second-title h4 {
  font-size: 2rem;
}

.second-title h3 {
  font-size: 2.5rem;
}

.btn-primary:hover {
  background-color: #0927ff;
}

@media (min-width: 395px) {
  .top-hero h1 {
    font-size: 3rem;
    margin-top: 20px;
  }

  .top-hero h2 {
    font-size: 3rem;
    margin-top: 110px;
  }

  .top-hero h2 span {
    font-size: 3.5rem;
    margin-top: 110px;
  }

  h2 {
    font-size: 1.8rem;
  }

  .second-hero h1 {
    font-size: 2.5rem;
  }

  .second-hero h2 {
    font-size: 3.5rem;
  }
}

@media (min-width: 550px) {
  .top-hero h1 {
    font-size: 3.5rem;
    margin-top: 120px;
  }

  .second-hero h1 {
    font-size: 2.5rem;
  }

  .second-hero h2 {
    font-size: 3.5rem;
  }
}

@media (min-width: 768px) {
  .top-hero h1 {
    font-size: 4rem;
    margin-top: 70px;
  }

  .top-hero h2 {
    font-size: 4rem;
    margin-top: 110px;
  }

  .top-hero h2 span {
    font-size: 5.5rem;
    margin-top: 110px;
  }

  .second-hero h1 {
    font-size: 3.5rem;
  }

  .second-hero h2 {
    font-size: 4.5rem;
  }

  .dotted-bg {
    background: url("~/assets/elofizetes/dotted-img.svg");
    background-repeat: no-repeat;
    background-position: center;
  }

  .list-height {
    height: 150px;
  }
}

@media (min-width: 1200px) {
  .top-hero h1 {
    margin-top: 150px;
  }

  .top-hero h2 span {
    font-size: 5rem;
    margin-top: 120px;
  }

  .second-hero h1 {
    font-size: 40px;
  }

  .second-hero h2 {
    font-size: 60px;
  }

  .second-hero h4 {
    font-size: 35px;
  }

  .list-height {
    height: 120px;
  }
}

@media (min-width: 1150px) {
  main {
    font-size: 18px;
  }

  .section-szakma {
    padding-right: 100px;
    padding-left: 100px;
  }
}

@media (min-width: 1300px) {
  main {
    font-size: 18px;
  }

  .section-szakma {
    padding-right: 200px;
    padding-left: 200px;
  }
}

.section-szakma h4 {
  font-size: 20px;
}

.img-border {
  border: 1px solid #ffffff;
  border-radius: 50%;
  padding: 10px;
}

.vertical-line {
  border-right: dotted red;
  height: 400px;
}

.btn-primary:hover {
  background-color: #0927ff;
}

.btn-danger {
  background-color: #9d1d21;
}
</style>
