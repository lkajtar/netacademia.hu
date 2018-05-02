<template>
  <main>
    <header id="home" class="top-hero jumbotron-fluid pb-5 bg-faded">
      <div class="container">
        <h1 class="display-3 mb-3">Webfejlesztő leszek!
          <span>
            <br>
            <img src="~/assets/webfejleszto-vuejs/vue-icon.png" alt="vue-logo" class="img-fluid" width="60"> - vue edition - </span>
        </h1>
        <p class="lead mb-5">Projektalapú front-end fejlesztés az alapoktól</p>
        <p class="lead mt-1 mb-5">Tanfolyamsorozatunkban a front-end fejlesztés alapjait projekt alapon sajátíthatod el. Elkészítjük a fizu.hu weboldalt, melynek célja, hogy fizetéssel és munkával kapcsolatos adatokat kérjen a felhasználóktól, majd ezen adatokat felhasználva különböző statisztikák elkészítésére adjon lehetőséget. Megismerheted, hogyan tudsz összeállítani egy olyan összetett alkalmazást, ami lekezeli a regisztrációkat, a ki- és bejelentkezéseket, statisztikákat számol, diagrammokat rajzol és chatet működtet. A képzések során megtanulod, hogyan készíts a projektedből mobilapp és desktop alkalmazást is.</p>
        <div class="row">
          <a href="#reszletek" class="btn-cus-border btn-border-green btn-lg ml-3">Részletek</a>
        </div>
        <div class="text-center mt-5 d-none d-sm-block">
          <a href="#sec-1">
            <img src="~/assets/webfejleszto-vuejs/down-arrow.png" alt="down-arrow" class="img-fluid bounce arrow" width="40">
          </a>
        </div>
      </div>
    </header>

    <!-- features -->
    <section>
      <div class="bg-light pt-4 pb-2 icon-table-bg" id="sec-1"></div>
      <div class="container">
        <div class="row text-center justify-content-center bg-light icon-table">
          <div class="col-12 col-lg-3 p-4">
            <img src="~/assets/webfejleszto-vuejs/barhol-barmikor.svg" alt="" class="img-fluid" width="160">
            <p class="mt-2 lead">Bárhol, bármikor</p>
          </div>
          <div class="col-12 col-lg-3 p-4">
            <img src="~/assets/webfejleszto-vuejs/elo-online.svg" class="-fluid" width="160" alt="">
            <p class="mt-2 lead">Élő, online oktatás</p>
          </div>
          <div class="col-12 col-lg-3 p-4 mx-4">
            <img src="~/assets/webfejleszto-vuejs/fizetes.svg" class="img-fluid" width="160" alt="">
            <p class="mt-2 lead">Most csak 29.900 Ft</p>
          </div>
        </div>
      </div>
    </section>

    <!-- timeline -->
    <section class="pb-5">
      <div class="container">
        <h2 class="text-center pt-5" id="reszletek">TANULÁSI ÚTVONAL</h2>
      </div>

      <div id="cd-timeline" class="cd-container">

        <!-- bootstrap -->
        <div class="cd-timeline-block vue-gtm-app" data-block-id="bootstrap">
          <div class="cd-timeline-img cd-bootstrap">
            <img src="~/assets/webfejleszto-vuejs/bootstrap-icon.png" alt="bootstrap">
          </div>

          <div class="cd-timeline-content animatable bounceInLeft">
            <h3 class="card-header-bg-bt py-3 text-center">Bootstrap 4</h3>
            <hr>
            <p class="font-weight-light m-0">20 óra - 29.900 Ft+áfa</p>
            <p>A Bootstrap egy olyan keretrendszer, aminek a használatával rendkívül gyorsan tudunk könnyen átlátható és látványos weboldalakat készíteni. A kurzus során projekt alapon, gyakorlati módon ismerjük meg a HTML és CSS kódolást, és a Bootstrap segítségével felépítünk egy ütős oldalt. Ismerd meg a webfejlesztés alapjait és készítsd el a fizu.hu-t!
            </p>
            <a href="https://netacademia.hu/Tanfolyam/2018bt4-bootstrap4" class="py-2" @click="GTMEvent('productClick', 'bootstrap')" @mouseDown.middle="GTMEvent('productClick', 'bootstrap')">Részletek...</a>
          </div>
        </div>

        <!-- jquery -->
        <div class="cd-timeline-block vue-gtm-app" data-block-id="jquery">
          <div class="cd-timeline-img cd-jquery">
            <img src="~/assets/webfejleszto-vuejs/jquery-icon.png" alt="jquery">
          </div>

          <div class="cd-timeline-content animatable bounceInRight">
            <h3 class="card-header-bg-jq py-3 text-center">jQuery - alapozás</h3>
            <hr>
            <p class="font-weight-light m-0">8 óra - 19.900 Ft+áfa</p>
            <p>Megismerkedünk közelebbről a jQuery könyvtárral. Belenézünk hogyan lehet variálni a korábban használt Bootstrap elemeket. Validálni fogunk formokat, dobunk fel a felhasználóknak modalokat és bizonyos szűrők mentén adatokat jelenítünk meg.</p>
            <a href="https://netacademia.hu/Tanfolyam/2018jquery-jquery---alapozas" class="py-2" @click="GTMEvent('productClick', 'jquery')" @mouseDown.middle="GTMEvent('productClick', 'jquery')">Részletek...</a>
          </div>
        </div>

        <!-- javascript -->
        <div class="cd-timeline-block vue-gtm-app" data-block-id="javascript">
          <div class="cd-timeline-img cd-javascript">
            <img src="~/assets/webfejleszto-vuejs/javascript-icon.png" alt="javascript">
          </div>

          <div class="cd-timeline-content animatable bounceInLeft">
            <h3 class="card-header-bg-js py-3 text-center">Javascript - Szent Habakuk, hisz játszom!</h3>
            <hr>
            <p class="font-weight-light m-0">16 óra - 29.900 Ft+áfa</p>
            <p>Lemegyünk az alap JavaScript szintjére mindenféle könyvtár és keretrendszer nélkül. Kis játékos projekteket valósítunk meg, melyeken keresztül megismerjük a JavaScript és a front-end fejlesztés alapjait. Ez a tudás a későbbiekben felbecsülhetetlen értékkel fog bírni számunkra, hiszen érteni fogjuk azt is, ahol a többiek csak pislognak.</p>
            <a href="https://www.netacademia.hu/Tanfolyam/2018javascript-javascript---szent-habakuk-hisz-jatszom" class="py-2" @click="GTMEvent('productClick', 'javascript')" @mouseDown.middle="GTMEvent('productClick', 'javascript')">Részletek...</a>
          </div>
        </div>

        <!-- git -->
        <div class="cd-timeline-block vue-gtm-app" data-block-id="git">
          <div class="cd-timeline-img cd-git">
            <img src="~/assets/webfejleszto-vuejs/git-icon.png" alt="git">
          </div>

          <div class="cd-timeline-content animatable bounceInRight">
            <h3 class="card-header-bg-git py-3 text-center">GIT - fájdalommentes verziókövetés</h3>
            <hr>
            <p class="font-weight-light m-0">4 óra - 9.900 Ft+áfa</p>
            <p>A verziókövetés a projektünkben az, mint a korrektúra a word-ben. Mindig lesznek olyan helyzetek a munkánk során, amikor rájövünk, hogy vissza kell állni egy korábbi állapotra, vagy össze kell fésülnünk a munkánkat más fejlesztőkével. Ebben van segítségünkre a GIT.</p>
            <a href="https://netacademia.hu/Tanfolyam/2018GIT-git---fajdalommentes-verziokovetes" class="py-2" @click="GTMEvent('productClick', 'git')" @mouseDown.middle="GTMEvent('productClick', 'git')">Részletek...</a>
          </div>
        </div>

        <!-- vue -->
        <div class="cd-timeline-block vue-gtm-app" data-block-id="vue">
          <div class="cd-timeline-img cd-vue">
            <img src="~/assets/webfejleszto-vuejs/vue-icon.png" alt="vue">
          </div>

          <div class="cd-timeline-content animatable bounceInLeft">
            <h3 class="card-header-bg py-3 text-center">VueJS - Ja, hogy ezt így is lehet</h3>
            <hr>
            <p class="font-weight-light m-0">16 óra - 19.900 Ft+áfa</p>
            <p>Ebben a kurzusban elkezdjük felépíteni a fizu.hu projektet, miközben megismerjük magát a VueJS frameworköt is. A feladatok az elején ismerősek lesznek, mert a jQuery-s részek átírásával fogunk kezdeni, majd tovább haladunk a kész alkalmazás irányába.
            </p>
            <a href="https://www.netacademia.hu/Tanfolyam/2018vuejs2-vuejs---ja-hogy-ezt-igy-is-lehet" class="py-2" @click="GTMEvent('productClick', 'vue')" @mouseDown.middle="GTMEvent('productClick', 'vue')">Részletek...</a>
          </div>
        </div>

        <!-- vue-advanced -->
        <div class="cd-timeline-block vue-gtm-app" data-block-id="vue-advanced">
          <div class="cd-timeline-img cd-vue">
            <img src="~/assets/webfejleszto-vuejs/vue-icon.png" alt="vue">
          </div>

          <div class="cd-timeline-content animatable bounceInRight">
            <h3 class="card-header-bg py-3 text-center">Vue - A végtelenbe és tovább!</h3>
            <hr>
            <p class="font-weight-light m-0">16 óra - 29.900 Ft+áfa</p>
            <p>Haladunk a projektünkkel tovább, közben a szakmai mélységekbe is belekukkantunk. Megnézzük, hogy mi mindennel tudjuk biztosítani a projektünk számára, hogy túlélje a változó igényeket, az elhúzódó fejlesztési időt és közben támogasson minket a józan eszünk megőrzésében is.</p>
            <a href="https://www.netacademia.hu/Tanfolyam/2018vuejs3-vue---a-vegtelenbe-es-tovabb" class="py-2" @click="GTMEvent('productClick', 'vue-advanced')" @mouseDown="GTMEvent('productClick', 'vue-advanced')">Részletek...</a>
          </div>
        </div>
      </div>

      <div class="row justify-content-center text-center py-5 mx-0 align-self-center vue-gtm-app">
        <div class="col-12 col-lg-3 p-4 bg-card m-2 align-self-center py-5 px-3">
          <p class="mb-4">Vedd meg a Webfejlesztő leszek! Angular editiont és a Webfejlesztő leszek! Vue.js editiont most
            <br>bruttó
            <span class="ar">39.800 </span>Ft!</p>
          <a href="https://netacademia.hu/Subscription/Create/webfejleszto-leszek-angular-es-vuejs" class="btn-cus btn-cus-orange" @click="GTMEvent('addToCart', 'combo')" @mouseDown.middle="GTMEvent('addToCart', 'combo')">Megveszem!</a>
        </div>
        <div class="col-12 col-lg-3 p-4 bg-card m-2 align-self-center py-5 px-3">
          <p class="mb-4">Van már Webfejlesztő leszek! előfizetésed? Akkor neked a Webfejlesztő leszek! Vue.js edition most csak
            <br>bruttó
            <span class="ar">9.900 </span>Ft!</p>
          <a href=" https://www.netacademia.hu/Subscription/Create/0ceafbab-4b10-4835-9a25-f4a4876690b6" class="btn-cus btn-cus-orange mb-4" @click="GTMEvent('addToCart', 'vueAsExtension')" @mouseDown.middle="GTMEvent('addToCart', 'vueAsExtension')">Megveszem!</a>
        </div>
        <div class="col-12 col-lg-3 p-4 bg-card m-2 align-self-center py-5 px-3">
          <p class=" mb-4">Webfejlesztő leszek! – Vue edition – tanfolyamcsomag ára
            <br>bruttó
            <span class="ar">29.900</span> Ft!</p>
          <a href=" https://netacademia.hu/Subscription/Create/webfejleszto-leszek-vuejs-edition" class="btn-cus btn-cus-orange mb-4" @click="GTMEvent('addToCart', 'vue')" @mouseDown.middle="GTMEvent('addToCart', 'vue')">Megveszem!</a>
        </div>
      </div>
    </section>

    <!-- certificate, mas kurzusok -->
    <section class="bg-light">
      <div class="container">
        <div class="row py-5">
          <div class="col-12 col-lg-7 mx-auto">
            <div class="row">
              <div class="col-11 mx-auto my-4">
                <h4 class="pb-3">Szerezz NetAcademia Certificate-et!</h4>
                <p class="mb-3">A NetAcademia Certificate-tel egy olyan tanúsítványt hoztunk létre, mely egyaránt leképezi oktatási hozzáállásunkat és módszertanunkat: gyakorlatias és projekt-alapú. A sikeres vizsga bizonyíték arra, hogy képes vagy statikus és dinamikus reszponzív weboldalak készítésére, elboldogulsz a webprogramozás és az alkalmazásfejlesztés világában is.</p>
                <a href="https://netacademia.hu/certificate">Bővebb információ</a>
              </div>
              <div class="col-11 mx-auto col-lg-11 my-4">
                <h4 class="pb-3">Webfejlesztő leszek!
                  <br>
                  <span>-angular edition-</span>
                </h4>
                <p class="mb-3">Ebben a tanfolyamsorozatunkban a főszerepet az Angular keretrendszer kapta, és a kurzus során egy Vatera-szerű alkalmazást készíthetsz el velünk.</p>
                <a href="https://netacademia.hu/webfejleszto-angular" class="">Bővebben az Angular edition tanfolyamról...</a>
              </div>
            </div>
          </div>
          <div class="col-12 mx-auto col-lg-5 border p-5 ulticol text-center my-auto">
            <h2>Ultimate kedvezmény</h2>
            <p class="mt-4">Van már Webfejlesztő leszek előfizetésed? Tanulj tovább full-stack fejlesztővé! Írj nekünk az
              <span class="text-success">iroda@netacademia.net</span> e-mail címre, és a Webfejlesztő útvonal árát most beszámítjuk Ultimate előfizetésünkbe!</p>
            <!--<a href="#" class="btn-cus-border btn-cus btn-border-green px-3 text-center ">Ultimate előfizetést szeretnék!</a>-->
          </div>
        </div>
      </div>
    </section>

    <!-- beharangozo -->
    <div class="container">
      <div class="row justify-content-center py-5">
        <div class="col-11 col-lg-8">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/f1dDEuFqrsI" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'bs-logo-footer'
};
</script>

<style>
main {
  font-size: 100%;
  background-color: #e9f0f5;
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

/*gombok*/

.btn-cus {
  padding: 10px 20px;
  border-radius: 40px;
  font-weight: bold;
  cursor: pointer;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  text-decoration: none;
  color: #ffffff;
}

.btn-cus:hover {
  text-decoration: none;
  color: #ffffff;
}

.btn-cus-orange {
  background: #e55a0c;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 500;
}

.btn-cus-orange:hover {
  background: #fe870d;
}

.text-orange {
  color: #e55a0c;
  font-weight: bold;
}

.btn-cus-border {
  padding: 10px 20px;
  border-radius: 40px;
  font-weight: bold;
  cursor: pointer;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  text-decoration: none;
}

.btn-cus-border:hover {
  text-decoration: none;
}

.btn-border-red {
  border: 2px solid #c21500;
  color: #c21500;
}

.btn-border-red:hover {
  background: #c21500;
  color: #ffffff;
}

.btn-border-blue {
  border: 2px solid #2197c7;
  color: #2197c7;
}

.btn-border-blue:hover {
  background: #2197c7;
  color: #ffffff;
}

.btn-border-green {
  border: 2px solid #41b883;
  color: #41b883;
}

.btn-border-green:hover {
  background: #41b883;
  color: #ffffff;
}

/*top-hero*/

.top-hero {
  background-color: #fafafa;
  background-image: linear-gradient(
      rgba(43, 45, 66, 0.65),
      rgba(43, 45, 66, 0.65)
    ),
    url('~/assets/webfejleszto-vuejs/background.jpg');
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
  min-height: 100vh;
  padding-top: 20px;
  display: flex;
  align-items: center;
}

.top-hero h1 {
  color: #ffffff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  text-transform: uppercase;
  width: 85%;
  letter-spacing: -1px;
  line-height: 0.9;
  margin-top: 110px;
}

.top-hero h1 span {
  font-size: 50%;
}

h4 {
  text-transform: uppercase;
  letter-spacing: -1px;
}

h4 span {
  font-size: 60%;
}

.top-hero p {
  color: #edf2f4;
}

@media only screen and (max-width: 768px) {
  .top-hero {
    min-height: 950px;
    padding-top: 30px;
  }
  .top-hero h1 {
    font-size: 36px;
    margin-top: 10px;
  }
  .top-hero p {
    font-size: 18px;
  }
}

/*top-hero-arrow*/

@-webkit-keyframes bounce {
  0%,
  100% {
    -webkit-transform: translateY(-7%);
    transform: translateY(-7%);
  }
  50% {
    -webkit-transform: translateY(7%);
    transform: translateY(7%);
  }
}

@keyframes bounce {
  0%,
  100% {
    -webkit-transform: translateY(-7%);
    transform: translateY(-7%);
  }
  50% {
    -webkit-transform: translateY(7%);
    transform: translateY(7%);
  }
}

.bounce {
  -moz-animation: bounce 1s infinite;
  -webkit-animation: bounce 1s infinite;
  animation: bounce 1s infinite;
}

.arrow {
  margin-top: 110px;
}

/*timeline*/

.cd-container {
  width: 90%;
  max-width: 1170px;
  margin: 0 auto;
}

.cd-container::after {
  content: '';
  display: table;
  clear: both;
}

#cd-timeline {
  position: relative;
  padding: 2em 0;
  margin-top: 3em;
  margin-bottom: 3em;
}

#cd-timeline::before {
  /* this is the vertical line */
  content: '';
  position: absolute;
  top: 0;
  left: 33px;
  height: 100%;
  width: 4px;
  background: #ffffff;
}

@media only screen and (min-width: 1170px) {
  #cd-timeline {
    margin-top: 3em;
    margin-bottom: 3em;
  }
  #cd-timeline::before {
    left: 50%;
    margin-left: -2px;
  }
}

.cd-timeline-block {
  position: relative;
  margin: 2em 0;
}

.cd-timeline-block::after {
  clear: both;
  content: '';
  display: table;
}

.cd-timeline-block:first-child {
  margin-top: 0;
}

.cd-timeline-block:last-child {
  margin-bottom: 0;
}

@media only screen and (min-width: 1170px) {
  .cd-timeline-block {
    margin: 4em 0;
  }
  .cd-timeline-block:first-child {
    margin-top: 0;
  }
  .cd-timeline-block:last-child {
    margin-bottom: 0;
  }
}

.cd-timeline-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #ffffff, inset 0 2px 0 rgba(0, 0, 0, 0.08),
    0 3px 0 4px rgba(0, 0, 0, 0.05);
}

.cd-timeline-img img {
  display: block;
  height: 50px;
  position: relative;
  left: 50%;
  top: 50%;
  margin-left: -25px;
  margin-top: -25px;
}

.cd-timeline-img.cd-bootstrap {
  background: #5d3f85;
}

.card-header-bg-bt {
  background: #5d3f85;
}

.cd-timeline-img.cd-jquery {
  background: #ffffff;
}

.card-header-bg-jq {
  background: #21609b;
}

.cd-timeline-img.cd-javascript {
  background: #f0ca45;
}

.card-header-bg-js {
  background: #f0ca45;
}

.cd-timeline-img.cd-git {
  background: #f05133;
}

.card-header-bg-git {
  background: #f05133;
}

.cd-timeline-img.cd-vue {
  background: #ffffff;
}

@media only screen and (min-width: 1170px) {
  .cd-timeline-img {
    width: 90px;
    height: 90px;
    left: 50%;
    margin-left: -45px;
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
  }
}

.cd-timeline-content {
  position: relative;
  margin-left: 90px;
  background: #ffffff;
  border-radius: 0.25em;
  padding: 1em;
  box-shadow: 0 3px 0 #d7e4ed;
}

.cd-timeline-content::after {
  clear: both;
  content: '';
  display: table;
}

.cd-timeline-content .cd-read-more,
.cd-timeline-content .cd-date {
  display: inline-block;
}

.cd-timeline-content p {
  margin: 1em 0;
  line-height: 1.6;
  letter-spacing: 1px;
}

.cd-timeline-content .cd-date {
  float: left;
  padding: 0.8em 0;
  opacity: 0.7;
}

.cd-timeline-content::before {
  content: '';
  position: absolute;
  top: 16px;
  right: 100%;
  height: 0;
  width: 0;
  border: 7px solid transparent;
  border-right: 7px solid #ffffff;
}

@media only screen and (min-width: 1170px) {
  .cd-timeline-content {
    margin-left: 0;
    padding: 1.6em;
    width: 45%;
  }
  .cd-timeline-content::before {
    top: 24px;
    left: 100%;
    border-color: transparent;
    border-left-color: #ffffff;
  }
  .cd-timeline-content .cd-read-more {
    float: left;
  }
  .cd-timeline-content .cd-date {
    position: absolute;
    width: 100%;
    left: 122%;
    top: 6px;
    font-size: 16px;
    font-size: 1rem;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content {
    float: right;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
    top: 24px;
    left: auto;
    right: 100%;
    border-color: transparent;
    border-right-color: #ffffff;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {
    float: right;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {
    left: auto;
    right: 122%;
    text-align: right;
  }
}

@media (max-width: 360px) {
  .cd-timeline-content h3 {
    font-size: 1rem;
  }
}

/*ceri és kedvezmény*/

.ultimate-kedvezmeny {
  margin-top: -150px;
}

.ulticol {
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

/*ikonos rész*/

.icon-table {
  margin-top: -180px;
  margin-bottom: 100px;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.icon-table-bg {
  height: 220px;
}

.ar {
  font-size: 1.5rem;
}

.card-header-bg {
  background-color: #41b883;
}

.bg-card {
  background-color: #35495e;
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 400;
  border-radius: 2px;
}
</style>
