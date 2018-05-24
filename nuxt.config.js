const scroll = function(to, from, savedPosition) {
  if (to.hash) {
    return new Promise(resolve => {
      setTimeout(() => {
        let position = {};
        if (to.hash && document.querySelector(to.hash)) {
          // scroll to anchor by returning the selector
          position = { selector: to.hash };
        } else {
          position = { x: 0, y: 0 };
        }
        resolve(position);
      }, 500);
    });
  } else {
    return { x: 0, y: 0 };
  }
};

const gtmId = process.env.GTM || "GTM-MWT4847";

module.exports = {
  router: {
    linkActiveClass: "active",
    scrollBehavior: scroll
  },
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
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Montserrat"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Work+Sans:200,300,400,500,600,700&subset=latin-ext"
      }
    ],
    script: [
      { src: "https://code.jquery.com/jquery-3.3.1.slim.min.js" },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  css: ["~/css/main.css", "~/css/decode-icons/css/decode-icons.min.css"],
  plugins: [
    { src: "~/plugins/vue-observe-visibility", ssr: false },
    { src: "~/plugins/vue-youtube-embed", ssr: false },
    { src: "~/plugins/vue-mq", ssr: false }
  ],
  modules: [["@nuxtjs/google-tag-manager", { id: gtmId }], "@nuxtjs/axios"],
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
    backendUrl: process.env.BACKEND_URL || "https://app.netacademia.hu"
  },
  axios: {
    https: true,
    credentials: true,
    baseURL: process.env.BACKEND_URL || "https://app.netacademia.hu",
    browserBaseURL: process.env.BACKEND_URL || "https://app.netacademia.hu"
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      "intersection-observer",
      "vue-observe-visibility",
      "babel-polyfill"
    ],
    analyze: true,
    babel: {
      presets: [
        [
          "vue-app",
          {
            useBuiltIns: true,
            targets: { ie: 9, uglify: true }
          }
        ]
      ]
    },
    extend(config, { isDev, isClient }) {
      const vueLoader = config.module.rules.find(
        rule => rule.loader === "vue-loader"
      );
      vueLoader.options.transformToRequire = {
        ...vueLoader.options.transformToRequire,
        "*": "asset-image"
      };

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
