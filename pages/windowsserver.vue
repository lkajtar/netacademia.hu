<template>
  <main>
    <CertiTopHero class="hero-bg"
                  page-title="Certified Windows Administrator"
                  lead-text="Üzemeltetés"
                  sales-pitch-text="Sajátítsd el a Windows Server üzemeltetésének fortélyait egészen az alapoktól!
                  Tanfolyamsorozatunk végigvezet téged a rendszer telepítésétől indulva: megtanuljuk a PowerShell
                  használatát, különböző csoportházirend létrehozását és a jogosultságok kezelését is. Egy valós példán
                  keresztül bemutatjuk, milyen az, amikor felmerül egy felhasználói igény, amit egy fejlesztő kódsorokba
                  önt, és ezután jövünk mi, rendszergazdák, akik megadják a szükséges jogosultságokat, és segítik a
                  zökkenőmentes integrálást."
    >
      <img slot="lead-icon" src="~/assets/windowsserver/windowsserver.png" alt="windowsserver-icon" class="img-fluid"
           width="60">
      <nuxt-link slot="call-to-action" to="#reszletek" class="btn-cus btn-cus-darkred btn-lg ml-3 px-5">Részletek
      </nuxt-link>
    </CertiTopHero>

    <CertiFeatures price="Most csak 69.900 Ft"></CertiFeatures>

    <TimelineContainer id="reszletek">
      <TimelineCard title="Windows Server alapismeretek, telepítés!"
                    length="3 óra"
                    price="ingyenes"
                    description="Ez az ingyenes tanfolyam a Windows üzemeltető útvonal bevezető képzése. Megnézzük,
                    hogy mitől szerver egy szerver, milyen verziókkal találkozhatunk, ezek közül melyik mire való. A
                    cél, hogy létrejöjjön egy saját magunk által virtuális gépben telepített szerver, amit az útvonal
                    későbbi tanfolyamaihoz fel tudunk használni."
                    logo-bg="#6B293D"
                    card-header-bg="#6B293D"
                    direction="left"
      >
        <img slot="picture" src="~/assets/windowsserver/windowsserver.png" alt="windowsserver-icon">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.install"
                  href="https://app.netacademia.hu/Tanfolyam/2018wu00-windows-server-alapismeretek-telepites"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="Server Core kezelés, PowerShell ismeretek"
                    length="2 óra"
                    price="19.000 Ft+áfa"
                    description="A PowerShell minden üzemeltető életében biztosan előkerül, így kihagyhatatlan részét
                    képezi a Windows üzemeltető útvonalunknak is. A legjobb példa erre egy Server Core, ahol a
                    klasszikus parancssoron, illetve a PowerShellen kívül nem nagyon van más felület a menedzselésre.
                    A kurzuson a fontosabb utasításokat próbáljuk ki a gyakorlatban."
                    logo-bg="#2B4E5D"
                    card-header-bg="#2B4E5D"
                    direction="right"
      >
        <img slot="picture" src="~/assets/windowsserver/windowsserver.png" alt="windowsserver-icon">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.powerShell"
                  href="ttps://app.netacademia.hu/Tanfolyam/2018wu01-server-core-kezeles-powershell-ismeretek"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="Active Directory kezelése"
                    length="14 óra"
                    price="59.000 Ft+áfa"
                    description="Egy valamit mondó rendszer alapja az Active Directory, mint címtárszolgáltatás. A
                    kurzuson az AD telepítésétől az objektumok (User, Group, Computer, stb) tulajdonságain keresztül,
                    egészen a több tartományvezérlős környezetig bezáróan mindent kipróbálunk."
                    logo-bg="#242E38"
                    card-header-bg="#242E38"
                    direction="left"
      >
        <img slot="picture" src="~/assets/windowsserver/windowsserver.png" alt="windowsserver-icon">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.activeDirectory"
                  href="https://app.netacademia.hu/Tanfolyam/2018wu02-windows-server-ad-kezelese"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="Csoportházirendek kezelése!"
                    length="8 óra"
                    price="39.000 Ft+áfa"
                    description="Az Active Directory kiépítése után a központi menedzsment legfőbb eszközei a GPO-k.
                    A kurzuson elmélyülünk ezek létrehozásában, alkalmazási stratégiájában, struktúrájában."
                    logo-bg="#6B293D"
                    card-header-bg="#6B293D"
                    direction="right"
      >
        <img slot="picture" src="~/assets/windowsserver/windowsserver.png" alt="windowsserver-icon">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.centralManagement"
                  href="https://app.netacademia.hu/Tanfolyam/2018wu03-csoporthazirendek-kezelese"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="Jogosultságok kezelése"
                    length="4 óra"
                    price="29.000 Ft+áfa"
                    description="Nincs olyan vállalat, ahol ne lennének hálózati megosztások. És szintén nincs olyan,
                    aki ne jött volna még rá arra, hogy ha az ehhez tartozó jogosultságokat egy jól megtervezett
                    struktúra alapján üzemelteti, akkor szinte sosem lesz gondja a későbbi használatban. A kurzus az
                    alap jogosultságoktól kezdődően a bonyolult struktúrák kialakításáig segíti a résztvevőket ennek
                    megértésében."
                    logo-bg="#242E38"
                    card-header-bg="#242E38"
                    direction="left"
      >
        <img slot="picture" src="~/assets/windowsserver/windowsserver.png" alt="windowsserver-icon">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.permissions"
                  href="https://app.netacademia.hu/Tanfolyam/2018wu04-jogosultsagok-kezelese"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="AD séma bővítése"
                    length="3 óra"
                    price="19.000 Ft+áfa"
                    description=".net Cápák TV-ben megfogalmaztuk az igényeket az AD sémájának bővítésére. Szükségünk
                    lesz egy felhasználóra, aki elmondja az igényeit, egy fejlesztőre, aki a felületet leprogramozza,
                    illetve a rendszergazdára, aki pedig a címtárban a szükséges jogosultságokat megadja. A kurzuson az
                    elkészült alkalmazást mutatjuk be a fejlesztés menetével, buktatókkal, valamint az integráláshoz
                    szükséges lépésekkel."
                    logo-bg="#2B4E5D"
                    card-header-bg="#2B4E5D"
                    direction="right"
      >
        <img slot="picture" src="~/assets/windowsserver/windowsserver.png" alt="windowsserver-icon">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.activeDirectoryExtend"
                  href="https://app.netacademia.hu/Tanfolyam/2018wu05-ad-sema-bovitese"
        >Részletek...
        </gtm-link>
      </TimelineCard>

    </TimelineContainer>
    <div class="row justify-content-center text-center py-5 mx-0 align-self-center">
      <div class="col-12 col-lg-4 p-4 bg-card m-2 align-self-center py-5 px-3 single-special">
        <p class="mb-4">A Certfied Windows Administrator tanfolyamcsomag ára
          <br>bruttó
          <del>89.900 Ft</del>
          helyett, most csak
          <span class="ar">69.900 Ft</span>
        </p>
        <gtm-link isAddToCart :gtm-data="GTMProductCollection.windows"
                  href="https://netacademia.hu/Subscription/Create/certified-windows-administrator"
                  class="btn-cus btn-cus-darkred btn-lg ml-3 px-5"
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
                <h4 class="pb-3">Tanfolyam követelményei</h4>
                <p class="mb-3">
                  A tanfolyamsorozathoz nincs szükség előzetes ismeretre, hiszen teljesen az alapoktól, a Windows Server
                  telepítésétől kalauzolunk
                  végig!
                </p>

              </div>
              <div class="col-11 mx-auto my-4">
                <h4 class="pb-3">Szerezz NetAcademia Certificate-et!</h4>
                <p class="mb-3">A NetAcademia Certificate-tel egy olyan tanúsítványt hoztunk létre, mely egyaránt
                  leképezi oktatási
                  hozzáállásunkat és módszertanunkat: gyakorlatias és projekt-alapú. A sikeres vizsga bizonyíték
                  arra, hogy képes Windows Server alapú rendszerek alapvető üzemeltetésére, karbantartására.</p>
                <nuxt-link to="/certificate">Bővebben a Certificate-ről...</nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-12 mx-auto col-lg-5 border p-5 ulticol text-center my-auto">
            <h2>Ultimate kedvezmény</h2>
            <p class="mt-4">Van már Certfied Windows Administrator előfizetésed? Tanulj tovább, mélyítsd el velünk
              marketing ismereteidet!
              Írj nekünk az
              <span class="text-success">iroda@netacademia.net</span> e-mail címre, és Certified Windows Administrator
              előfizetésed árát most
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
import TimelineContainer from "~/components/TimelineContainer";
import CertiFeatures from "~/components/CertiFeatures";
import CertiTopHero from "~/components/CertiTopHero";
import { GtmPageLoad } from "~/components/mixins/GtmPageLoad";

export default {
  name: "windows-path",
  mixins: [GtmPageLoad("Listaoldal")],
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
        install: {
          name: "Windows Server alapismeretek, telepítés",
          id: "2018wu00-windows-server-alapismeretek-telepites",
          price: "0",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Certified Windows Administrator",
          position: 1,
          PCategories: ["certified-windows-administrator", "ingyenes"]
        },
        powerShell: {
          name: "Server Core kezelés, PowerShell ismeretek",
          id: "2018wu01-server-core-kezeles-powershell-ismeretek",
          price: "24130",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Certified Windows Administrator",
          position: 2,
          PCategories: ["certified-windows-administrator"]
        },
        activeDirectory: {
          name: "Windows Server AD kezelése",
          id: "2018wu02-windows-server-ad-kezelese",
          price: "74930",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Certified Windows Administrator",
          position: 3,
          PCategories: ["certified-windows-administrator"]
        },
        centralManagement: {
          name: "Csoportházirendek kezelése",
          id: "2018wu03-csoporthazirendek-kezelese",
          price: "49530",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Certified Windows Administrator",
          position: 4,
          PCategories: ["certified-windows-administrator"]
        },
        permissions: {
          name: "Jogosultságok kezelése",
          id: "2018wu04-jogosultsagok-kezelese",
          price: "36830",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Certified Windows Administrator",
          position: 5,
          PCategories: ["certified-windows-administrator"]
        },
        activeDirectoryExtend: {
          name: "AD Séma bővítése",
          id: "2018wu05-ad-sema-bovitese",
          price: "24130",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Certified Windows Administrator",
          position: 6,
          PCategories: ["certified-windows-administrator"]
        },
        windows: {
          name: "Certified Windows Administrator oktatási csomag",
          id: "certified-windows-administrator",
          price: "69900",
          brand: "NetAcademia",
          category: "Elofizetes",
          variant: "",
          list: "Certified Windows Administrator",
          position: 7
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
    url("~/assets/windowsserver/background2.jpg");
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
