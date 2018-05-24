<template>
  <div id="page-header">
    <div class="ken-burns"
         :style='{
            "background-image": `url(${assetImage}`,
            "background-position": "center"
          }'>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <i :class="[icon]"></i>
          <h1>{{title}}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    assetImage: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
#page-header {
  position: relative;
  overflow: hidden;
  padding: 140px 0 115px;
  margin-bottom: 0px;
  background: #00f0d1 no-repeat center center;
  background: -webkit-linear-gradient(97deg, #00f0d1, #4766c8, #c44fcb);
  background: -ms-linear-gradient(97deg, #00f0d1, #4766c8, #c44fcb);
  background: linear-gradient(97deg, #00f0d1, #4766c8, #c44fcb);
  background-size: cover;
  color: #fff;
  text-align: center;
}

#page-header i {
  display: inline-block;
  margin-bottom: 20px;
  font-size: 64px;
  line-height: 64px;
}

#page-header .decode-icon-cursor {
  font-size: 20px;
  margin-bottom: 0px;
  line-height: 10px;
}

#page-header h1 {
  color: inherit;
  font-size: 36px;
  line-height: 45px;
}

#page-header h5 {
  color: inherit;
}

/*#page-header h1:after {
                      display: block;
                      width: 25px;
                      height: 2px;
                      margin: 20px auto 0;
                      background-color: #fff;
                      content: "";
                  }*/

#page-header .overlay {
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #00f0d1;
  background: -webkit-linear-gradient(90deg, #00f0d1, #c44fcb);
  background: -ms-linear-gradient(90deg, #00f0d1, #c44fcb);
  background: linear-gradient(90deg, #00f0d1, #c44fcb);
  mix-blend-mode: multiply;
}

.ken-burns {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: no-repeat top center;
  background-size: cover;
  animation: kenburns 45s infinite;
}

#page-header .container,
#page-header .container-fluid {
  position: relative;
  z-index: 2;
}

@keyframes kenburns {
  0% {
    -webkit-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
  50% {
    -webkit-transform: scale(1.5) rotate(5deg);
    transform: scale(1.5) rotate(5deg);
  }
  100% {
    -webkit-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
}

@-webkit-keyframes kenburns {
  0% {
    -webkit-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
  50% {
    -webkit-transform: scale(1.5) rotate(5deg);
    transform: scale(1.5) rotate(5deg);
  }
  100% {
    -webkit-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
}
</style>
