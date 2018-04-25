<template>
  <a :href="href"
      @click="Clicked"
      @mouseDown.middle="Clicked"
      v-observe-visibility="VisibilityChanged">
    <slot></slot>
  </a>
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
    }
  },
  data: function() {
    return {
      visible: false
    };
  },
  methods: {
    Clicked: function() {
      this.GTMEvent("productClick");
    },
    // AddToCartClicked: function() {
    //   this.GTMEvent("addToCart", id);
    // },
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
    GetGTMEvent: function(eventType, product) {
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

        // case "addToCart":
        //   let extendedProduct = JSON.parse(
        //     JSON.stringify(GTMProductCollection[product])
        //   );
        //   extendedProduct.quantity = 1;

        //   return {
        //     event: "addToCart",
        //     ecommerce: {
        //       currencyCode: "HUF",
        //       add: {
        //         products: [extendedProduct]
        //       }
        //     }
        //   };

        default:
          return {};
      }
    }
  }
};
</script>
