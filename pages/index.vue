<template>
  <main class="fullscreen-bg">

    <video loop muted autoplay
           poster="/background.jpg"
           class="fullscreen-bg__video">
      <source
        src="https://player.vimeo.com/external/264778690.hd.mp4?s=8b80ecb93aeb209e06951980b8d335424dc83c37&profile_id=174">
    </video>


    <img class="logocska" src="/logo.png"
         alt="NetAcademia Oktatóközpont Kft.">
    <div id="headerbox">
      <ol>
                        <li>
                            <a href="http://app.netacademia.hu/tanfolyamkeresov2">Tanfolyamkereső</a>
                        </li>
                        <li>
                            <a href="http://app.netacademia.hu/indulotanfolyamok">Induló tanfolyamok</a>
                        </li>
                        <li>
                            <a href="http://app.netacademia.hu/certificate" class="hideonmobile">NetAcademia Certificate</a>
                        </li>
                         <li>
                            <a href="http://app.netacademia.hu/lenyugozo-tanfolyamok" class="hideonmobile">
                                Lenyűgöző tanfolyamok</a>
                        </li>
                        <li>
                            <a href="http://app.netacademia.hu/Adataim">Adataim</a>
                        </li>
      </ol>
    </div>


    <div class="vfkozepre">
      <div class="cim">Teremtsd meg a jövőd!</div>
      <div class="gombdoboz">
                        <nuxt-link to="/elofizetes#kepzes">
                            <div class="gomb">Képzéseink</div>
                        </nuxt-link>
                        <nuxt-link to="/elofizetes#elofizetes">
                            <div class="gomb">Előfizetés</div>
                        </nuxt-link>

                        <a href="http://app.netacademia.hu/webfejleszto-vuejs">
                            <div class="akciogomb">Webfejlesztői akció</div>
                        </a>
      </div>
      <br/>
      <div class="hirlev">
        <a href="https://app.netacademia.hu/www.netacademia.hu_NewsLetter">
          Hírlevél-feliratkozás
        </a>
      </div>
    </div>


    <div class="lablec vkozepre">
      © NetAcademia 1998-{{ currentYear }}
      <span>
        <a href="http://app.netacademia.hu/GeneralTermsAndConditions/Subscription">ÁSZF</a>
      </span>
      <span>
        <a href="http://app.netacademia.hu/GeneralTermsAndConditions/PrivacyStatement">Adatvédelem</a>
      </span>
                    <span>
                        <a href="http://app.netacademia.hu/kapcsolat" class="hideonmobile">Kapcsolat</a>
                    </span>
                    <span>
                        <a href="http://app.netacademia.hu/oktato" class="hideonmobile">Jelentkezz oktatónak!</a>
                    </span>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    currentYear: function() {
      return new Date().getFullYear();
    }
  },
  head: {
    htmlAttrs: {
      class: "fullscreen"
    },
    bodyAttrs: {
      class: "fullscreen-bg"
    },
    script: [
      {
        innerHTML:
          'dataLayer = [{ "UnsignedUser": "True", "SignedUser": "False", "pageCategory": "Főoldal" }];',
        type: "application/ld+json"
      }
    ],
    __dangerouslyDisableSanitizers: ["script"]
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Work+Sans:200,300,400,500,600,700&subset=latin-ext");

.fullscreen {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: "Work sans", Arial;
  color: white;
}

.fullscreen-bg {
  z-index: -100;
  background: url("/background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.fullscreen-bg__video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  pointer-events: none;
}

ol {
  list-style-type: none;
  padding: 0;
}

ol li {
  display: inline;
}

.logocska {
  position: absolute;
  margin-top: 20px;
  margin-left: 20px;
  width: 50px;
  height: 50px;
}

a {
  color: white;
  text-decoration: none;
}

.gombdoboz a {
  margin: 10px;
  display: inline-block;
}

.cim {
  font-size: 50px;
  font-weight: 300;
}

.vkozepre {
  position: absolute;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, 0);
}

.vfkozepre {
  position: absolute;
  top: 50%;
  margin-bottom: -50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

#headerbox {
  text-align: center;
  position: absolute;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, 0);
  font-family: Arial;
  font-size: 14px;
  margin-top: 1px;
}

#headerbox a {
  margin: 0px 10px;
  text-decoration: none;
}

#headerbox a:hover {
  color: rgb(203, 203, 203);
  transition-duration: 0.5s;
}

.lablec {
  font-family: Arial;
  position: absolute;
  bottom: 0;
  font-size: 14px;
  margin-bottom: 5px;
  text-align: center;
}

.lablec a {
  margin: 0px 10px;
  text-decoration: none;
}

.lablec a:hover {
  color: rgb(203, 203, 203);
  transition-duration: 0.5s;
}

.gombdoboz {
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  display: table;
}

.gomb {
  padding: 12px;
  width: 165px;
  background: rgba(0, 0, 0, 0.5);
  font-family: Arial;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  display: table-cell;
  vertical-align: middle;
  height: 18px;
  border: 1px solid transparent;
}

.gomb:hover {
  border: 1px solid white;
  transition-duration: 0.5s;
}

.akciogomb {
  padding: 12px;
  width: 165px;
  background: rgba(255, 0, 0, 0.6);
  font-family: Arial;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  display: table-cell;
  vertical-align: middle;
  height: 18px;
  border: 1px solid transparent;
}

.akciogomb:hover {
  border: 1px solid white;
  transition-duration: 0.5s;
}

.hirlev {
  margin-top: 30px;
  text-decoration: none;
  font-family: Arial;
  display: inline-block;
}

.hirlev a:hover {
  color: rgb(203, 203, 203);
  transition-duration: 0.5s;
}

#conference {
  margin-top: 30px;
  text-decoration: none;
  font-family: Arial;
  display: inline-block;
}

#conference a:hover {
  color: rgb(203, 203, 203);
  transition-duration: 0.5s;
}

#year {
  margin: 0 10px 0 0;
}

@media (max-width: 767px) {
  .fullscreen-bg__video {
    display: none;
  }

  .logocska {
    display: none;
  }

  .hideonmobile {
    display: none;
  }

  #headerbox {
    font-size: 12px;
    width: 100%;
  }

  ol {
    padding: 0px;
  }

  #headerbox a {
    text-align: center;
  }

  .cim {
    font-size: 35px;
  }

  .lablec {
    margin-left: 5px;
  }

  #conference {
    margin-top: 12px;
  }

  .gombdoboz {
    margin-top: 8px;
  }
}

@media (max-width: 340px) {
  .lablec {
    font-size: 12px;
  }
}

@media (max-height: 450px) {
  #headerbox {
    display: none;
  }

  .lablec {
    display: none;
  }

  .hirlev {
    margin-top: 20px;
  }
}
</style>
