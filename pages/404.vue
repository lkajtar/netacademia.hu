<template>
  <h1 class="red">Baj van baj!</h1>
</template>

<script>
  export default {
    mounted: function () {
      window.location.href = "http://" + "app.netacademia.hu" + window.location.pathname
    }
  }
</script>

<style>
  .red {
    color: red;
  }
</style>
