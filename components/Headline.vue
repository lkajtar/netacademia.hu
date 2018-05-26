<template>
  <div class="headline text-center mb-0">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Headline"
};
</script>

<style scoped>
  .headline {
    margin-bottom: 50px;
  }

  @media (min-width: 772px) {
    .headline {
      margin-bottom: 100px;
    }
  }

  .headline h1,
  .headline h2,
  .headline h3,
  .headline h4,
  .headline h5 {
    margin-bottom: 0;
  }

  .headline h6 {
    margin-bottom: 7px;
    color: #838383;
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .headline-testimonal {
    margin-bottom: 40px;
  }

  .headline-testimonal h6 {
    margin-bottom: 7px;
    color: #838383;
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
</style>
