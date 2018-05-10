<template>
  <main>
    <section class="wellcome_area">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12 col-md">
            <div class="wellcome-heading w-75">
              <h2 class="text-uppercase">Lenyűgöző tanfolyamok</h2>
              <p>Több tucatnyi ingyenes tanfolyamunk közül itt azok szerepelnek, melyek során lenyűgöző dolgokat ismerhetsz meg és hozhatsz létre pusztán pár óra tanulással.</p>
              <p>Regisztrálj, és végezd el ingyenes tanfolyamainkat!</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-4 blockk">
            <nuxt-link to="#htmlcss">
              <bounce class="single-special text-center" direction="in">
                <img src="~/assets/lenyugozo-tanfolyamok/htmlcss.svg" alt="" width="150" class="img-fluid mb-4">
                <h4>HTML, CSS</h4>
              </bounce>
            </nuxt-link>
          </div>

          <div class="col-12 col-md-4 blockk">
            <nuxt-link to="#csharp">
              <Bounce class="single-special text-center" direction="in">
                <img src="~/assets/lenyugozo-tanfolyamok/icon-cloud-c.svg" alt="" width="75" class="img-fluid mb-4">
                <h4>C#</h4>
              </Bounce>
            </nuxt-link>
          </div>

          <div class="col-12 col-md-4 blockk">
            <nuxt-link to="#unity">
              <Bounce class="single-special text-center" direction="in">
                <img src="~/assets/lenyugozo-tanfolyamok/unity-3d-vector-icon-logo.svg" alt="" width="75" class="img-fluid mb-4">
                <h4>UNITY</h4>
              </Bounce>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Special Description Area -->
    <section>
      <!-- product: web -->
      <div class="py-5 bg-light">
        <div class="container py-lg-5">
          <div class="row" id="htmlcss">
            <div class="col-7 col-lg-6 my-auto mx-auto p-lg-5">
              <Bounce class="mb-5 mb-lg-0" direction="left">
                <img src="~/assets/lenyugozo-tanfolyamok/weblap.png" alt="" class="img-fluid">
              </Bounce>
            </div>
            <div class="col-lg-6 col-xl-5 ml-xl-auto my-auto">
              <div class="special_description_content">
                <h2>Lenyűgöző weblapok készítése</h2>
                <p>Kukába a XX. századi weblapdizájnokkal! Kezdők is kezdjék az életüket XXI. századi, modern, ütős weblapokkal!</p>
                <p>Ezen a tanfolyamon egy mai, modern landing page-et készítünk a semmiből kiindulva, Notepad segítségével. Az óra során annyit fogsz tanulni, hogy utána képes leszel olyan weboldalakat létrehozni, mint az elektromos autógyár Tesla híres főoldala.</p>
                <p class="font-weight-bold">Tanfolyam időpontja: 2018.04.</p>
                <div class="app-download-area">
                  <div class="button">
                    <!-- Google Store Btn -->
                    <gtm-link :gtm-data="GTMProductCollection.web" href="https://app.netacademia.hu/Tanfolyam/2017htmllanding-lenyugozo-weblapok-keszitese">
                      <p class="mb-0">Részt veszek a tanfolyamon!</p>
                    </gtm-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- product: unity -->
      <div class="py-5">
        <div class="container py-lg-5">
          <div class="row">
            <div class="col-lg-6 col-xl-5 mr-xl-auto my-auto order-2 order-lg-1">
              <div class="special_description_content">
                <h2>Lenyűgöző UNITY</h2>
                <p>Látványos mobil játék készítése mindössze néhány óra alatt.</p>
                <p>Ez a képzés egy gyakorlatias, rövid bemutató arról, hogyan lehet látványos játékokat készíteni akár néhány óra leforgása alatt a Unity játékmotor segítségével. A tanfolyamon egy autós 3D játékot fejlesztünk okostelefonokra.</p>
                <p class="font-weight-bold">Tanfolyam időpontja: 2018.04.09. 18 óra</p>
                <div class="app-download-area">
                  <div class="button">
                    <!-- Google Store Btn -->
                    <gtm-link :gtm-data="GTMProductCollection.unity" href="https://app.netacademia.hu/Tanfolyam/2018unitylenyug-lenyugozo-unity">
                      <p class="mb-0">Részt veszek a tanfolyamon!</p>
                    </gtm-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-11 pb-5 col-lg-6 order-1 order-lg-2 mx-auto p-lg-2 my-auto">
              <Bounce direction="right">
                <div class="embed-responsive embed-responsive-16by9">
                  <no-ssr>
                    <youtube class="embed-responsive-item animated" video-id="A3DuZSWu-mA"></youtube>
                  </no-ssr>
                </div>
              </Bounce>
            </div>
          </div>
        </div>
      </div>

      <!-- product: csharp -->
      <div class="py-5 bg-light">
        <div class="container py-lg-5">
          <div class="row" id="csharp">
            <div class="col-7 col-lg-6 my-auto mb-5 mb-lg-0 mx-auto p-lg-5">
              <Bounce direction="left">
                <img src="~/assets/lenyugozo-tanfolyamok/chat-robot.png" alt="" class="img-fluid">
              </Bounce>
            </div>
            <div class="col-lg-6 col-xl-5 ml-xl-auto my-auto">
              <div class="special_description_content">
                <h2>Lenyűgöző C# programozás</h2>
                <p>Készítsünk együtt csevegő robotot!</p>
                <p>A kurzus során bepillantást nyerhetsz abba, hogyan kódol egy C# programozó: létrehozunk és beüzemelünk egy chatbotot teljesen nulláról, hogy a kezdők számára is világos legyen minden lépés.</p>
                <p class="font-weight-bold">Tanfolyam időpontja: 2018.04.23. 15 óra</p>
                <div class="app-download-area">
                  <div class="button">
                    <gtm-link :gtm-data="GTMProductCollection.csharp" href="https://app.netacademia.hu/Tanfolyam/2018csharp-lenyugozo-c-programozas">
                      <p class="mb-0">Részt veszek a tanfolyamon!</p>
                    </gtm-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- product: windows -->
      <div class="py-5">
        <div class="container py-lg-5">
          <div class="row">
            <div class="col-lg-6 col-xl-5 mr-xl-auto my-auto order-2 order-lg-1">
              <div class="special_description_content">
                <h2>Windows Server alapismeretek, telepítés</h2>
                <p>Ez az ingyenes tanfolyam a Windows üzemeltető útvonal bevezető képzése. Megnézzük, hogy mitől szerver egy szerver, milyen verziókkal találkozhatunk, ezek közül melyik mire való. A cél, hogy létrejöjjön egy saját magunk által virtuális gépben telepített szerver, amit az útvonal későbbi tanfolyamaihoz fel tudunk használni.</p>
                <p class="font-weight-bold">Tanfolyam időpontja: 2018.05.07. 17 óra</p>
                <div class="app-download-area">
                  <div class="button">
                    <!-- Google Store Btn -->
                    <gtm-link :gtm-data="GTMProductCollection.windows" href="https://app.netacademia.hu/Tanfolyam/2018wu00-windows-server-alapismeretek-telepites">
                      <p class="mb-0">Részt veszek a tanfolyamon!</p>
                    </gtm-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-7 col-lg-6 my-auto mb-5 mb-lg-0 mx-auto p-lg-5 order-1 order-lg-2">
              <Bounce direction="right">
                <img src="~/assets/lenyugozo-tanfolyamok/server.png" alt="" class="img-fluid">
              </Bounce>
            </div>
          </div>
        </div>
      </div>

    </section>
    <!-- ***** Special Area End ***** -->

    <!-- ***** Awesome Features Start ***** -->
    <section class="py-5">
      <div class="container py-5">
        <div class="row">
          <div class="col-12">
            <!-- Heading Text -->
            <div class="text-center mb-5 single-feature">
              <h2>Tanfolyamajánló</h2>
              <div class="line-shape"></div>
            </div>
          </div>
        </div>

        <div class="row">
          <!-- Single Feature Start -->
          <!-- product: bootstrap -->
          <div class="col-12 col-sm-6 col-lg-4">
            <div class="single-feature">
              <h5>Bootstrap4</h5>
              <p class="mb-2">A kurzus során projekt alapon, gyakorlati módon ismerjük meg a Bootstrap keretrendszert, és a HTML-CSS kódolást!</p>
              <small>
                <gtm-link :gtm-data="GTMProductCollection.bootstrap" href="https://app.netacademia.hu/Tanfolyam/2018bt4-bootstrap4">
                  A tanfolyam részletei...
                </gtm-link>
              </small>
            </div>
          </div>
          <!-- Single Feature Start -->
          <!-- product: webtodo -->
          <div class="col-12 col-sm-6 col-lg-4">
            <div class="single-feature">
              <h5>Az első webes C# projektem</h5>
              <p class="mb-2">Az XAML fejlesztést követően betekintünk a webes alkalmazásfejlesztés kulisszái mögé is C# nyelven.</p>
              <small>
                <gtm-link :gtm-data="GTMProductCollection.webtodo" href="https://app.netacademia.hu/Tanfolyam/2018webtodo-az-elso-webes-c-projektem-to-do-alkalmazas-keszitese">
                  A tanfolyam részletei...
                </gtm-link>
              </small>
            </div>
          </div>
          <!-- Single Feature Start -->
          <!-- product: cissp -->
          <div class="col-12 col-sm-6 col-lg-4">
            <div class="single-feature">
              <h5>CISSP</h5>
              <p class="mb-2">A képzés alatt az információbiztonság legkülönfélébb összetevőit vizsgáljuk egészen a rendszerüzemeltetéstől a hálózatbiztonságig.</p>
              <small>
                <gtm-link :gtm-data="GTMProductCollection.cissp" href="https://app.netacademia.hu/Tanfolyam/2018CISSP-certified-information-systems-security-pro---cissp">
                  A tanfolyam részletei...
                </gtm-link>
              </small>
            </div>
          </div>
          <!-- Single Feature Start -->
          <!-- product: javascript -->
          <div class="col-12 col-sm-6 col-lg-4">
            <div class="single-feature">
              <h5>Javasript</h5>
              <p class="mb-2">A tanfolyamon kis játékos projekteket valósítunk meg, és miközben megismerjük a JavaScript és a front-end fejlesztés alapjait.
              </p>
              <small>
                <gtm-link :gtm-data="GTMProductCollection.javascript" href="https://app.netacademia.hu/Tanfolyam/2018javascript-javascript---szent-habakuk-hisz-jatszom">
                  A tanfolyam részletei...
                </gtm-link>
              </small>
            </div>
          </div>
          <!-- Single Feature Start -->
          <!-- product: csharpalapok -->
          <div class="col-12 col-sm-6 col-lg-4">
            <div class="single-feature">
              <h5>Multiplatform C# 2018</h5>
              <p class="mb-2">Ez egy lexikális, minden sarokba benézős tanfolyam, ééés: mindent kipróbálunk Windows-on és Linuxon is.</p>
              <small>
                <gtm-link :gtm-data="GTMProductCollection.csharpalapok" href="https://app.netacademia.hu/Tanfolyam/2018csharpalapok-c-alapok-2018-a-multiplatform-c">
                  A tanfolyam részletei...
                </gtm-link>
              </small>
            </div>
          </div>
          <!-- Single Feature Start -->
          <!-- product: prox -->
          <div class="col-12 col-sm-6 col-lg-4">
            <div class="single-feature">
              <h5>Videovágás alapok</h5>
              <p class="mb-2">Elsajátíthatjuk a Final Cut Pro X videovágó szoftver legfrissebb verziójának alapjait, így képesek leszünk minőségi videókat elkészíteni.</p>
              <small>
                <gtm-link :gtm-data="GTMProductCollection.prox" href="https://app.netacademia.hu/Tanfolyam/2018prox-videovagas-alapok--final-cut-pro-x-el">
                  A tanfolyam részletei...
                </gtm-link>
              </small>
            </div>
          </div>
          <div class="col-12 text-center ulti pt-4">
            <p>Ha kínálatunk elnyerte a tetszésed, fizess elő egy évre, hogy korlátlanul tanulhass! Most 99.900 Ft + áfa</p>
            <div class="mx-auto button-ulti">
              <gtm-link :gtm-data="GTMProductCollection.ultimate" href="/ultimateakcio">
                Előfizetek
              </gtm-link>
            </div>
          </div>
        </div>

      </div>
    </section>

  </main>
</template>

<script>
import GtmLink from "~/components/GtmLink.vue";
import Bounce from "~/components/Bounce.vue";

export default {
  components: { GtmLink, Bounce },
  layout: "logo-footer",
  data: function() {
    return {
      GTMProductCollection: {
        web: {
          name: "Lenyűgöző weblapok készítése",
          id: "2017htmllanding-lenyugozo-weblapok-keszitese",
          price: "0",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Lenyűgöző tanfolyamok",
          position: 1,
          PCategories: ["Ingyenes"]
        },
        unity: {
          name: "Lenyűgöző Unity",
          id: "2018unitylenyug-lenyugozo-unity",
          price: "0",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Lenyűgöző tanfolyamok",
          position: 2,
          PCategories: ["Ingyenes"]
        },
        csharp: {
          name: "Lenyűgöző C# programozás",
          id: "2018csharp-lenyugozo-c-programozas",
          price: "0",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Lenyűgöző tanfolyamok",
          position: 3,
          PCategories: ["Ingyenes"]
        },
        windows: {
          name: "Windows server alapismeretek, telepítés",
          id: "2018wu00-windows-server-alapismeretek-telepites",
          price: "0",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Lenyűgöző tanfolyamok",
          position: 4,
          PCategories: ["Ingyenes"]
        },
        bootstrap: {
          name: "Bootstrap 4",
          id: "2018bt4-bootstrap4",
          price: "37973",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Lenyűgöző tanfolyamok",
          position: 5,
          PCategories: [
            "Webfejlesztő leszek! Angular + VueJS",
            "Webfejlesztő leszek! VueJS Edition"
          ]
        },
        webtodo: {
          name: "Az első webes C# projektem: TO-DO alkalmazás készítése",
          id:
            "2018webtodo-az-elso-webes-c-projektem-to-do-alkalmazas-keszitese",
          price: "62230",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Lenyűgöző tanfolyamok",
          position: 6,
          PCategories: ["Certified Junior C# Developer"]
        },
        cissp: {
          name: "Certified Information Systems Security Pro - CISSP",
          id: "2018CISSP-certified-information-systems-security-pro---cissp",
          price: "252730",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Lenyűgöző tanfolyamok",
          position: 7,
          PCategories: []
        },
        javascript: {
          name: "Javascript - Szent Habakuk, hisz játszom!",
          id: "2018javascript-javascript---szent-habakuk-hisz-jatszom",
          price: "37973",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Lenyűgöző tanfolyamok",
          position: 8,
          PCategories: [
            "Webfejlesztő leszek! VueJS Edition",
            "Webfejlesztő leszek! Angular + VueJS"
          ]
        },
        csharpalapok: {
          name: "C# alapok 2018: a multiplatform C#",
          id: "2018csharpalapok-c-alapok-2018-a-multiplatform-c",
          price: "74930",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Lenyűgöző tanfolyamok",
          position: 9,
          PCategories: ["Certified Junior C# Developer"]
        },
        prox: {
          name: "Videovágás alapok – Final Cut Pro X használatával",
          id: "2018prox-videovagas-alapok--final-cut-pro-x-el",
          price: "37973",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Lenyűgöző tanfolyamok",
          position: 10,
          PCategories: ["Office"]
        },
        ultimate: {
          name: "Ultimate előfizetés",
          id: "ultimateakcio",
          price: "126873",
          brand: "NetAcademia",
          category: "Elofizetes",
          variant: "",
          list: "Lenyűgöző tanfolyamok",
          position: 11
        }
      }
    };
  }
};
</script>

<style scoped>
.wellcome_area {
  background-color: #fafafa;
  background-image: linear-gradient(
      rgba(58, 57, 127, 0.2),
      rgba(58, 57, 127, 0.2)
    ),
    url(~/assets/lenyugozo-tanfolyamok/background-mobv2.png);
  min-height: 85vh;
  background-size: cover;
  z-index: 1;
  background-position: top center;
  padding-top: 20px;
}

.wellcome-heading h2 {
  font-size: 2.3rem;
  color: #ffffff;
  font-weight: 700;
  position: relative;
  z-index: 3;
  margin-top: 20px;
  margin-bottom: 20px;
}

.block {
  margin-top: 180px;
}

.wellcome-heading {
  margin-bottom: 40px;
  font-size: 1.2rem;
  font-weight: 400;
  color: #fff;
}

@media (min-width: 495px) {
  .wellcome-heading h2 {
    font-size: 4rem;
    margin-top: 60px;
    margin-bottom: 40px;
  }
  .wellcome-heading {
    font-size: 1.5rem;
  }
}

@media (min-width: 800px) {
  .wellcome-heading h2 {
    font-size: 5rem;
    margin-top: 80px;
    margin-bottom: 25px;
  }
  .wellcome-heading {
    font-size: 1.5rem;
  }
  .wellcome_area {
    background-color: #fafafa;
    background-image: linear-gradient(
        rgba(58, 57, 127, 0.2),
        rgba(58, 57, 127, 0.2)
      ),
      url(~/assets/lenyugozo-tanfolyamok/backgroundv2.jpg);
    min-height: 70vh;
  }
}

@media (min-width: 1000px) {
  .wellcome-heading h2 {
    font-size: 5rem;
    margin-top: 100px;
    margin-bottom: 40px;
  }
  .wellcome-heading {
    font-size: 1.4rem;
  }
}

@media (min-width: 1400px) {
  main {
    font-size: 17px;
  }
}

.single-special h4 {
  font-size: 1.7rem;
  color: #5b32b4;
  margin-bottom: 0px;
  font-weight: 700;
}

.blockk a {
  text-decoration: none;
}

.single-special {
  border: 1.5px solid #eff2f6;
  background: rgba(255, 255, 255, 0.8);
  padding: 40px;
  border-radius: 20px 20px 20px 20px;
  -webkit-transition-duration: 600ms;
  -o-transition-duration: 600ms;
  transition-duration: 600ms;
  margin-bottom: 30px;
  height: 200px;
  margin-top: 30px;
}

.special_description_content h2 {
  color: #5b32b4;
  font-size: 48px;
  margin-bottom: 30px;
}

.single-special:hover {
  -webkit-box-shadow: 0 10px 90px rgba(0, 0, 0, 0.3);
  box-shadow: 0 10px 90px rgba(0, 0, 0, 0.3);
}

.single-special p {
  margin-bottom: 0;
}

.single-feature {
  margin-bottom: 50px;
}

.single-feature p {
  margin-bottom: 0;
}

.single-feature h2 {
  color: #5b32b4;
}

.single-feature p {
  margin-top: 15px;
}

.line-shape-white,
.line-shape {
  width: 80px;
  height: 2px;
  background-color: orange;
  margin-top: 15px;
}

.line-shape {
  margin-left: calc(50% - 40px);
}

.button {
  background-color: #6f52e5;
  font-weight: 700;
  height: 50px;
  min-width: 167px;
  line-height: 46px;
  text-align: center;
  border-radius: 24px 24px 24px 24px;
  margin-top: 2rem;
}

.button:hover {
  background: orange;
  -webkit-transition-duration: 500ms;
  -o-transition-duration: 500ms;
  transition-duration: 500ms;
}

.button a {
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
}

.button-ulti {
  background-color: orange;
  font-weight: 700;
  height: 50px;
  width: 167px;
  line-height: 46px;
  text-align: center;
  border-radius: 24px 24px 24px 24px;
  margin-top: 2rem;
}

.button-ulti:hover {
  background: #6f52e5;
  -webkit-transition-duration: 500ms;
  -o-transition-duration: 500ms;
  transition-duration: 500ms;
}

.button-ulti a {
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
}

.ulti p {
  font-size: 1.2rem;
  font-weight: 600;
}
</style>
