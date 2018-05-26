<template>
  <section class="full-section" id="section-31">
    <slot name="parallax"></slot>
    <div class="full-section-container">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "FullSection"
};
</script>

<style scoped>
.full-section {
  position: relative;
  z-index: 1;
  padding: 50px 0;
  margin-bottom: 0px;
  background: no-repeat center center;
}

.full-section .full-section-overlay {
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.full-section-blending {
  position: absolute;
  z-index: 2;
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

.full-section-container {
  position: relative;
  z-index: 4;
}

#section-31 {
  overflow: hidden;
  padding: 100px 0 120px;
  margin-bottom: 0;
  background: #fff;
  color: #d0d0d0;
}

@media (min-width: 768px) and (max-width: 991px) {
  #section-31 {
    padding-bottom: 50px;
  }
}

@media (max-width: 767px) {
  #section-31 {
    padding-bottom: 50px;
  }
}
</style>
