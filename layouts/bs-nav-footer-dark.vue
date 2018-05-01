<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="/">
        <img width="40px" src="/logo.png" alt="NetAcademia Oktatóközpont Kft." />
      </a>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav mx-auto">
          <a class="nav-item nav-link active" href="/elofizetes">Előfizetés</a>
          <a class="nav-item nav-link" href="/indulotanfolyamok">Induló tanfolyamok</a>
          <a class="nav-item nav-link" href="/tanfolyamkeresov2">Tanfolyamkereső</a>
          <a class="nav-item nav-link" href="/ultimateakcio">Akció</a>
          <a class="nav-item nav-link" href="/certificate">NetAcademia vizsga</a>
        </div>
      </div>
    </nav>
    <nuxt/>
    <!-- <footer style="height:200px;"></footer> -->
  </div>
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
