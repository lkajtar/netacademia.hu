<template>
<main>
  <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="/">
      <img width="40px" src="img/mainpage/logo.png" alt="NetAcademia Oktatóközpont Kft." />
    </a>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav mx-auto">
        <a class="nav-item nav-link active" href="/elofizetes">Előfizetés
          <span class="sr-only">(current)</span>
        </a>
        <a class="nav-item nav-link" href="/indulotanfolyamok">Induló tanfolyamok</a>
        <a class="nav-item nav-link" href="/tanfolyamkeresov2">Tanfolyamkereső</a>
        <a class="nav-item nav-link" href="/ultimateakcio">Akció</a>
        <a class="nav-item nav-link" href="/certificate">NetAcademia vizsga</a>
      </div>
    </div>
  </nav>
  <header id="home" class="top-hero jumbotron-fluid pb-5 bg-faded">
    <div class="container">
      <h1 class="display-2 mb-1">
        <img src="~/assets/elofizetes/logo-ultimate.svg" alt="" width="50" class="img-fluid mb-2 mr-2">
        <span class="red">Net</span>Academia</h1>
      <h2 class="mb-5 mt-2">
        <span class="text-uppercase">Certificate</span>
      </h2>
      <p class="lead mt-1 mb-5">A NetAcademia Certificate programunkban olyan szakmákat tanulhatsz, melyekkel akár távmunkában is dolgozhatsz, ezzel
        jelentősen növelve a munkakeresésed esélyeit! Mindegy, hogy Piripócson élsz, vagy a Bahamákon, velünk eljuthasz a
        következő szintre. Távmunkához távtanulás dukál!</p>
<p class="lead">Több tanfolyamsorozatot is elvégeznél? Válaszd <a href="#ultimate" class="text-danger font-weight-bold">Ultimate előfizetésünket</a>, mellyel mindegyik elérhető!</p>
      <div class="row pt-2">
        <div class="col-3 col-lg-1 my-auto">
          <a href="https://app.netacademia.hu/unity-developer"><img src="~/assets/elofizetes/unity-logo.svg" alt="unity-logo" width="60"></a>
        </div>
        <div class="col-3 col-lg-1 my-auto">
          <a href="https://app.netacademia.hu/junior-csharp-developer"><img src="~/assets/elofizetes/c-sharp-logo.svg" alt="c-sharp-logo" width="60"></a>
        </div>
        <div class="col-3 col-lg-1 my-auto">
          <a href="https://app.netacademia.hu/webfejleszto-vuejs"><img src="~/assets/elofizetes/vue-logo.svg" alt="vue-logo" width="60"></a>
        </div>
        <div class="col-3 col-lg-1 my-auto">
          <a href="https://app.netacademia.hu/webfejleszto-angular"><img src="~/assets/elofizetes/angular-logo.svg" alt="angular-logo" width="60"></a>
        </div>
        <div class="col-3 col-lg-1 my-auto">
          <a href="https://app.netacademia.hu/ecommerce"><img src="~/assets/elofizetes/e-commerce-logo.svg" alt="e-commerce-logo" width="60"></a>
        </div>
        <!--<div class="col-3 col-lg-1 my-auto">
          <img src="~/assets/elofizetes/android-logo2.png" alt="android-logo" width="60">
        </div>
        -->
        <div class="col-3 col-lg-1 my-auto">
          <a href="https://app.netacademia.hu/windowsserver"><img src="~/assets/elofizetes/server-logo.png" alt="server-logo" width="60"></a>
        </div>
      </div>

      <div class="text-center mt-5 d-none d-sm-block" id="kepzes">
        <p class="text-center lead valts">Válts szakmát, és teremtsd meg a jövőd!</p>
        <a href="#akcio">
          <img src="~/assets/elofizetes/down-arrow.png" alt="down-arrow" class="img-fluid bounce arrow" width="40">
        </a>
      </div>
    </div>
  </header>

  <div class="container py-5">
    <div class="row justify-content-center text-center">
      <div class="col-12 second-title">
        <h3 class="mb-5 display-4">A jövődet meghatározó képzési útvonalaink</h3>
      </div>
      <div class="col-12">
        <p class="lead">Mindegyik tanfolyamsorozatunkhoz gyakorlati vizsga tartozik, mellyel bebizonythatod, hogy Te meg tudod csinálni!
          A presztizsértékű
          <a href="https://app.netacademia.hu/certificate" class="text-danger font-weight-bold">NetAcademia Certified</a> címmel ezt meg fogod tudni mutatni az egész világnak!</p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row pt-5 justify-content-center dotted-bg">

      <!-- product: unity -->
      <div class="col-10 col-sm-8 col-md-6 mb-5 vue-gtm-app" data-block-id="unity" v-observe-visibility="VisibilityChanged">
        <div class="row justify-content-center">
          <div class="col-12 text-center mx-auto mb-4">
            <img src="~/assets/elofizetes/unity-logo.svg" alt="unity-logo" width="130" class="mx-auto img-border">
          </div>
          <div class="col-12 text-center">
            <h4 class="my-4">Certified Unity Expert Developer</h4>
          </div>
          <div class="col-9">
            <p class="text-center title pb-4 pb-lg-0 lead text-danger font-weight-bold">A játékmester</p>
          </div>
          <div class="col-12 col-lg-6">
            <p class="text-size text-center mb-4 mb-md-0">Legyél az ország első Certified Unity Developere, és merülj el a többplatformos játékfejlesztés világában!</p>
          </div>
          <div class="col-12 mb-2 text-center">
            <p class="">
              <img src="~/assets/elofizetes/time.png" alt="idotartam" width="40" class="mr-2">55 óra</p>
          </div>
          <div class="col-12 text-center">
            <a class="btn btn-primary" href="https://app.netacademia.hu/unity-developer" role="button" @click="Clicked" @mouseDown.middle="Clicked">Megnézem</a>
          </div>
        </div>
      </div>

      <!-- product: csharp -->
      <div class="col-10 col-sm-8 col-md-6 mb-5 vue-gtm-app" data-block-id="csharp" v-observe-visibility="VisibilityChanged">
        <div class="row justify-content-center">
          <div class="col-12 text-center mx-auto mb-4">
            <img src="~/assets/elofizetes/c-sharp-logo.svg" alt="c-sharp-logo" width="130" class="mx-auto img-border">
          </div>
          <div class="col-12 text-center">
            <h4 class="my-4">Certified Junior C# Developer</h4>
          </div>
          <div class="col-9">
            <p class="text-center lead text-danger font-weight-bold">A nagyvállalati programozó</p>
          </div>
          <div class="col-11 col-lg-6">
            <p class="text-size text-center mb-4 mb-md-0">Certified Developer útvonalunkkal az alapoktól kezdve sajátíthatod el a C# programozási nyelvet! Legyen ez a
              szakmád!
            </p>
          </div>
          <div class="col-12 mb-2 text-center">
            <p class="">
              <img src="~/assets/elofizetes/time.png" alt="idotartam" width="40" class="mr-2">144 óra</p>
          </div>
          <div class="col-12 text-center">
            <a class="btn btn-primary" href="https://app.netacademia.hu/junior-csharp-developer" role="button" @click="Clicked" @mouseDown.middle="Clicked">Megnézem</a>
          </div>
        </div>
      </div>
    </div>

    <div class="row pt-5 justify-content-center dotted-bg">

      <!-- product: vue -->
      <div class="col-10 col-sm-8 col-md-6 mb-5 vue-gtm-app" data-block-id="vue" v-observe-visibility="VisibilityChanged">
        <div class="row justify-content-center">
          <div class="col-12 text-center mx-auto mb-4">
            <img src="~/assets/elofizetes/vue-logo.svg" alt="vue-logo" width="130" class="mx-auto img-border">
          </div>
          <div class="col-12 text-center">
            <h4 class="my-4">Certified Front-End Developer
              <br>
              <small>VueJS edition</small>
            </h4>
          </div>
          <div class="col-9">
            <p class="text-center lead text-danger font-weight-bold">A kezdő Front-End fejlesztő</p>
          </div>
          <div class="col-11 col-lg-6">
            <p class="text-size text-center mb-4 mb-md-0">Legyél Certified Front-End Developer, és készíts lenyűgöző weboldalakat, akár mobilapp formában is, Vue.js-sel!</p>
          </div>
          <div class="col-12 mb-2 text-center">
            <p class="">
              <img src="~/assets/elofizetes/time.png" alt="idotartam" width="40" class="mr-2">80 óra</p>
          </div>
          <div class="col-12 text-center">
            <a class="btn btn-primary" href="https://app.netacademia.hu/webfejleszto-vuejs" role="button" @click="Clicked" @mouseDown.middle="Clicked">Megnézem</a>
          </div>
        </div>
      </div>

      <!-- product: angular -->
      <div class="col-10 col-sm-8 col-md-6 mb-5 vue-gtm-app" data-block-id="angular" v-observe-visibility="VisibilityChanged">
        <div class="row justify-content-center">
          <div class="col-12 text-center mx-auto mb-4">
            <img src="~/assets/elofizetes/angular-logo.svg" alt="angular-logo" width="130" class="mx-auto img-border">
          </div>
          <div class="col-12 text-center">
            <h4 class="my-4">Certified Front-End Developer
              <br>
              <small>Angular edition</small>
            </h4>
          </div>
          <div class="col-9">
            <p class="text-center lead text-danger font-weight-bold">A haladó Front-End fejlesztő</p>
          </div>
          <div class="col-11 col-lg-6">
            <p class="text-size text-center mb-4 mb-md-0">Legyél Certified Front-End Developer, merülj el a modern webfejlesztés világában! Készíts alkalmazást bármilyen
              platformra, Angularral!</p>
          </div>
          <div class="col-12 mb-2 text-center">
            <p class="">
              <img src="~/assets/elofizetes/time.png" alt="idotartam" width="40" class="mr-2">160 óra</p>
          </div>
          <div class="col-12 text-center">
            <a class="btn btn-primary" href="https://app.netacademia.hu/webfejleszto-angular" role="button" @click="Clicked" @mouseDown.middle="Clicked">Megnézem</a>
          </div>
        </div>
      </div>



           <!-- product: ecommerce -->
      <div class="col-10 col-sm-8 col-md-6 mb-5 vue-gtm-app" data-block-id="ecommerce" v-observe-visibility="VisibilityChanged">
        <div class="row justify-content-center">
          <div class="col-12 text-center mx-auto mb-4">
            <img src="~/assets/elofizetes/e-commerce-logo.png" alt="e-commerce-logo" width="130" class="mx-auto img-border">
          </div>
          <div class="col-12 text-center">
            <h4 class="my-4">Certified E-commerce Specialist</h4>
          </div>
          <div class="col-9">
            <p class="text-center lead text-danger font-weight-bold">Az üzletember</p>
          </div>
          <div class="col-11 col-lg-6">
            <p class="text-size text-center mb-4 mb-md-0">Legyél Certified E-commerce Specialist, lendítsd fel eladásaidat, vagy készíts egy teljesen új webshopot!</p>
          </div>
          <div class="col-12 mb-2 text-center">
            <p class="">
              <img src="~/assets/elofizetes/time.png" alt="idotartam" width="40" class="mr-2">52 óra</p>
          </div>
          <div class="col-12 text-center">
            <a class="btn btn-primary" href="https://app.netacademia.hu/ecommerce" role="button" @click="Clicked" @mouseDown.middle="Clicked">Megnézem</a>
          </div>
        </div>
      </div>




 			<!--
      <div class="col-10 col-sm-8 col-md-6 mb-5 vue-gtm-app" data-block-id="android" v-observe-visibility="VisibilityChanged">
        <div class="row justify-content-center">
          <div class="col-12 text-center mx-auto mb-4">
            <img src="~/assets/elofizetes/android-logo2.png" alt="android-logo" width="130" class="mx-auto img-border">
          </div>
          <div class="col-12 text-center">
            <h4 class="my-4">Certified Android Developer</h4>
          </div>
          <div class="col-9">
            <p class="text-center lead text-danger font-weight-bold">Az App-guru</p>
          </div>
          <div class="col-11 col-lg-6">
            <p class="text-size text-center mb-4 mb-md-0">Legyél Certified Android Developer, és legyél te a mobilAppok nagymestere!</p>
          </div>
          <div class="col-12 mb-2 text-center">
            <p class="">
              <img src="~/assets/elofizetes/time.png" alt="idotartam" width="40" class="mr-2">128 óra</p>
          </div>
          <div class="col-12 text-center">
            <a class="btn btn-primary" href="https://app.netacademia.hu/androidfejleszto" role="button" @click="Clicked" @mouseDown.middle="Clicked">Megnézem</a>
          </div>
        </div>
      </div>
      -->





        <!-- product: windowsserver -->
      <div class="col-10 col-sm-8 col-md-6 mb-5 vue-gtm-app" data-block-id="windowsserver" v-observe-visibility="VisibilityChanged">
        <div class="row justify-content-center">
          <div class="col-12 text-center mx-auto mb-4">
            <img src="~/assets/elofizetes/server-logo.png" alt="server-logo" width="130" class="mx-auto img-border">
          </div>
          <div class="col-12 text-center">
            <h4 class="my-4">Certified Windows Administrator</h4>
          </div>
          <div class="col-9">
            <p class="text-center lead text-danger font-weight-bold">A rendszergazda</p>
          </div>
          <div class="col-11 col-lg-6">
            <p class="text-size text-center mb-4 mb-md-0">Legyél Certified Windows Administrator, és üzemeltess Windows Server alapú rendszereket!</p>
          </div>
          <div class="col-12 mb-2 text-center">
            <p class="">
              <img src="~/assets/elofizetes/time.png" alt="idotartam" width="40" class="mr-2">48 óra</p>
          </div>
          <div class="col-12 text-center">
            <a class="btn btn-primary" href="https://app.netacademia.hu/windowsserver" role="button" @click="Clicked" @mouseDown.middle="Clicked">Megnézem</a>
          </div>
        </div>
      </div>

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
        <div class="col-11 col-md-6 mb-lg-5 vue-gtm-app" data-block-id="ultimate" v-observe-visibility="VisibilityChanged">
          <div class="row justify-content-center">
            <div class="col-11 col-lg-9 mb-5 second-title">
              <h4 class="display-4" id="ultimate">INFORMATIKUS VAGY? SZERETNÉL AZ LENNI?</h4>
            </div>
            <div class="col-11 col-lg-9 mb-4">
              <h4>
                <img src="~/assets/elofizetes/logo-ultimate.svg" alt="logo" width="70" class="mr-2">Ultimate előfizetés</h4>
            </div>
            <div class="col-11 col-lg-9">
              <p class="text-justify">Minden informatikus álma! Korlátlan tanulás és fejlődés! Itt nincs mit magyarázni: az összes, weblapunkon elérhető
                tanfolyamunkhoz 365 napos hozzáférés!</p>
            </div>
            <div class="col-12 col-lg-9 text-center">
              <p class="py-4 lead">
                <img src="~/assets/elofizetes/time.png" alt="" width="40" class="mr-3">4000+óra</p>
            </div>
            <div class="col-10 col-lg-8 mb-3">
              <p class="text-center mx-auto list-height">CISSP, GDPR, Android, Unity, Ethical Hacking, Java, IOT, Symphony, PHP, Node.JS, Angular, Windows Server, Sharepoint,
                ISO27001
              </p>
            </div>
          </div>
          <div class="col-12 text-center mb-5">
            <a class="btn btn-primary" href="https://app.netacademia.hu/ultimateakcio" role="button" @click="Clicked" @mouseDown.middle="Clicked">Megnézem</a>
          </div>
        </div>

        <!-- product: office -->
        <div class="col-11 col-md-6 mb-lg-5 vue-gtm-app" data-block-id="office" v-observe-visibility="VisibilityChanged">
          <div class="row justify-content-center">
            <div class="col-11 col-lg-9 mb-5 second-title">
              <h4 class="display-4">SZÁMÍTÓGÉPPEL DOLGOZOL? (KI NEM?)</h4>
            </div>
            <div class="col-11 col-lg-9 mb-4">
              <h4>
                <img src="~/assets/elofizetes/logo-office.svg" alt="logo" width="70" class="mr-2">Office előfizetés</h4>
            </div>
            <div class="col-11 col-lg-9">
              <p class="text-justify">Minden irodai dolgozó álma! Hatékonyság és produktivitás növelés telefonon és számítógépen! 365 napos hozzáférés
                az összes irodai dolgozóknak szánt tanfolyamunkhoz!</p>
            </div>
            <div class="col-11 col-lg-9 text-center">
              <p class="py-4 lead">
                <img src="~/assets/elofizetes/time.png" alt="" width="40" class="mr-3">300+óra</p>
            </div>
            <div class="col-11 col-lg-8 mb-3">
              <p class="text-center mx-auto list-height">Word, Excel, OneNote, Időgazdálkodás, Stresszkezelés, Munkavédelem, Tűzvédelem, Informatikai alapismeretek,
                Képszerkesztés
              </p>
            </div>
          </div>
          <div class="col-12 text-center mb-5">
            <a class="btn btn-primary" href="https://app.netacademia.hu/officecsomag2017" role="button" @click="Clicked" @mouseDown.middle="Clicked">Megnézem</a>
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
      <div class="col-12 lead mb-5">Olyan minősítési forma ez, mely nem a totózási, hanem a problémamegoldó képességedet méri fel. Pontosan ezért képvisel
        magas értéket mind a munkaadók, mind pedig a munkavállalók szemében!​</div>
      <div class="mx-auto">
        <a class="btn btn-lg btn-danger" href="https://app.netacademia.hu/certificate" role="button">Részletek</a>
      </div>
    </div>

  </div>

  <footer style="height:200px;"></footer>
</main>

</template>

<script>
export default {
  head: {
    script: [
      { src: "https://code.jquery.com/jquery-3.3.1.slim.min.js" },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
      }
      // {
      //   rel: "stylesheet",
      //   href: "https://fonts.googleapis.com/css?family=Montserrat"
      // }
    ],
    htmlAttrs: {
      class: "base"
    },
    bodyAttrs: {
      class: "base background"
    }
  }
};
</script>

<style>
base {
  height: 100%;
  color: #ffffff;
}

background {
  background-image: url("~/assets/elofizetes/background.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  z-index: 1;
  background-position: top center;
  padding-top: 20px;
}

html {
  font-size: 18px;
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

  .text-size {
    height: 160px;
    /*width: 250px;*/
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

  .text-size {
    height: 200px;
    /*width: 250px;*/
  }

  .list-height {
    height: 120px;
  }
}

.arrow {
  margin-top: 10px;
}

.valts {
  margin-top: 120px;
}

.bounce {
  -moz-animation: bounce 1s infinite;
  -webkit-animation: bounce 1s infinite;
  animation: bounce 1s infinite;
}

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

@media (min-width: 1150px) {
  html {
    font-size: 18px;
  }
  .section-szakma {
    padding-right: 100px;
    padding-left: 100px;
  }
}

@media (min-width: 1300px) {
  html {
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
