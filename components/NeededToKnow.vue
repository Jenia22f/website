<template>
  <div class="neededToKnow d-flex">
    <div class="neededToKnow_with-girl w-50 d-flex justify-content-end">
      <div class="neededToKnow_with-girl_whatToKnow d-flex ">
        <img src="~@/assets/imgs/thinking-woman-png-transparent-HD-Photo1.png" alt="">
        <div class="neededToKnow_with-girl_whatToKnow_div">
        <h3>ЧТО ВАМ НУЖНО ЗНАТЬ</h3>
        <div @click='scrollToTop()' class="neededToKnow_with-girl_whatToKnow-consult-btn d-flex">
          <p>КОНСУЛЬТАЦИЯ</p><span class="material-icons keyboard">keyboard_backspace</span>
        </div>
          <p class="free-cons">*консультация бесплатна</p>
        </div>
      </div>
    </div>
    <div class="neededToKnow_opportunities w-50">
      <div class="neededToKnow_opportunities-for-each">
        <div class="underline"></div>
        <h3>ВОЗМОЖНОСТЬ ДЛЯ КАЖДОГО</h3>
        <p>Абсолютно каждый, кто рассматривал возможность получения пассивного дохода без больших рисков,
          может уже сегодня начать с малого.</p>
      </div>
      <div class="neededToKnow_opportunities-for-each">
        <div class="underline"></div>
        <h3>ЛЕГКИЙ СТАРТ БЕЗ ГОЛОВОЛОМОК</h3>
        <p>Мы знаем ответы на ваши вопросы! Наши клиенты, это в основном новые игроки,
          для которых сегодня мы делаем результат!</p>
      </div>
      <div class="neededToKnow_opportunities-for-each">
        <div class="underline"></div>
        <h3>РЕШИТЕЛЬНОСТЬ ОБЕСПЕЧИТ УСПЕХ</h3>
        <p>Наш залог доверия, это результат. Благодаря решительности наших клиентов,
          мы открываем перед ними новые горизонты</p>
      </div>
      <div class="neededToKnow_opportunities-for-each">
        <div class="underline"></div>
        <h3>ОГРАНИЧЕНИЕ И ПОДХОД</h3>
        <p>К сожалению у нас ограниченное кол-во мест, но каждый клиент который работает с нами,
          получает лучших экспертов своего дела!</p>
      </div>
    </div>
  </div>
</template>


<style>

  .neededToKnow {
    height: 503px;
  }

  .neededToKnow_with-girl {
    height: 100%;
    background: #F5F5F5;
  }

  .neededToKnow_with-girl_whatToKnow img {
    z-index: 100;
    position: relative;
    width: 360px;
    height: 568px;
    /*left: 228px;*/
    /*top: 1782px;*/
    bottom: 65px;
    right: 80px;
  }

  .neededToKnow_with-girl_whatToKnow {
    background: linear-gradient(92.65deg, #03001B 10.8%, #40044D 97.8%);
    width: 557px;
    justify-content: center;
  }

  .neededToKnow_with-girl_whatToKnow h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 50px;
    line-height: 69px;
    color: #DEDEDE;
    text-shadow: 4px 4px 20px rgba(0, 0, 0, 0.54);
    width: 235px;
    margin: 86px 128px 0 0;
    font-style: normal;
  }

  .neededToKnow_with-girl_whatToKnow-consult-btn {
    width: 220px;
    height: 57px;
    background: #ECE204;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    margin: 42px 0 0 0;
    cursor: pointer;
  }

  .neededToKnow_with-girl_whatToKnow-consult-btn:hover {
    background-color: #ecbe04;
    overflow: hidden;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.95);
  }

  .neededToKnow_with-girl_whatToKnow-consult-btn:hover  .keyboard {
    animation-name: arrow;
    animation-duration: .6s;
    position: relative;
  left: 50px;
  }

  @keyframes arrow {
    0% {left: 0}
    100% {left: 50px;}
  }

  .neededToKnow_with-girl_whatToKnow-consult-btn p {
    font-family: 'Roboto', sans-serif;
    color: #000000;
    font-weight: normal;
    font-size: 14px;
    padding: 20px 25px 18px 23px;
    letter-spacing: 0.13em;
  }

  .keyboard {
    font-size: 20px!important;
    margin: 0 0 18px 0;
    transform: rotate(180deg);
    color: #000000;
  }

  .neededToKnow_opportunities {
    display: grid;
    grid-template-columns: 298px 322px;
    margin-left: 113px;
    margin-top: 40px;
    grid-row-gap: 30px;
  }

  .neededToKnow_opportunities-for-each {
    max-height: 148px;
    line-height: 18px;
  }

  .neededToKnow_opportunities-for-each:nth-child(even) {
    margin-left: 42px;
  }

  .neededToKnow_opportunities-for-each h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 22px;
    color: #333333;
    margin-bottom: 30px;
    width: 256px;
    position: relative;
  }

  .underline {
    height: 12px;
    width: 103px;
    background: #ECE204;
    position: relative;
    top: 50px;
    left: 18px;
  }

  .neededToKnow_opportunities-for-each p {
    font-family: Roboto;
    font-weight: normal;
    font-size: 16px;
    color: #454545;
    line-height: 25px;
  }

  @media only screen and (max-width: 1260px) {
    .neededToKnow_opportunities {
      margin-left: 50px;
    }
  }

    @media only screen and (max-width: 1199px) {

    .neededToKnow_with-girl {
      background: transparent;
      width: 100% !important;
      display: block!important;
      text-align: center;
    }

    .neededToKnow_with-girl_whatToKnow {
      background: transparent;
    }

    .neededToKnow_with-girl_whatToKnow img {
      display: none;
    }

    .neededToKnow_with-girl_whatToKnow-consult-btn {
      position: relative;
      top: 550px;
    }

    .neededToKnow {
      height: auto;
      flex-direction: column;
      margin: 0 auto;
    }

    .neededToKnow_opportunities {
      grid-template-columns: 1fr 1fr;
      margin: 50px auto;
      grid-auto-columns: 350px;
    }

    .neededToKnow_opportunities-for-each {
      max-height: 100%;
      max-width: 350px;
    }

    .neededToKnow_with-girl_whatToKnow {
      width: 100%;
    }

    .neededToKnow_with-girl_whatToKnow h3 {
      font-style: normal;
      font-weight: 900;
      font-size: 30px;
      color: #333333;
      text-shadow: none;
      line-height: 1.2;
    }
  }

  @media only screen and (max-width: 1025px) {
    .neededToKnow_with-girl_whatToKnow h3 {
      margin: 0 auto;
    }

    .neededToKnow_with-girl_whatToKnow {
      height: auto;
    }

    .neededToKnow_with-girl_whatToKnow_div {
      height: 75px;
    }

    .neededToKnow_with-girl_whatToKnow-consult-btn {
      top: 550px;
    }
    .free-cons {
      position: relative;
      top: 539px;
    }


  }

  @media only screen and (max-width: 861px) {
    .neededToKnow_opportunities {
      width: 100% !important;
    }

    .neededToKnow_opportunities-for-each:nth-child(odd) {
      margin-left: 58px;
      margin-right: 0;
    }

    .neededToKnow_opportunities-for-each:nth-child(even) {
      margin-left: 38px;
      margin-right: 20px;
    }

  }

  @media only screen and (max-width: 564px) {
    .underline {
      /*bottom: 110px;*/
    }

    .neededToKnow_opportunities {
      grid-template-columns: 1fr;
    }

    .neededToKnow_opportunities-for-each {
      margin-left: 38px!important;
      margin-right: 20px !important;
    }

    .neededToKnow_opportunities-for-each h3 {
      width: 230px;
    }

    .neededToKnow_with-girl_whatToKnow-consult-btn {
      top: 950px;
    }

    .free-cons {
      top: 950px
    }

    .main-registration_count {
      flex-direction: row-reverse;
      padding: 0 2px;
    }

    .main-registration {
      width: 100%;
    }

    .main-registration_form input {
      margin-left: auto;
      margin-right: auto;
    }

    #MazPhoneNumberInput {
      margin-left: auto;
      margin-right: auto;
    }

    .main-registration_form .btn-consult {
      margin-left: auto;
      margin-right: auto;
    }

    .main-registration_form button {
      margin-left: auto;
      margin-right: auto;
    }

    .main-registration_form .policy {
      margin-left: auto;
      margin-right: auto;
    }

    .main-registration .count {
      border-radius: 33px;
    }
  }

  @media only screen and (max-width: 451px) {
    .neededToKnow_opportunities-for-each {
      margin-left: 20px!important;
    }
  }

  @media only screen and (max-width: 400px) {

    .main-registration p {
      margin-left: 32px;
    }

  }

  .free-cons {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #CDCDCD;
    margin-top: 23px;
  }

</style>

<script>
  export  default {
    methods: {
      scrollToTop() {
        window.scroll({
          top: document.querySelector('.main-registration').clientHeight - 400,
          left: 0,
          behavior: 'smooth'
        })
      }
    }
  }
</script>
