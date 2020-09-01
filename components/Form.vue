<template>
  <div class="form">
    <div class="form-container">
      <div class="container">
        <div class="form-registration d-flex">
          <div class="form-registration_steps w-50">
            <img src="~@/assets/imgs/ellipse14.png" class="form-registration_steps-admin_photo" alt="">
            <p class="form-registration_steps-title">Заполните форму и наш менеджер ответит вам в течении 5 минут</p>
            <p class="form-registration_steps-comment">Консультация бесплатна*</p>
            <div class="form-registration_steps-boxes">
              <div class="form-registration_steps-boxes_fr">
                <h3>01</h3>
                <p>Заполнить форму регистрации</p>
              </div>
              <div class="form-registration_steps-boxes_fr">
                <h3>02</h3>
                <p>Связь с вашим менеджером</p>
              </div>
              <div class="form-registration_steps-boxes_fr">
                <h3>03</h3>
                <p>Заключение договора о сотрудничестве</p>
              </div>
              <div class="form-registration_steps-boxes_fr">
                <h3>04</h3>
                <p>Получение пассивного заработка</p>
              </div>
            </div>
          </div>
          <div class="w-50 d-flex regform">
            <div class="form-registration_form">
              <div class="form-registration_form-number-today d-flex justify-content-center">
                <div class="form-registration_form-number-today_num">{{thousands}}</div>
                <div class="form-registration_form-number-today_num">{{hundreds}}</div>
                <div class="form-registration_form-number-today_num">{{tens}}</div>
                <div class="form-registration_form-number-today_num">{{units}}</div>
              </div>
              <p class="form-registration_form-number-today_p">Зарегистрировались сегодня</p>
              <form class="form-registration_form-fields" action="#">
                <input type="text" placeholder="Ваше имя">
                <input type="text" placeholder="Ваше email">
                <input type="text" placeholder="+380 (96) 8798 685">
              </form>
              <nuxt-link exact to="/registered">
              <button class="form-registration_form-btn" type="submit">НАЖМИ МЕНЯ</button>
              </nuxt-link>
              <p class="form-registration_form-policy">Я ознакомлен с <span>политикой сайта</span></p>
            </div>
            <div class="visa-container" id="visa-container">
              <div class="visa-card">
                <div class="visa-card_header d-flex justify-content-between">
                  <div class="visa-card_header-user_data d-flex">
                    <img src="~@/assets/imgs/rectangle67.png" alt="">
                    <div class="visa-card_header-user_data-info">
                      <p>Ангелина</p>
                      <span>с нами 2 месяца</span>
                    </div>
                  </div>
                  <img class="visa" src="~@/assets/imgs/visa1.png" alt="">
                </div>
                <div class="visa-card_body d-flex justify-content-between">
                  <div class="visa-card_body-text">
                    <p class="visa-card_body-text_output">Вывод средств</p>
                    <p class="visa-card_body-text_time">только что</p>
                  </div>
                  <div class="visa-card_body-money d-flex justify-content-around">
                    <p class="first">250$</p>
                    <i class="fas fa-long-arrow-alt-right"></i>
                    <p class="second">3500$</p>
                  </div>
                </div>
              </div>
              <div class="visa-card">
                <div class="visa-card_header d-flex justify-content-between">
                  <div class="visa-card_header-user_data d-flex">
                    <img src="~@/assets/imgs/rectangle67.png" alt="">
                    <div class="visa-card_header-user_data-info">
                      <p>Иван</p>
                      <span>с нами 1 месяц</span>
                    </div>
                  </div>
                  <img class="visa" src="~@/assets/imgs/visa1.png" alt="">
                </div>
                <div class="visa-card_body d-flex justify-content-between">
                  <div class="visa-card_body-text">
                    <p class="visa-card_body-text_output">Вывод средств</p>
                    <p class="visa-card_body-text_time">только что</p>
                  </div>
                  <div class="visa-card_body-money d-flex justify-content-around">
                    <p class="first">150$</p>
                    <i class="fas fa-long-arrow-alt-right"></i>
                    <p class="second">1600$</p>
                  </div>
                </div>
              </div>
              <div class="visa-card">
                <div class="visa-card_header d-flex justify-content-between">
                  <div class="visa-card_header-user_data d-flex">
                    <img src="~@/assets/imgs/rectangle67.png" alt="">
                    <div class="visa-card_header-user_data-info">
                      <p>Алекс</p>
                      <span>с нами 4 месяца</span>
                    </div>
                  </div>
                  <img class="visa" src="~@/assets/imgs/visa1.png" alt="">
                </div>
                <div class="visa-card_body d-flex justify-content-between">
                  <div class="visa-card_body-text">
                    <p class="visa-card_body-text_output">Вывод средств</p>
                    <p class="visa-card_body-text_time">только что</p>
                  </div>
                  <div class="visa-card_body-money d-flex justify-content-around">
                    <p class="first">550$</p>
                    <i class="fas fa-long-arrow-alt-right"></i>
                    <p class="second">15500$</p>
                  </div>
                </div>
              </div>
              <div class="visa-card">
                <div class="visa-card_header d-flex justify-content-between">
                  <div class="visa-card_header-user_data d-flex">
                    <img src="~@/assets/imgs/rectangle67.png" alt="">
                    <div class="visa-card_header-user_data-info">
                      <p>Иван</p>
                      <span>с нами 2 месяца</span>
                    </div>
                  </div>
                  <img class="visa" src="~@/assets/imgs/visa1.png" alt="">
                </div>
                <div class="visa-card_body d-flex justify-content-between">
                  <div class="visa-card_body-text">
                    <p class="visa-card_body-text_output">Вывод средств</p>
                    <p class="visa-card_body-text_time">только что</p>
                  </div>
                  <div class="visa-card_body-money d-flex justify-content-around">
                    <p class="first">300$</p>
                    <i class="fas fa-long-arrow-alt-right"></i>
                    <p class="second">2500$</p>
                  </div>
                </div>
              </div>
              <div class="visa-card">
                <div class="visa-card_header d-flex justify-content-between">
                  <div class="visa-card_header-user_data d-flex">
                    <img src="~@/assets/imgs/rectangle67.png" alt="">
                    <div class="visa-card_header-user_data-info">
                      <p>Ольга</p>
                      <span>с нами 4 месяца</span>
                    </div>
                  </div>
                  <img class="visa" src="~@/assets/imgs/visa1.png" alt="">
                </div>
                <div class="visa-card_body d-flex justify-content-between">
                  <div class="visa-card_body-text">
                    <p class="visa-card_body-text_output">Вывод средств</p>
                    <p class="visa-card_body-text_time">только что</p>
                  </div>
                  <div class="visa-card_body-money d-flex justify-content-around">
                    <p class="first">200$</p>
                    <i class="fas fa-long-arrow-alt-right"></i>
                    <p class="second">4000$</p>
                  </div>
                </div>
              </div>
              <div class="visa-card">
                <div class="visa-card_header d-flex justify-content-between">
                  <div class="visa-card_header-user_data d-flex">
                    <img src="~@/assets/imgs/rectangle67.png" alt="">
                    <div class="visa-card_header-user_data-info">
                      <p>Алексей</p>
                      <span>с нами 2 месяца</span>
                    </div>
                  </div>
                  <img class="visa" src="~@/assets/imgs/visa1.png" alt="">
                </div>
                <div class="visa-card_body d-flex justify-content-between">
                  <div class="visa-card_body-text">
                    <p class="visa-card_body-text_output">Вывод средств</p>
                    <p class="visa-card_body-text_time">только что</p>
                  </div>
                  <div class="visa-card_body-money d-flex justify-content-around">
                    <p class="first">250$</p>
                    <i class="fas fa-long-arrow-alt-right"></i>
                    <p class="second">2500$</p>
                  </div>
                </div>
              </div>
              <div class="visa-card">
                <div class="visa-card_header d-flex justify-content-between">
                  <div class="visa-card_header-user_data d-flex">
                    <img src="~@/assets/imgs/rectangle67.png" alt="">
                    <div class="visa-card_header-user_data-info">
                      <p>Оксана</p>
                      <span>с нами 5 месяцев</span>
                    </div>
                  </div>
                  <img class="visa" src="~@/assets/imgs/visa1.png" alt="">
                </div>
                <div class="visa-card_body d-flex justify-content-between">
                  <div class="visa-card_body-text">
                    <p class="visa-card_body-text_output">Вывод средств</p>
                    <p class="visa-card_body-text_time">только что</p>
                  </div>
                  <div class="visa-card_body-money d-flex justify-content-around">
                    <p class="first">250$</p>
                    <i class="fas fa-long-arrow-alt-right"></i>
                    <p class="second">5000$</p>
                  </div>
                </div>
              </div>
              <div class="visa-card">
                <div class="visa-card_header d-flex justify-content-between">
                  <div class="visa-card_header-user_data d-flex">
                    <img src="~@/assets/imgs/rectangle67.png" alt="">
                    <div class="visa-card_header-user_data-info">
                      <p>Борис</p>
                      <span>с нами 4 месяца</span>
                    </div>
                  </div>
                  <img class="visa" src="~@/assets/imgs/visa1.png" alt="">
                </div>
                <div class="visa-card_body d-flex justify-content-between">
                  <div class="visa-card_body-text">
                    <p class="visa-card_body-text_output">Вывод средств</p>
                    <p class="visa-card_body-text_time">только что</p>
                  </div>
                  <div class="visa-card_body-money d-flex justify-content-around">
                    <p class="first">150$</p>
                    <i class="fas fa-long-arrow-alt-right"></i>
                    <p class="second">2000$</p>
                  </div>
                </div>
              </div>
              <div class="visa-card">
                <div class="visa-card_header d-flex justify-content-between">
                  <div class="visa-card_header-user_data d-flex">
                    <img src="~@/assets/imgs/rectangle67.png" alt="">
                    <div class="visa-card_header-user_data-info">
                      <p>Константин</p>
                      <span>с нами 2 месяца</span>
                    </div>
                  </div>
                  <img class="visa" src="~@/assets/imgs/visa1.png" alt="">
                </div>
                <div class="visa-card_body d-flex justify-content-between">
                  <div class="visa-card_body-text">
                    <p class="visa-card_body-text_output">Вывод средств</p>
                    <p class="visa-card_body-text_time">только что</p>
                  </div>
                  <div class="visa-card_body-money d-flex justify-content-around">
                    <p class="first">350$</p>
                    <i class="fas fa-long-arrow-alt-right"></i>
                    <p class="second">5000$</p>
                  </div>
                </div>
              </div>
              <div class="visa-card">
                <div class="visa-card_header d-flex justify-content-between">
                  <div class="visa-card_header-user_data d-flex">
                    <img src="~@/assets/imgs/rectangle67.png" alt="">
                    <div class="visa-card_header-user_data-info">
                      <p>Людмила</p>
                      <span>с нами 3 месяца</span>
                    </div>
                  </div>
                  <img class="visa" src="~@/assets/imgs/visa1.png" alt="">
                </div>
                <div class="visa-card_body d-flex justify-content-between">
                  <div class="visa-card_body-text">
                    <p class="visa-card_body-text_output">Вывод средств</p>
                    <p class="visa-card_body-text_time">только что</p>
                  </div>
                  <div class="visa-card_body-money d-flex justify-content-around">
                    <p class="first">250$</p>
                    <i class="fas fa-long-arrow-alt-right"></i>
                    <p class="second">5500$</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="footer-logo">
            <img src="/_nuxt/assets/imgs/logo.svg" alt="logo">
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat
          </p>
          <p>Privacy Policy | Agreement</p>
        </div>

      </div>
    </div>
  </div>

</template>


<style>

  .form {
    margin-top: 381px;
    padding-bottom: 50px;
  }

  .form-container {
    height: 717px;
    background-image: url("~@/assets/imgs/rectangle78.png");
    background-position: center;
    background-repeat: no-repeat;
    /*background-image: url(""), no-repeat, center;*/
    border-radius: 56px;
  }

  .form-registration {
    margin: 0 auto;
    width: 928px;
    height: 586px;
    background: linear-gradient(180deg, #090120 0%, #40044D 100%);
    position: relative;
    bottom: 80px;
    text-align: center;
  }

  .form-registration_steps {
    font-family: 'Open Sans', sans-serif;
  }

  .form-registration_steps-admin_photo {
    position: relative;
    bottom: 30px;
  }

  .form-registration_steps-title {
    font-weight: normal;
    font-size: 17px;
    color: #D8D8D8;
    width: 296px;
    margin: 0 auto 14px;
  }

  .form-registration_steps-comment {
    font-weight: 600;
    font-size: 14px;
    color: #A9A9A9;
  }

  .form-registration_steps-boxes {
    display: grid;
    grid-template-columns: 200px 200px;
    margin-top: 32px;
    margin-left: 43px;
  }

  .form-registration_steps-boxes_fr {
    text-align: left;
    padding: 32px 26px 28px 0;
    height: 150px;
  }

  .form-registration_steps-boxes_fr:first-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.09);
  }

  .form-registration_steps-boxes_fr:nth-child(2) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.09);
  }

  .form-registration_steps-boxes_fr:nth-child(odd) {
    border-right: 1px solid rgba(255, 255, 255, 0.09);
  }

  .form-registration_steps-boxes_fr:nth-child(even) {
    padding-left: 38px;
  }

  .form-registration_steps-boxes_fr h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 30px;
    color: #DDDDDD;
  }

  .form-registration_steps-boxes_fr p {
    font-family: 'Open Sans', sans-serif;
    font-weight: normal;
    font-size: 15px;
    color: #9E9E9E;
    width: 170px;
  }

  .form-registration_form {
    min-width: 338px;
    height: 531px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    margin-top: 24px;
    margin-left: 54px;
  }

  .form-registration_form-number-today {
    padding-top: 41px;
  }

  .form-registration_form-number-today_num {
    width: 54px;
    height: 71px;
    background: #B84A4A;
    border-radius: 8px;
    font-weight: 900;
    font-size: 40px;
    color: #EAEAEA;
    font-family: 'Roboto', sans-serif;
    padding-top: 5px
  }

  .form-registration_form-number-today_num:not(:last-child) {
    margin-right: 10px;
  }

  .form-registration_form-number-today_p {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #DFDFDF;
    margin-top: 14px;
    margin-bottom: 34px;
  }

  .form-registration_form-fields input {
    width: 280px;
    height: 59px;
    background: rgba(160, 157, 163, 0.25);
    border-radius: 100px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #8D8D8D;
    border: none;
    padding-left: 36px;
    margin-bottom: 14px;
    outline: none;
  }

  .form-registration_form-btn {
    width: 280px;
    height: 59px;
    background: #ECE204;
    border-radius: 52px;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #000000;
    outline: none;
    margin-bottom: 20px;
    border: none;
  }

  .form-registration_form-policy {
    font-family: 'Open Sans', sans-serif;
    font-weight: normal;
    font-size: 12px;
    color: #BCBCBC;
  }

  .form-registration_form-policy span {
    color: royalblue;
  }

  .visa-container {
    position: absolute;
    left: 900px;
    top: 40px;
    max-height: 500px;
    overflow: hidden;
  }

  .visa-card {
    min-width: 340px;
    height: 154px;
    background: #030016;
    /*box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.24);*/
    border-radius: 10px;
    margin-bottom: 13px;
    position: relative;
    animation: move 30s ease-in-out;
    bottom: 0;
    animation-iteration-count: infinite;
    animation-direction: reverse;
  }

  @keyframes move {
    0% {
      bottom: 0;
    }
    10% {
      bottom: 0;
    }
    15% {
      bottom: 165px;
      /*left: 0*/
    }
    25% {
      bottom: 165px;
      /*left: 100px*/
    }
    30% {
      bottom: 330px;
      /*left: 60px*/
    }
    40% {
      bottom: 330px;
      /*left: 0*/
    }
    45% {
      bottom: 495px;
      /*left: 0*/
    }
    55% {
      bottom: 495px;
      /*left: 0*/
    }
    60% {
      bottom: 660px;
      /*left: 0*/
    }
    70% {
      bottom: 660px;
      /*left: 0*/
    }
    85% {
      bottom: 825px;
      /*left: 0*/
    }
    90% {
      bottom: 825px;
      /*left: 0*/
    }
    100% {
      bottom: 1150px;
      /*left: 0*/
    }
  }

  .visa-card_header-user_data img {
    margin: 16px 14px 0 14px;
  }

  .visa-card_header-user_data-info {
    margin-top: 20px;
    font-family: 'Roboto', sans-serif;
  }

  .visa-card_header-user_data-info p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #949494;
    margin-bottom: 0;
  }

  .visa-card_header-user_data-info span {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    color: #6B6B6B;
  }

  .visa {
    width: 69px;
    height: 21px;
    margin: 25px 17px 0 0;
  }

  .visa-card_body {
    font-family: 'Roboto', sans-serif;
    margin-top: 30px;
  }

  .visa-card_body-text {
    margin-left: 14px;
  }

  .visa-card_body-text_output {
    font-size: 13px;
    color: #666565;
  }

  .visa-card_body-text_time {
    font-size: 13px;
    color: #B7B7B7;
  }

  .visa-card_body-money {
    max-width: 194px;
    min-width: 180px;
    height: 45px;
    background: rgba(196, 196, 196, 0.08);
    border-radius: 7px;
    font-family: 'Roboto', sans-serif;
    margin-right: 20px;
    padding-top: 5px;
  }

  .visa-card_body-money .first {
    font-weight: bold;
    font-size: 25px;
    color: #747272;
  }

  .visa-card_body-money .second {
    font-weight: bold;
    font-size: 25px;
    color: #D6D6D6;
  }

  .visa-card_body-money i {
    font-size: 25px;
    color: #96C97E;
    padding-top: 7px;
  }

  .footer {
    text-align: center;
  }

  .footer-logo {
    width: 58px;
    height: 56px;
    /*background: #C4C4C4;*/
    border-radius: 100px;
    margin: 0 auto;
    position: relative;
    bottom: 30px;
  }

  /*.footer-logo img {*/
  /*  width: 58px;*/
  /*  height: 56px;*/
  /*}*/

  .footer p {
    font-family: 'Open Sans', sans-serif;
    font-weight: normal;
    font-size: 14px;
    margin: 20px auto 5px;
    color: #9E9E9E;
    max-width: 754px;
    position: relative;
    bottom: 15px;
  }

  @media only screen and (max-width: 1540px) {
    .visa-container {
      display: none;
    }
  }

  @media only screen and (max-width: 992px) {
    .form-registration {
      width: 100%;
      height: 100%;
      flex-direction: column;
    }

    .form-registration_steps {
      width: 100% !important;
    }

    .regform {
      width: 100% !important;
      padding-bottom: 24px;
    }

    .form-registration_form {
      margin: 24px auto 0;
    }

    .form-registration_form-fields {
      display: flex;
      flex-direction: column;
    }

    .form-registration_steps-boxes {
      grid-template-columns: 1fr 1fr;
      margin: 32px 43px;
    }

    .form-registration_form-fields input {
      margin: 0 auto 14px;
    }

    .form-container {
      height: 100%;
    }
  }

  @media only screen and (max-width: 600px) {
    .form-registration_steps-boxes_fr p {
      max-width: 130px;
    }
  }

  @media only screen and (max-width: 400px) {
    .form-registration_steps-boxes {
      margin: 32px auto;
    }

    .container {
      padding-left: 0;
      padding-right: 0;
    }

    .form-registration_steps-boxes_fr:nth-child(odd) {
      padding-left: 34px;
    }
  }
</style>
<script>
  export default {
  props: ['thousands', 'hundreds', 'tens', 'units'],
  }
</script>
