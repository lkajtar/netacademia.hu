<template>
  <section>
    <div class="bg-light pt-4 pb-2 icon-table-bg" id="sec-1"></div>
    <div class="container">
      <div class="row text-center justify-content-center bg-light icon-table">
        <div class="col-12 col-lg-3 p-4">
          <img src="~/assets/webfejleszto-vuejs/barhol-barmikor.svg" alt="" class="img-fluid" width="160">
          <p class="mt-2 lead">Bárhol, bármikor</p>
        </div>
        <div class="col-12 col-lg-3 p-4">
          <img src="~/assets/webfejleszto-vuejs/elo-online.svg" class="-fluid" width="160" alt="">
          <p class="mt-2 lead">Élő, online oktatás</p>
        </div>
        <div class="col-12 col-lg-3 p-4 mx-4">
          <img src="~/assets/webfejleszto-vuejs/fizetes.svg" class="img-fluid" width="160" alt="">
          <p class="mt-2 lead">{{price}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      props: {
        price: {
          type: String,
          required: true
        }
      }
    }
</script>

<style scoped>
  .icon-table {
    margin-top: -180px;
    margin-bottom: 100px;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  .icon-table-bg {
    height: 220px;
  }
</style>
