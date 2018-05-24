<template>
  <div>
    <PageHeader
      asset-image="~/assets/officecsomag/office-bg.svg"
      title="Office/MIA"
      icon="decode-icon-briefcase"
    ></PageHeader>
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader";
import { GtmPageLoad } from "../components/mixins/GtmPageLoad";

export default {
  name: "officecsomag",
  mixins: [GtmPageLoad("Termékoldal")],
  layout: "decode",
  components: { PageHeader }
};
</script>

<style scoped>
</style>
