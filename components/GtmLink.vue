<template>
  <!--<span v-if="!isNuxtLink">-->
    <a :href="href" target="_blank" @click="Clicked" @mouseDown.middle="Clicked" v-observe-visibility="VisibilityChanged">
      <slot></slot>
    </a>
  <!--</span>-->
  <!--<span v-else>-->
    <!--<nuxt-link :href="href" @click="Clicked" @mouseDown.middle="Clicked" v-observe-visibility="VisibilityChanged">-->
      <!--<slot></slot>-->
    <!--</nuxt-link>-->
  <!--</span>-->
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    },
    gtmData: {
      type: Object,
      required: true
    },
    isAddToCart: {
      type: Boolean,
      default: false
    },
    isNuxtLink: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      visible: false
    };
  },
  methods: {
    Clicked: function() {
      if (this.isAddToCart) {
        this.GTMEvent("addToCart");
      } else {
        this.GTMEvent("productClick");
      }
    },
    VisibilityChanged: function(isVisible) {
      // was visible already || not visible now
      if (this.visible || !isVisible) {
        return;
      }

      // set visible
      this.visible = true;

      // GTM push
      this.GTMEvent("productImpression");
    },
    GTMEvent: function(eventType) {
      // temp
      console.log(JSON.stringify(this.GetGTMEvent(eventType)));

      // validate
      if (typeof dataLayer === "object") {
        // GTM push
        dataLayer.push(this.GetGTMEvent(eventType));
      }
    },
    GetGTMEvent: function(eventType) {
      switch (eventType) {
        case "productImpression":
          return {
            event: "productImpression",
            ecommerce: {
              impressions: [this.gtmData]
            }
          };
        case "productClick":
          return {
            event: "productClick",
            ecommerce: {
              click: {
                actionField: {
                  list: "Előfizetés"
                },
                products: [this.gtmData]
              }
            }
          };
        case "addToCart":
          return {
            event: "addToCart",
            ecommerce: {
              currencyCode: "HUF",
              add: {
                products: [this.gtmData]
              }
            }
          };
        default:
          return {};
      }
    }
  }
};
</script>
