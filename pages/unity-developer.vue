<template>
  <main>
    <CertiTopHero class="hero-bg"
                  page-title="Certified Unity Developer"
                  lead-text="Játékfejlesztés"
                  sales-pitch-text="Érdekel, hogyan készülnek napjainkban a számítógépes játékok? A Unity játékmotoron
                                    keresztül megismerheted a játékfejlesztés modern eszközeit, és rögtön el is
                                    készítheted első saját fejlesztésű játékodat! Emellett betekintést nyerhetsz a
                                    többjátékos, virtuális és kiterjesztett valóság alapú játékok fejlesztésébe is!"
    >
      <img slot="lead-icon" src="~/assets/unity-developer/unity-icon.png" alt="unity-icon" class="img-fluid" width="60">
      <a slot="call-to-action" href="#reszletek" class="btn-cus btn-cus-purple btn-lg ml-3 px-5">Részletek</a>
    </CertiTopHero>

    <CertiFeatures price="Most csak 69.900 Ft"></CertiFeatures>

    <TimelineContainer id="reszletek">
      <TimelineCard title="Lenyűgöző UNITY"
                    length="3 óra"
                    price="ingyenes"
                    description="Látványos mobil játék készítése mindössze néhány óra alatt."
                    description2="Ez a képzés egy gyakorlatias, rövid bemutató arról, hogyan lehet látványos játékokat
                    készíteni akár néhány óra leforgása alatt a Unity játékmotor segítségével. A tanfolyamon egy autós
                    3D játékot fejlesztünk okostelefonokra."
                    logo-bg="#6B273C"
                    card-header-bg="#6B273C"
                    direction="left"
      >
        <img slot="picture" src="~/assets/unity-developer/unity-icon.png" alt="unity-logo">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.lenyugozo"
                  href="https://netacademia.hu/Tanfolyam/2018unitylenyug-lenyugozo-unity"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="Unity - játékfejlesztés modern eszközökkel"
                    length="14 óra"
                    price="59.900 Ft+áfa"
                    description="Érdekel, hogyan készülnek napjainkban a számítógépes játékok? A Unity játékmotoron
                                keresztül megismerheted a játékfejlesztés modern eszközeit, és rögtön el is készítheted
                                első saját fejlesztésű játékodat! Emellett betekintést nyerhetsz a többjátékos,
                                virtuális és kiterjesztett valóság alapú játékok fejlesztésébe is!"
                    logo-bg="#284d5d"
                    card-header-bg="#284d5d"
                    direction="right"
      >
        <img slot="picture" src="~/assets/unity-developer/unity-icon.png" alt="unity-logo">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.modern"
                  href="https://netacademia.hu/Tanfolyam/2017unity-unity---jatekfejlesztes-modern-eszkozokkel"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="Unity 2D"
                    length="12 óra"
                    price="49.900 Ft+áfa"
                    description="A tanfolyamon közelebbről megismerkedünk a 2D-s játéktervezéssel. Megtudjuk, hogyan
                                használhatunk ismétlődő háttereket, hogyan alakíthatunk ki különböző textúrákat,
                                karaktereket vagy éppen akadályokat."
                    description2=" A kurzus során bemutatásra kerül a Unity új 2D szerkesztője, a Tilemap is."
                    logo-bg="#222c37"
                    card-header-bg="#222c37"
                    direction="left"
      >
        <img slot="picture" src="~/assets/unity-developer/unity-icon.png" alt="unity-logo">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.ketd"
                  href="https://netacademia.hu/Tanfolyam/2018unity2d-unity---bevezetes-a-2d-jatekfejlesztesbe"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="Unity - UI"
                    length="12 óra"
                    price="49.900 Ft+áfa"
                    description="Ezen a kurzuson a már korábban elkészített játék felhasználói felületének
                              (User Interface - UI) kialakításán fogunk dolgozni. Bevezetésre kerül a Unity UI
                              eszköztára. Megtanuljuk, hogyan jeleníthetünk meg szöveges-, és egyéb UI elemeket,
                              képeket, illetve hogyan pozícionálhatjuk mindezeket."
                    description2="A tanfolyamon megtudhatjuk azt is, hogyan használhatunk egyéb, harmadik féltől
                              származó UI témákat és megoldásokat."
                    logo-bg="#6B273C"
                    card-header-bg="#6B273C"
                    direction="right"
      >
        <img slot="picture" src="~/assets/unity-developer/unity-icon.png" alt="unity-logo">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.ui"
                  href="https://netacademia.hu/Tanfolyam/2018unityUI-unity-ui"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="Unity Advanced"
                    length="14 óra"
                    price="49.900 Ft+áfa"
                    description="Strukturáljuk Unity projektünket! Csapatmunka és verziókövetés, integrációk. Megnézzük
                                részletesen a Unity eszköztárát és a fizikai motort, megismerkedünk a Unity 2018
                                újdonságaival. Kezelünk hálózatokat is és közösségi médiával integrálunk. Végezetül
                                megismerjük a Unity felhőszolgátatásait és a Backend-as-a-Service megoldasait."
                    logo-bg="#222c37"
                    card-header-bg="#222c37"
                    direction="left"
      >
        <img slot="picture" src="~/assets/unity-developer/unity-icon.png" alt="unity-logo">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.advanced"
                  href="https://netacademia.hu/Tanfolyam/2018unityhalad%C3%B3-unity-advanced"
        >Részletek...
        </gtm-link>
      </TimelineCard>

    </TimelineContainer>
    <div class="row justify-content-center text-center py-5 mx-0 align-self-center">

      <div class="col-12 col-lg-4 p-4 bg-card m-2 align-self-center py-5 px-3 single-special">
        <p class="mb-4">A Certified Unity Developer tanfolyamcsomag ára
          <br>bruttó
          <span class="ar">69.900 Ft</span>
        </p>
        <gtm-link isAddToCart :gtm-data="GTMProductCollection.addToCartUnity"
                  href="https://netacademia.hu/Subscription/Create/certified-unity-developer"
                  class="btn-cus btn-cus-purple btn-lg ml-3 px-5"
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
              <div class="col-11 mx-auto col-lg-11 my-4">
                <h4 class="pb-3">Tanfolyami előkövetelmény</h4>
                <p class="mb-3">A tanfolyamsorozat elvégzéséhez szükséges a C# nyelv és az objektum-orientált
                  programozás ismerete.</p>
                <p>Még nem rendelkezel elegendő tudással? Most induló C# tanfolyamsorozatunkban ezt is
                  megtanulhatod!</p>
                <nuxt-link to="/junior-csharp-developer">Bővebben a C# fejlesztői útvonalról...</nuxt-link>
              </div>
              <div class="col-11 mx-auto my-4">
                <h4 class="pb-3">Szerezz NetAcademia Certificate-et!</h4>
                <p class="mb-3">A NetAcademia Certificate-tel egy olyan tanúsítványt hoztunk létre, mely egyaránt
                  leképezi oktatási hozzáállásunkat
                  és módszertanunkat: gyakorlatias és projekt-alapú. A sikeres vizsga bizonyíték arra, hogy képes vagy a
                  Unity
                  segítségével 2D-s és 3D-s játékot fejleszteni, alapvető funkciókkal és felhasználói felülettel, és
                  hogy haladó
                  szinten ismered a Unity lehetőségeit.</p>
                <nuxt-link to="/certificate">Bővebben a Certificate-ről...</nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-12 mx-auto col-lg-5 border p-5 ulticol text-center my-auto">
            <h2>Ultimate kedvezmény</h2>
            <p class="mt-4">Van már Certified Unity Developer előfizetésed? Tanulj tovább, mélyítsd el velünk
              informatikusi ismereteidet! Írj
              nekünk az
              <span class="text-success">iroda@netacademia.net</span> e-mail címre, és a Unity előfizetésed árát most
              beszámítjuk Ultimate előfizetésünkbe!</p>
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
    url("~/assets/unity-developer/background.jpg");
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
