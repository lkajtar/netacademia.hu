<template>
  <div>
    <PageHeader
      asset-image="~/assets/officecsomag/office-bg.svg"
      title="Office/MIA"
      icon="decode-icon-briefcase"
    ></PageHeader>
    <FullSection theme="light">
      <Container>
        <Row>
          <Column class="col-lg-6 col-md-8 ml-auto mr-auto">
            <Headline>
              <h6>NetAcademia</h6>
              <h3>Modern Informatikai Alapismeretek <br> Office előfizetés</h3>
            </Headline>
          </Column>
        </Row>
      </Container>
      <Container>
        <Row class="pb-4">
          <Column class="col-lg-8 col-md-10 ml-auto mr-auto">
            <p class="text-center">
              Ma már mindenki informatikus, de ha mégsem az, akkor is az lesz. Az irodai feladatok nagy része
              informatikai tudást igényel, így nagyon lelassulhat a munkavégzés, ha ez a tudás hiányzik. A MIA csomag
              elsődleges feladata az irodai dolgozók informatika
              és más területre is kiterjedő hatékonyságnövelése.
            </p>
          </Column>
        </Row>
      </Container>
      <Container class="pb-5">
        <Row class="pb-5">
          <Column class="col-lg-4 col-md-5">
            <Bounce direction="left">
              <ServiceBox icon="decode-icon-padlock" icon-position="right">
                <h6>Biztonság</h6>
                <p>Tudd magad biztonságban, ismerd a jogaidat: munka- és tűzvédelem!</p>
              </ServiceBox>
            </Bounce>
            <Bounce direction="left">
              <ServiceBox icon="decode-icon-typewriter" icon-position="right">
                <h6>Microsoft Office</h6>
                <p>Légy irodai ninja: profi dokumentumkezelés, Excel és OneNote használat hatékonyan!</p>
              </ServiceBox>
            </Bounce>
            <Bounce direction="left">
              <ServiceBox icon="decode-icon-customer" icon-position="right">
                <h6>Soft Skill</h6>
                <p>Prezentálj asszertívan, gazdálkodj az időddel, fejleszd érzelmi intelligenciádat!</p>
              </ServiceBox>
            </Bounce>
          </Column>

          <Column class="col-lg-4 col-md-5 ml-md-auto">
            <Bounce direction="right">
              <ServiceBox icon="decode-icon-video" icon-position="left">
                <h6>Kép- és videószerkesztés</h6>
                <p>Éld ki a kreativitásodat: fotózás, grafika és videóvágás!</p>
              </ServiceBox>
            </Bounce>
            <Bounce direction="right">
              <ServiceBox icon="decode-icon-viral-marketing" icon-position="left">
                <h6>Online Marketing</h6>
                <p>Hirdess profin: Facebook bolt terület, Google Analytics elemzés és Email marketing!</p>
              </ServiceBox>
            </Bounce>
            <Bounce direction="right">
              <ServiceBox icon="decode-icon-coins" icon-position="left">
                <h6>E-kereskedelem</h6>
                <p>Hozd létre, és nyisd meg saját webshopod: Wordpress, Shopify és Drop shipping!</p>
              </ServiceBox>
            </Bounce>
          </Column>
        </Row>
      </Container>
    </FullSection>
    <FullSection theme="dark">
      <Container>
        <Row>
          <Column class="col-md-12">
            <Headline>
              <h6>Office/MIA csomag</h6>
              <h3>1 évre szóló előfizetés 49.900 Ft</h3>
            </Headline>
          </Column>
        </Row>
      </Container>
      <Container class="mt-5">
        <Row>
          <Column class="col-md-12 text-center">
            <p>
              <Button theme="default-outline" class="text-light"
                      href="https://app.netacademia.hu/Subscription/Create/office">
                Megveszem<i class="decode-icon-cursor"></i>
              </Button>
            </p>
          </Column>
        </Row>
      </Container>
    </FullSection>
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader";
import { GtmPageLoad } from "../components/mixins/GtmPageLoad";
import FullSection from "../components/FullSection";
import Headline from "../components/Headline";
import Container from "../components/Container";
import Row from "../components/Row";
import Bounce from "../components/Bounce";
import ServiceBox from "../components/ServiceBox";
import Column from "../components/Column";
import Button from "../components/Button";

export default {
  name: "officecsomag",
  mixins: [GtmPageLoad("Termékoldal")],
  layout: "decode",
  components: {
    Button,
    Column,
    ServiceBox,
    Bounce,
    Row,
    Container,
    Headline,
    FullSection,
    PageHeader
  }
};
</script>

<style scoped>
</style>
