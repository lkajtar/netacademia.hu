<template>
  <div class="text-center mt-5 d-none d-sm-block">
    <p class="text-center lead description">{{text}}</p>
    <nuxt-link :to="href">
      <img src="~/assets/down-arrow.png" alt="down-arrow" class="img-fluid bounce arrow" width="40">
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default:''
    },
    href: {
      type: String,
      default: '#'
    }
  }
};
</script>

<style scoped>
.arrow {
  margin-top: 10px;
}

.description {
  margin-top: 120px;
}

.bounce {
  -moz-animation: bounce 1s infinite;
  -webkit-animation: bounce 1s infinite;
  animation: bounce 1s infinite;
}

@-webkit-keyframes bounce {
  0%,
  100% {
    -webkit-transform: translateY(-7%);
    transform: translateY(-7%);
  }
  50% {
    -webkit-transform: translateY(7%);
    transform: translateY(7%);
  }
}
</style>
