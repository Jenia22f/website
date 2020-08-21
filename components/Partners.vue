<template>
  <div class="partners">
    <div class="partners-container container d-flex justify-content-center">
      <div class="partners-container_partner">
        <img src="~@/assets/imgs/partners/bitgo.png" alt="#">
      </div>
      <div class="partners-container_partner">
        <img src="~@/assets/imgs/partners/geotrust.png" alt="#">
      </div>
      <div class="partners-container_partner">
        <img src="~@/assets/imgs/partners/mcafee.png" alt="#">
      </div>
      <div class="partners-container_partner">
        <img src="~@/assets/imgs/partners/norton.png" alt="#">
      </div>
      <div class="partners-container_partner">
        <img src="~@/assets/imgs/partners/secure-trading.png" alt="#">
      </div>
      <div class="partners-container_partner">
        <img src="~@/assets/imgs/partners/Symantec.png" alt="#">
      </div>
      <div class="partners-container_partner">
        <img src="~@/assets/imgs/partners/versign.png" alt="#">
      </div>
    </div>
  </div>
</template>


<style>
  .partners {
    background: #F3F3F3;
    max-height: 360px;
  }

  .partners-container {
    padding-top: 141px;
    padding-bottom: 156px;
  }

  .partners-container_partner {
    margin: 0 auto;
    vertical-align: middle;
    max-height: 70px;
    line-height: 4;
  }

  @media only screen and (max-width: 991px) {
    .partners-container {
      flex-wrap: wrap;
    }
  }

  @media only screen and (max-width: 460px) {
    .partners-container {
      padding-top: 50px;
      padding-bottom: 80px;
    }

    .partners-container_partner {
      margin-bottom: 30px;
    }
  }

</style>
