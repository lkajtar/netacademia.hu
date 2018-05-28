<template>
  <div class="service-box style-3" :class="iconPositionClass">
    <i :class="[icon]"></i>
    <div class="service-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "DServiceBox",
  props: {
    icon: {
      type: String,
      required: true
    },
    iconPosition: {
      type: String,
      required: true
    }
  },
  computed: {
    iconPositionClass() {
      return this.iconPosition === 'left' ? 'icon-left' : 'icon-right';
    }
  },
};
</script>

<style scoped>
.service-box {
  margin-bottom: 50px;
}

.service-box-content {
}

.service-box-content > a {
  display: inline-block;
  color: #434343;
  /*font-size: 12px;*/
  font-weight: 700;
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
}

.service-box-content > a:hover {
  color: #fff;
  text-decoration: ;
}

.service-box-content > *:last-child {
  margin-bottom: 0;
}

.service-box.style-3 {
}

.service-box.style-3.icon-right {
  text-align: right;
}

.service-box.style-3 > i {
  display: block;
  margin-top: 5px;
  color: #c2c2c2;
  font-size: 56px;
  line-height: 56px;
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
}

.service-box.style-3.icon-left > i {
  float: left;
}

.service-box.style-3.icon-right > i {
  float: right;
}

.service-box.style-3.icon-left .service-box-content {
  margin-left: 85px;
}

.service-box.style-3.icon-right .service-box-content {
  margin-right: 85px;
}

.service-box.style-3 .service-box-content h6 {
  margin-bottom: 20px;
  font-weight: 600;
}

.service-box.style-3.icon-left .service-box-content h6,
.service-box.style-3.icon-right .service-box-content h6 {
  margin-bottom: 10px;
}

.service-box.style-3:hover > i {
  color: #00f0d1;
  background: -webkit-linear-gradient(51deg, #00f0d1, #a966ee);
  background: -ms-linear-gradient(51deg, #00f0d1, #a966ee);
  background: linear-gradient(51deg, #00f0d1, #a966ee);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
