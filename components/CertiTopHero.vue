<template>
  <header id="home" class="top-hero jumbotron-fluid pb-5 bg-faded">
    <div class="container">
      <h1 class="display-3 mb-3">{{pageTitle}}
        <span>
            <br>
            <slot name="lead-icon"></slot>
            {{leadText}}
        </span>
      </h1>
      <p class="lead mb-5">{{salesPitchTitle}}</p>
      <p class="lead mt-1 mb-5">{{salesPitchText}}</p>
      <div class="row">
        <slot name="call-to-action"></slot>
      </div>
      <BouncingDownArrow href="#sec-1"></BouncingDownArrow>
    </div>
  </header>
</template>

<script>
import BouncingDownArrow from "../components/BouncingDownArrow";

export default {
  props: {
    pageTitle: {
      type: String,
      required: true
    },
    leadText: {
      type: String,
      required: true
    },
    salesPitchTitle: {
      type: String
    },
    salesPitchText: {
      type: String,
      required: true
    }
  },
  components: { BouncingDownArrow }
};
</script>

<style scoped>
.top-hero {
  min-height: 100vh;
  padding-top: 20px;
  display: flex;
  align-items: center;
}

.top-hero h1 {
  color: #ffffff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  text-transform: uppercase;
  width: 85%;
  letter-spacing: -1px;
  line-height: 0.9;
  margin-top: 110px;
}

.top-hero h1 span {
  font-size: 50%;
}

h4 {
  text-transform: uppercase;
  letter-spacing: -1px;
}

h4 span {
  font-size: 60%;
}

.top-hero p {
  color: #edf2f4;
}

@media only screen and (max-width: 768px) {
  .top-hero {
    min-height: 950px;
    padding-top: 30px;
  }

  .top-hero h1 {
    font-size: 36px;
    margin-top: 10px;
  }

  .top-hero p {
    font-size: 18px;
  }
}
</style>
