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

const ghPagesConf =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/netacademia.hu/",
          linkActiveClass: "active",
          scrollBehavior: scroll
        },
        generate: {
          dir: "dist-ghpages"
        }
      }
    : {
        router: {
          linkActiveClass: "active",
          scrollBehavior: scroll
        }
      };

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
        href: "https://fonts.googleapis.com/css?family=Work+Sans:200,300,400,500,600,700&subset=latin-ext"
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
  css: ["~/css/main.css"],
  plugins: [
    { src: "~/plugins/vue-observe-visibility", ssr: false },
    { src: "~/plugins/vue-youtube-embed", ssr: false },
    { src: "~/plugins/vue-mq", ssr: false }
  ],
  modules: [
    ["@nuxtjs/google-tag-manager", { id: "GTM-T3WLP7" }],
    '@nuxtjs/axios'
  ],
  axios: {

  },
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
