<template>
  <main>
    <CertiTopHero class="hero-bg"
                  page-title="Certified Junior C# Developer"
                  lead-text=" - avagy első kalandjaim a cápakeltetőben"
                  sales-pitch-text="Kíváncsi vagy a programozás világára? Akkor ezt a képzéssorozatunkat Neked találtuk
                  ki! TELJESEN A KEZDŐ SZINTTŐL több izgalmas projekten keresztül sajátíthatod el profi oktatóinktól a
                  C# alapjait, melyet ma már nagyon sokféle fejlesztésre használhatunk. A megoldásod futhat a Microsoft
                  Hololens kiterjesztett valóságában, kaphat parancsokat a Google Alexa otthoni asszisztensétől is,
                  vagy akár saját játékot kódolhatsz."
    >
      <img slot="lead-icon" src="~/assets/junior-csharp-developer/csharp-icon.svg" alt="csharp-icon" class="img-fluid" width="60">
      <nuxt-link slot="call-to-action" to="#reszletek" class="btn-cus btn-cus-purple btn-lg ml-3 px-5">Részletek</nuxt-link>
    </CertiTopHero>

    <CertiFeatures price="Most csak 69.900 Ft"></CertiFeatures>

    <TimelineContainer id="reszletek">
      <TimelineCard title="Lenyűgöző C# programozás"
                    length="4 óra"
                    price="ingyenes"
                    description="Készítsünk együtt csevegő robotot!"
                    description2="A kurzus során bepillantást nyerhetsz abba, hogyan kódol egy C# programozó: l
                    étrehozunk és beüzemelünk egy chatbotot teljesen nulláról, hogy a kezdők számára is világos legyen
                    minden lépés."
                    logo-bg="#193D94"
                    card-header-bg="#048DD6"
                    direction="left"
      >
        <img slot="picture" src="~/assets/junior-csharp-developer/csharp-icon.svg" alt="csharp-icon">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.lenyugozo"
                 href="https://app.netacademia.hu/Tanfolyam/2018csharp-lenyugozo-c-programozas"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="Kártyajáték XAML és C# használatával"
                    length="16 óra"
                    price="49.900 Ft+áfa"
                    description="Egy működő kártyajátékot csinálunk a Microsoft grafikus felületek programozásához
                    használt eszközével (XAML). Lerakjuk az ezt követő tanfolyamok alapjait és részletes bepillantást
                    yerünk a C# programozás világába."
                    logo-bg="#048DD6"
                    card-header-bg="#193D94"
                    direction="right"
      >
        <img slot="picture" src="~/assets/junior-csharp-developer/csharp-icon.svg" alt="csharp-icon">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.modern"
                 href="https://app.netacademia.hu/Tanfolyam/2018XAML-kartyajatek-xaml-es-c-hasznalataval"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="Az első webes C# projektem: TO-DO alkalmazás készítése"
                    length="16 óra"
                    price="49.900 Ft+áfa"
                    description="Irány a web! Akartad már listázni a teendőidet? Akkor itt az ideje, hogy együtt
                    fejlesszünk egy To-do alkalmazást! Tanulunk a webes környezet alapvető fogalmairól, eszközeiről és
                    az alkalmazásfejlesztés lépéseiről. Kezelünk adatokat, és a lehető leggyorsabb és leghatékonyabb
                    módon adatbázisba is rendezzük őket. Az utóbbi évtized legmenőbb adatkezelési módszertanát is
                    megismerjük."
                    logo-bg="#193D94"
                    card-header-bg="#048DD6"
                    direction="left"
      >
        <img slot="picture" src="~/assets/junior-csharp-developer/csharp-icon.svg" alt="csharp-icon">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.ketd"
                 href="https://app.netacademia.hu/Tanfolyam/2018webtodo-az-elso-webes-c-projektem-to-do-alkalmazas-keszitese"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="Bevezetés az objektumorientált világba: a SNAKE projekt"
                    length="12 óra"
                    price="29.900 Ft+áfa"
                    description="Kigyós játék! Bevezetés az objektumorientált fejlesztésbe az XAML segítségével.
                    Szoftverfejlesztés a XXI. században. Az eddig elsajátított tudásra alapozva nagyobb projektbe
                    vágunk, újabb eszközöket használunk, és egy klasszikus, de még mindig menő játékot implementálunk:
                    a kígyót. Irányíts, egyél, szerezz pontot, nőj meg!"
                    logo-bg="#048DD6"
                    card-header-bg="#193D94"
                    direction="right"
      >
        <img slot="picture" src="~/assets/junior-csharp-developer/csharp-icon.svg" alt="csharp-icon">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.ui"
                 href="https://app.netacademia.hu/Tanfolyam/2018snake-bevezetes-az-objektumorientalt-vilagba-a-snake-projekt"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="Betekintés az objektumorientált programozásba a weben is: az étterem projekt"
                    length="24 óra"
                    price="49.900 Ft+áfa"
                    description="Újabb eszközöket hajtunk igánk alá a C#/.NET fejlesztési környezetben. Készítünk egy
                    új webes alkalmazást, közben pedig profi fejlesztők által használt módszerek 80%-át is megismerjük.
                    Az objektumorientált eszközök használatát tovább bővítjük, sok hiányzó mozaikot a helyére rakunk,
                    megírva egy étterem kezdetleges weboldalát, ahol megtalálható a menü, ráadásul még asztalt is
                    foglalhatunk!"
                    logo-bg="#193D94"
                    card-header-bg="#048DD6"
                    direction="left"
      >
        <img slot="picture" src="~/assets/junior-csharp-developer/csharp-icon.svg" alt="csharp-icon">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.advanced"
                 href="https://app.netacademia.hu/Tanfolyam/2018Restaurant-betekintes-az-objektumorientalt-programozasba-a-weben-is-az-etterem-projekt"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="C# alapok 2018: a multiplatform C#"
                    length="40 óra"
                    price="59.900 Ft+áfa"
                    description="A tanfolyamsorozatban elérkeztünk oda, ahol már sok mindent használunk, a bevált
                    módszereket reflexből gépeljük, itt az ideje tehát egy kis programozási mélyvíznek! Mentőmellény
                    azért nem fog kelleni, egyszerűen csak körbejárjuk a C# nyelvi elemeit, és részletesen
                    megismerkedünk azokkal. Természetesen mindezt multiplatform módon, hiszen 2018-at írunk! Ki ne
                    szeretne egyszerre mindenre programozni?. Aki ezt a tanfolyamot elvégzi, annak sok meglepetést a
                    C# nyelv és a .NET környezet már biztosan nem fog okozni. Részletes és gyakorlatias példákon
                    keresztül benézünk az ágy alá, és jön a felismerés: nem is akkora szörnyeteg ez a programozás!"
                    logo-bg="#048DD6"
                    card-header-bg="#193D94"
                    direction="right"
      >
        <img slot="picture" src="~/assets/junior-csharp-developer/csharp-icon.svg" alt="csharp-icon">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.advanced"
                 href="https://app.netacademia.hu/Tanfolyam/2018csharpalapok-c-alapok-2018-a-multiplatform-c"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="Alkalmazásfejlesztés C# nyelven: projekt feladat"
                    length="32 óra"
                    price="59.900 Ft+áfa"
                    description="Gratulálhatunk magunknak, hiszen eljutottunk a junior C# programozókat képző
                    tanfolyamunk záró részéhez, így tehát feltesszük a koronát az eddigiekre: immár rengeteg ismerettel
                    és tapasztalattal belevágunk egy zöldmezős fejlesztésbe! Teljesen nulláról megtanuljuk, hogyan is
                    néz ki egy átlagos fejlesztési folyamat, mi az a fejlesztési workflow, mi az a build pipeline,
                    hogyan tudunk fejlesztőként együttműködni kódtáron keresztül, milyen egy hiba életciklusa.
                    Megtanuljuk a hatékony hibekeresés módjait, hogy ne csak keressük, de meg is találjuk azokat a
                    bosszantó sorokat!"
                    logo-bg="#193D94"
                    card-header-bg="#048DD6"
                    direction="left"
      >
        <img slot="picture" src="~/assets/junior-csharp-developer/csharp-icon.svg" alt="csharp-icon">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.advanced"
                  href="https://app.netacademia.hu/Tanfolyam/2018csharpprojekt-alkalmazasfejlesztes-c-nyelven-projekt-feladat"
        >Részletek...
        </gtm-link>
      </TimelineCard>

    </TimelineContainer>
    <div class="row justify-content-center text-center py-5 mx-0 align-self-center">
      <div class="col-12 col-lg-4 p-4 bg-card m-2 align-self-center py-5 px-3 single-special">
        <p class="mb-4">A Certified Junior C# Developer tanfolyamcsomag ára
          <br>bruttó
          <span class="ar">69.900 Ft</span>
        </p>
        <gtm-link isAddToCart :gtm-data="GTMProductCollection.addToCartUnity"
                 href="https://app.netacademia.hu/Subscription/Create/certified-junior-c-developer"
                  class="btn-cus btn-cus-purple mb-5 px-5"
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
                <p class="mb-3">A NetAcademia Certificate-tel egy olyan tanúsítványt hoztunk létre, mely egyaránt leképezi oktatási hozzáállásunkat
                  és módszertanunkat: gyakorlatias és projekt-alapú. A sikeres vizsga bizonyíték arra, hogy képes vagy C# nyelven
                  programozni több platformra, legyen szó Windows desktop vagy webes alkalmazásról, használni tudod a XAML-t,
                  tisztában vagy az objektumorientáltsággal, eligazodsz a .NET környezetben.</p>
                <nuxt-link to="/certificate">Bővebben a Certificate-ről...</nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-12 mx-auto col-lg-5 border p-5 ulticol text-center my-auto">
            <h2>Ultimate kedvezmény</h2>
            <p class="mt-4">Van már Certified Junior C# Developer előfizetésed? Tanulj tovább, mélyítsd el velünk informatikusi ismereteidet!
              Írj nekünk az
              <span class="text-success">iroda@netacademia.net</span> e-mail címre, és a C# Developer árát most beszámítjuk Ultimate előfizetésünkbe!</p>
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
          lenyugozo: {
            name: "Lenyűgöző Unity",
            id: "2018unitylenyug-lenyugozo-unity",
            price: "0",
            brand: "NetAcademia",
            category: "Tanfolyam",
            variant: "",
            list: "Certified Unity Developer",
            position: 1,
            PCategories: ["Ingyenes"]
          },
          modern: {
            name: "Unity - játékfejlesztés modern eszközökkel",
            id: "2017unity-unity---jatekfejlesztes-modern-eszkozokkel",
            price: "74930",
            brand: "NetAcademia",
            category: "Tanfolyam",
            variant: "",
            list: "Certified Unity Developer",
            position: 2,
            PCategories: ["Certified Unity Developer"]
          },
          ketd: {
            name: "Unity - Bevezetés a 2D játékfejlesztésbe",
            id: "2018unity2d-unity---bevezetes-a-2d-jatekfejlesztesbe",
            price: "62230",
            brand: "NetAcademia",
            category: "Tanfolyam",
            variant: "",
            list: "Certified Unity Developer",
            position: 3,
            PCategories: ["Certified Unity Developer"]
          },
          ui: {
            name: "Unity UI",
            id: "2018unityUI-unity-ui",
            price: "62230",
            brand: "NetAcademia",
            category: "Tanfolyam",
            variant: "",
            list: "Certified Unity Developer",
            position: 4,
            PCategories: ["Certified Unity Developer"]
          },
          advanced: {
            name: "Unity advanced",
            id: "2018unityhaladó-unity-advanced",
            price: "62230",
            brand: "NetAcademia",
            category: "Tanfolyam",
            variant: "",
            list: "Certified Unity Developer",
            position: 5,
            PCategories: ["Certified Unity Developer"]
          },
          addToCartUnity: {
            name: "Certified Unity Developer 12 hónapos előfizetés",
            id: "17b62be2-c693-4fa3-a79a-382e789f838a",
            price: "69900",
            brand: "NetAcademia",
            category: "Elofizetes",
            variant: "",
            list: "Certified Unity Developer",
            position: 6
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
    url("~/assets/junior-csharp-developer/background.jpg");
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
