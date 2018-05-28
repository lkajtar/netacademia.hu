<template>
  <section class="full-section" :class="theme">
    <slot name="parallax"></slot>
    <div class="full-section-container">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "DFullSection",
  props: {
    theme: {
      type: String,
      default: "light",
      validator(val) {
        return ["light", "dark"].indexOf(val) !== -1;
      }
    }
  }
};
</script>

<style lang="scss">

.full-section {
  position: relative;
  z-index: 1;
  padding: 50px 0;
  margin-bottom: 0px;
  background: no-repeat center center;

  .full-section-overlay {
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

  &.light {
    overflow: hidden;
    padding: 100px 0 100px;
    margin-bottom: 0;
    background: #fff;
    color: #d0d0d0;
  }

  &.dark {
    padding: 60px 0 30px;
    background-color: #232c3d;
    color: #fff;

    a,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: #fff;
    }

    a:hover {
      color: #00f0d1;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    &.light {
      padding-bottom: 50px;
    }
  }

  @media (max-width: 767px) {
    &.light {
      padding-bottom: 50px;
    }
  }
}
</style>
