export function GtmPageLoad(pageType) {
  return {
    mounted: function () {
      console.log("pagetype:", pageType);
      if (typeof dataLayer === "object") {
        dataLayer.push( {"UnsignedUser": "True", "SignedUser": "False", "pageCategory": pageType });
        // dataLayer.push({"pageCategory": pageType});
      }
    }
  };
}
