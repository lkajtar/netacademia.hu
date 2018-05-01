<template>
  <div :class="[{ animatable: !visible }, { animated: visible }, direction]" v-observe-visibility="VisibilityChanged">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: 'bounceIn'
    }
  },
  data: function() {
    return {
      visible: false
    };
  },
  methods: {
    VisibilityChanged: function(isVisible) {
      // was visible already || not visible now
      if (this.visible || !isVisible) {
        return;
      }

      // set visible
      this.visible = true;
    }
  }
};
</script>

<style>
@media (min-width: 800px) {
  .animatable {
    /* initially hide animatable objects */
    visibility: hidden;

    /* initially pause animatable objects their animations */
    -webkit-animation-play-state: paused;
    -moz-animation-play-state: paused;
    -ms-animation-play-state: paused;
    -o-animation-play-state: paused;
    animation-play-state: paused;
  }

  /* show objects being animated */
  .animated {
    visibility: visible;

    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    -ms-animation-fill-mode: both;
    -o-animation-fill-mode: both;
    animation-fill-mode: both;

    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
    -ms-animation-duration: 1s;
    -o-animation-duration: 1s;
    animation-duration: 1s;

    -webkit-animation-play-state: running;
    -moz-animation-play-state: running;
    -ms-animation-play-state: running;
    -o-animation-play-state: running;
    animation-play-state: running;
  }

  /* CSS Animations (extracted from http://glifo.uiparade.com/) */
  @-webkit-keyframes bounceInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
    }
    60% {
      -webkit-transform: translateX(20px);
    }

    80% {
      -webkit-transform: translateX(-5px);
    }

    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
    }
  }

  @-moz-keyframes bounceInLeft {
    0% {
      opacity: 0;
      -moz-transform: translateX(-2000px);
    }

    60% {
      -moz-transform: translateX(20px);
    }

    80% {
      -moz-transform: translateX(-5px);
    }

    100% {
      opacity: 1;
      -moz-transform: translateX(0);
    }
  }

  @-o-keyframes bounceInLeft {
    0% {
      opacity: 0;
      -o-transform: translateX(-2000px);
    }

    60% {
      opacity: 1;
      -o-transform: translateX(20px);
    }

    80% {
      -o-transform: translateX(-5px);
    }

    100% {
      opacity: 1;
      -o-transform: translateX(0);
    }
  }

  @keyframes bounceInLeft {
    0% {
      opacity: 0;
      transform: translateX(-2000px);
    }

    60% {
      transform: translateX(20px);
    }

    80% {
      transform: translateX(-5px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @-webkit-keyframes bounceInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
    }

    60% {
      -webkit-transform: translateX(-20px);
    }

    80% {
      -webkit-transform: translateX(5px);
    }

    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
    }
  }

  @-moz-keyframes bounceInRight {
    0% {
      opacity: 0;
      -moz-transform: translateX(2000px);
    }

    60% {
      -moz-transform: translateX(-20px);
    }

    80% {
      -moz-transform: translateX(5px);
    }

    100% {
      opacity: 1;
      -moz-transform: translateX(0);
    }
  }

  @-o-keyframes bounceInRight {
    0% {
      opacity: 0;
      -o-transform: translateX(2000px);
    }

    60% {
      -o-transform: translateX(-20px);
    }

    80% {
      -o-transform: translateX(5px);
    }

    100% {
      opacity: 1;
      -o-transform: translateX(0);
    }
  }

  @keyframes bounceInRight {
    0% {
      opacity: 0;
      transform: translateX(2000px);
    }

    60% {
      transform: translateX(-20px);
    }

    80% {
      transform: translateX(5px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .animated.bounceInRight {
    -webkit-animation-name: bounceInRight;
    -moz-animation-name: bounceInRight;
    -o-animation-name: bounceInRight;
    animation-name: bounceInRight;
  }

  .animated.bounceInLeft {
    -webkit-animation-name: bounceInLeft;
    -moz-animation-name: bounceInLeft;
    -o-animation-name: bounceInLeft;
    animation-name: bounceInLeft;
  }

  .animated.bounceIn {
    -webkit-animation-name: bounceIn;
    -moz-animation-name: bounceIn;
    -o-animation-name: bounceIn;
    animation-name: bounceIn;
  }

  @-moz-keyframes bounceIn {
    0% {
      opacity: 0;
      -moz-transform: scale(0.3);
    }

    50% {
      -moz-transform: scale(1.05);
    }

    70% {
      -moz-transform: scale(0.9);
    }

    100% {
      opacity: 1;
      -moz-transform: scale(1);
    }
  }

  @-o-keyframes bounceIn {
    0% {
      opacity: 0;
      -o-transform: scale(0.3);
    }

    50% {
      -o-transform: scale(1.05);
    }

    70% {
      -o-transform: scale(0.9);
    }

    100% {
      opacity: 1;
      -o-transform: scale(1);
    }
  }

  @keyframes bounceIn {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }

    50% {
      transform: scale(1.05);
    }

    70% {
      transform: scale(0.9);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
}
</style>
