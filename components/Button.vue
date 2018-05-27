<template>
  <AOrNuxtLink :class="[themeClass, sizeClass]" :href="href">
    <slot></slot>
  </AOrNuxtLink>
</template>

<script>
import AOrNuxtLink from "./AOrNuxtLink";

export default {
  name: "Button",
  components: { AOrNuxtLink },
  props: {
    href: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      default: "default",
      validator(val) {
        return (
          [
            "default",
            "default-outline",
            "primary",
            "primary-outline",
            "secondary",
            "secondary-outline",
            "black",
            "black-outline",
            "white",
            "white-outline"
          ].indexOf(val) !== -1
        );
      }
    },
    size: {
      type: String,
      default: "",
      validator(val) {
        return ["", "xs", "lg"].indexOf(val) !== -1;
      }
    }
  },
  computed: {
    sizeClass() {
      switch (this.size) {
        case "xs":
          return "btn-xs";
        case "lg":
          return "btn-lg";
        default:
          return "";
      }
    },
    themeClass() {
      switch (this.theme) {
        case "default-outline":
          return "btn btn-default btn-outline waves waves-dark";
        case "primary":
          return "btn btn-primary waves";
        case "primary-outline":
          return "btn btn-primary btn-outline waves waves-dark";
        case "secondary":
          return "btn btn-secondary waves";
        case "secondary-outline":
          return "btn btn-secondary btn-outline waves waves-dark";
        case "black":
          return "btn btn-black waves";
        case "black-outline":
          return "btn btn-black btn-outline waves waves-dark";
        case "white":
          return "btn btn-white waves";
        case "white-outline":
          return "btn btn-white btn-outline waves waves-dark";
        default:
          return "btn btn-default waves";
      }
    }
  }
};
</script>

<style lang="scss">
.btn {
  position: relative;
  z-index: 1;
  padding: 15px 25px;
  margin-right: 20px;
  margin-bottom: 20px;
  border: none;
  border-radius: 0;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  cursor: pointer;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;

  &:last-child {
    margin-right: 0;
  }

  i {
    position: relative;
    top: 1px;
    margin-left: 5px;
  }

  &:focus,
  &:active {
    outline: 0 !important;
    box-shadow: none;
  }

  &:hover {
    box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.16),
      0 3px 12px 0 rgba(0, 0, 0, 0.12);
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
  }
}

.btn-lg {
  padding: 17px 35px;
  font-size: 14px;
}

.btn-xs {
  padding: 12px 20px;
  font-size: 10px;
}

/* DEFAULT */
.btn-default,
.btn-default:hover,
.btn-default:focus,
.btn-default:active:focus {
  background: #00f0d1;
  background: -webkit-linear-gradient(51deg, #00f0d1, #a966ee);
  background: -ms-linear-gradient(51deg, #00f0d1, #a966ee);
  background: linear-gradient(51deg, #00f0d1, #a966ee);
  color: #fff;

  &.btn-outline:after {
    border-left: 2px solid #00f0d1;
    border-right: 2px solid #a966ee;
    background-image: linear-gradient(90deg, #00f0d1, #a966ee),
      linear-gradient(90deg, #00f0d1, #a966ee);
  }
}

/* PRIMARY */
.btn-primary,
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active:focus {
  background: #00f0d1;
  color: #fff;

  &.btn-outline:after {
    border: 2px solid #00f0d1;
    background: transparent;
    color: #252525;
  }
}

/* SECONDARY */
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus,
.btn-secondary:active:focus {
  background: #a966ee;
  color: #fff;

  &.btn-outline:after {
    border: 2px solid #a966ee;
    background: transparent;
    color: #252525;
  }
}

/* BLACK */
.btn-black,
.btn-black:hover,
.btn-black:focus,
.btn-black:active:focus {
  background: #252525;
  color: #fff;

  &.btn-outline:after {
    border: 2px solid #252525;
    background: transparent;
    color: #252525;
  }
}

/* WHITE */
.btn-white,
.btn-white:hover,
.btn-white:focus,
.btn-white:active:focus {
  background: #f2f2f2;
  color: #252525;

  &.btn-outline:after {
    border: 2px solid #fff;
    background: transparent;
    color: #252525;
  }
}

/* OUTLINE */
.btn-outline,
.btn-outline:hover,
.btn-outline:focus,
.btn-outline:active:focus {
  background: transparent;
  color: #fff;

  &:after {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: 100% 2px;
    background-position: 0 0, 0 100%;
    background-repeat: no-repeat;
    content: "";
  }

  .full-section.dark {
    .btn,
    .btn:hover {
      color: #fff;
    }

    .btn-white,
    .btn-white:hover {
      color: #252525;
    }

    .btn-outline,
    .btn-outline:hover,
    .btn-outline:focus,
    .btn-outline:active:focus {
      color: inherit;
    }

    .btn-white.btn-outline {
      color: inherit;
    }

    .btn-white.btn-outline:after {
      border-color: #fff;
    }
  }
}
</style>
