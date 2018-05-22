<template>
  <div class="col-10 col-sm-8 col-md-6 mb-5">
    <div class="row justify-content-center">
      <div class="col-12 text-center mx-auto mb-4">
        <slot></slot>
      </div>
      <div class="col-12 text-center">
        <h4 class="my-4">{{ title }}
          <br>
          <small>{{ subtitle }}</small>
        </h4>
      </div>
      <div class="col-9">
        <p class="text-center lead text-danger font-weight-bold">{{ who }}</p>
      </div>
      <div class="col-11 col-lg-6">
        <p class="text-size text-center mb-4 mb-md-0">{{ description }}</p>
      </div>
      <div class="col-12 mb-2 text-center">
        <p>
          <img src="~/assets/elofizetes/time.png" alt="idotartam" width="40" class="mr-2">{{ length }}</p>
      </div>
      <div class="col-12 text-center">
        <gtm-link :gtm-data="gtmData" class="btn btn-primary" :href="link" role="button">
          Megnézem
        </gtm-link>
      </div>
    </div>
  </div>
</template>

<script>
import GtmLink from "~/components/GtmLink.vue";

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false
    },
    who: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    length: {
      type: String,
      required: true
    },
    gtmData: {
      type: Object,
      required: true
    }
  },
  components: {
    GtmLink
  }
};
</script>

<style scoped>
@media (min-width: 768px) {
  .text-size {
    height: 160px;
    /*width: 250px;*/
  }
}

@media (min-width: 1200px) {
  .text-size {
    height: 200px;
    /*width: 250px;*/
  }
}
</style>
