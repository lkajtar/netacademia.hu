<template>
  <h1>Baj van baj!</h1>
</template>

<script>
  export default {
    head: {
      script: [
        { innerHTML: 'window.location.href = "https://app.netacademia.hu" + window.location.pathname', type: 'application/ld+json' }
      ],
      __dangerouslyDisableSanitizers: ['script']
    },
    mounted: function () {
      window.location.href = "https://app.netacademia.hu" + window.location.pathname;
    }
  }
</script>

<style>
</style>
