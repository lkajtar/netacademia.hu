<template>
  <div id="main-container">
    <Navigation theme="light"></Navigation>
    <nuxt class="mt-5" />
    <Footer></Footer>
  </div>
</template>
<script>
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default {
  name: "decode",
  components: { Navigation, Footer }
};
</script>
<style>
#main-container {
  overflow: hidden;
  background-color: #fff;
  font: 15px/28px "Open Sans", sans-serif;
  color: #838383;
}

.body-overlay:after {
  position: fixed;
  z-index: 8000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  content: "";
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  color: #252525;
  font-weight: 400;
}

h1 {
  margin-bottom: 10px;
  font-size: 48px;
  line-height: 60px;
}

h2 {
  margin-bottom: 10px;
  font-size: 36px;
  line-height: 46px;
}

h3 {
  margin-bottom: 10px;
  font-size: 30px;
  line-height: 40px;
}

h4 {
  margin-bottom: 10px;
  font-size: 24px;
  line-height: 34px;
}

h5 {
  margin-bottom: 10px;
  font-size: 20px;
  line-height: 30px;
}

h6 {
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 28px;
}

h1 a,
h2 a,
h3 a,
h4 a,
h5 a,
h6 a {
  color: #252525;
  text-decoration: none;
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
}

h1 a:hover,
h2 a:hover,
h3 a:hover,
h4 a:hover,
h5 a:hover,
h6 a:hover {
  color: #00f0d1;
  text-decoration: none;
}

h1 small,
h2 small,
h3 small,
h4 small,
h5 small,
h6 small {
  color: inherit;
  font-size: 85%;
}

p {
  margin-bottom: 20px;
  color: #434343;
}

/* LINKS */
a {
  color: #00f0d1;
}

a:hover,
a:focus {
  outline: 0;
  color: #00f0d1;
  text-decoration: none;
}

.see-more {
  display: inline-block;
  color: #252525;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-decoration: none;
  text-transform: uppercase;
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
}

.see-more:after {
  display: block;
  width: auto;
  height: 2px;
  margin-top: -5px;
  background: #00f0d1;
  background: -webkit-linear-gradient(90deg, #00f0d1, #a966ee);
  background: -ms-linear-gradient(90deg, #00f0d1, #a966ee);
  background: linear-gradient(90deg, #00f0d1, #a966ee);
  content: "";
}

.see-more:hover {
  color: #00f0d1;
  text-decoration: none;
}

/* IMAGES */
img {
  max-width: 100%;
  height: auto;
}
</style>
