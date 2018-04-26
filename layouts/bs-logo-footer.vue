<template>
  <nuxt/>
</template>

<script>
export default {
  head: {
    script: [
      { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js'
      },
      {
        src:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css'
      }
    ]
  }
};
</script>

<style>

</style>
