const ghPagesConf =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/netacademia.hu/"
        },
        generate: {
          dir: "dist-ghpages"
        }
      }
    : {};

module.exports = {
  /*
  ** Custom router base to serve from project repo on github pages from the gh-pages branch
  ** Custom generation dir
  */
  ...ghPagesConf,
  /*
  ** Headers of the page
  */
  head: {
    title: "NetAcademia",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Teremtsd meg a jövőd!"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  plugins: [{ src: "~/plugins/vue-observe-visibility", ssr: false }],
  modules: [["@nuxtjs/google-tag-manager", { id: "GTM-T3WLP7" }]],
  /*
  ** Build configuration
  */
  build: {
    vendor: ["intersection-observer", "vue-observe-visibility"],
    analyze: true,
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
