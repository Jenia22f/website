import 'intl-tel-input/build/css/intlTelInput.css';

<template>
  <div class="main">
    <div class="main_linaer">
    <div class="container d-flex justify-content-around">
      <div class="main-reviews">
      <div id="myCarousel2" class="carousel slide carousel-fade"  data-ride="carousel" data-interval="5000" data-pause="hover">
        <div class="carousel-inner">
          <div class="item item-review active">
              <div class="main-reviews_user-data d-flex">
                <div class="main-reviews_user-data_logo">
                  <img src="~@/assets/imgs/ellipse2.png" alt="">
                </div>
                <div class="main-reviews_user-data_name">
                  <p>
                    Алексей
                  </p>
                  <span>
              5 дней назад
          </span>
                </div>
              </div>
              <div class="main-reviews_user-text">
                <p>
                  Начал работать с компанией две недели назад и результат не заставил себя ждать.
                  Сегодня вывел свои первые средства, и решил написать отзыв,
                  что все честно и без каких либо проблем.</p>
              </div>
              <div class="main-reviews_video-btn" data-toggle="modal" data-target="#myModal">
                <i class="fas fa-play"></i> видео отзыв
              </div>
            </div>
          <div class="item item-review">
              <div class="main-reviews_user-data d-flex">
                <div class="main-reviews_user-data_logo">
                  <img src="~@/assets/imgs/ellipse2.png" alt="">
                </div>
                <div class="main-reviews_user-data_name">
                  <p>
                    Оксана
                  </p>
                  <span>
              5 дней назад
          </span>
                </div>
              </div>
              <div class="main-reviews_user-text">
                <p>
                  Безумно рада, что начала работать с этой компанией.
                  Я открыла для себя новый источник дохода и весьма немалый на сегодняшний день!
                  Вы крутые, спасибо вам!</p>
              </div>
              <div class="main-reviews_video-btn" data-toggle="modal" data-target="#myModal2">
                <i class="fas fa-play"></i> видео отзыв
              </div>
          </div>
          <div class="item item-review">
              <div class="main-reviews_user-data d-flex">
                <div class="main-reviews_user-data_logo">
                  <img src="~@/assets/imgs/ellipse2.png" alt="">
                </div>
                <div class="main-reviews_user-data_name">
                  <p>
                    Ольга
                  </p>
                  <span>
              5 дней назад
          </span>
                </div>
              </div>
              <div class="main-reviews_user-text">
                <p>
                  Ни разу не жалею что однажды рискнула поработать с вами!
                  Начала с малого, и вот уже год работаем!
                  Спасибо вам огромное, развития вашей команде и знайте,
                  что мы в вас верим!</p>
              </div>
              <div class="main-reviews_video-btn" data-toggle="modal" data-target="#myModal2">
                <i class="fas fa-play"></i> видео отзыв
              </div>
          </div>
          <p class="main-reviews_all" @click='scrollToRev()'>Все Отзывы</p>
          <div class="d-flex justify-content-end" style="width: 120px;float: right;position: relative;bottom: 45px;">
            <a href="#myCarousel2" data-slide="prev" class="rev-carousel_control"><span class="material-icons rev-arrow rev-arrow_left">keyboard_arrow_left</span></a>
            <a href="#myCarousel2" data-slide="next" class="rev-carousel_control"><span class="material-icons rev-arrow rev-arrow_right">keyboard_arrow_left</span></a>
          </div>
        </div>
      </div>
      </div>

      <div class="main-logins">
        <div class="main-logins_logo">
          <img src="~@/assets/imgs/logo.svg" alt="logo">
        </div>
        <div id="myCarousels" class="carousel slide" data-ride="carousel" data-interval="5500">
          <div class="carousel-inner">
            <div class="item active">
              <div class="main-logins_reg-users">
                <img src="~@/assets/imgs/registericons/image(1).jpg" alt="">
                <div class="main-logins_reg-users_data">
                  <p>Александра</p>
                  <span>зарегистрировалась</span>
                </div>
              </div>
            </div>
            <div class="item ">
              <div class="main-logins_reg-users">
                <img src="~@/assets/imgs/registericons/image(2).jpg" alt="">
                <div class="main-logins_reg-users_data">
                  <p>Иван</p>
                  <span>зарегистрировался</span>
                </div>
              </div>
            </div>
            <div class="item ">
              <div class="main-logins_reg-users">
                <img src="~@/assets/imgs/registericons/image(3).jpg" alt="">
                <div class="main-logins_reg-users_data">
                  <p>Геннадий</p>
                  <span>зарегистрировался</span>
                </div>
              </div>
            </div>
            <div class="item ">
              <div class="main-logins_reg-users">
                <img src="~@/assets/imgs/registericons/image(4).jpg" alt="">
                <div class="main-logins_reg-users_data">
                  <p>Олег</p>
                  <span>зарегистрировался</span>
                </div>
              </div>
            </div>
            <div class="item ">
              <div class="main-logins_reg-users">
                <img src="~@/assets/imgs/registericons/image(5).jpg" alt="">
                <div class="main-logins_reg-users_data">
                  <p>Григорий</p>
                  <span>зарегистрировался</span>
                </div>
              </div>
            </div>
            <div class="item ">
              <div class="main-logins_reg-users">
                <img src="~@/assets/imgs/registericons/image(6).jpg" alt="">
                <div class="main-logins_reg-users_data">
                  <p>Борис</p>
                  <span>зарегистрировался</span>
                </div>
              </div>
            </div>
            <div class="item ">
              <div class="main-logins_reg-users">
                <img src="~@/assets/imgs/registericons/image(7).jpg" alt="">
                <div class="main-logins_reg-users_data">
                  <p>Людмила</p>
                  <span>зарегистрировался</span>
                </div>
              </div>
            </div>
            <div class="item ">
              <div class="main-logins_reg-users">
                <img src="~@/assets/imgs/registericons/image(8).jpg" alt="">
                <div class="main-logins_reg-users_data">
                  <p>Виталий</p>
                  <span>зарегистрировался</span>
                </div>
              </div>
            </div>
            <div class="item ">
              <div class="main-logins_reg-users">
                <img src="~@/assets/imgs/registericons/image(9).jpg" alt="">
                <div class="main-logins_reg-users_data">
                  <p>Станислав</p>
                  <span>зарегистрировался</span>
                </div>
              </div>
            </div>
            <div class="item ">
              <div class="main-logins_reg-users">
                <img src="~@/assets/imgs/registericons/image(10).jpg" alt="">
                <div class="main-logins_reg-users_data">
                  <p>Александр</p>
                  <span>зарегистрировался</span>
                </div>
              </div>
            </div>
            <div class="item ">
              <div class="main-logins_reg-users">
                <img src="~@/assets/imgs/registericons/image(11).jpg" alt="">
                <div class="main-logins_reg-users_data">
                  <p>Федор</p>
                  <span>зарегистрировался</span>
                </div>
              </div>
            </div>
            <div class="item ">
              <div class="main-logins_reg-users">
                <img src="~@/assets/imgs/registericons/image(12).jpg" alt="">
                <div class="main-logins_reg-users_data">
                  <p>Иван</p>
                  <span>зарегистрировался</span>
                </div>
              </div>
            </div>
            <div class="item ">
              <div class="main-logins_reg-users">
                <img src="~@/assets/imgs/registericons/image897.jpg" alt="">
                <div class="main-logins_reg-users_data">
                  <p>Константин</p>
                  <span>зарегистрировался</span>
                </div>
              </div>
            </div>
            <div class="item ">
              <div class="main-logins_reg-users">
                <img src="~@/assets/imgs/registericons/image.jpg" alt="">
                <div class="main-logins_reg-users_data">
                  <p>Сергей</p>
                  <span>зарегистрировался</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div class="main-longway">
      <h3>МЫ ШЛИ К ЭТОМУ ДОЛГОЕ ВРЕМЯ ЧТОБЫ СЕЙЧАС ВЫ СДЕЛАЛИ ТОЛЬКО ОДИН ШАГ!</h3>
      <div class="main-longway_video">
        <video width="100%" height="100%" controls autoplay>
          <source src="~@/assets/video/Meditation.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div class="main-registration">
      <div class="main-registration_count d-flex">
        <p>РЕГИСТРАЦИЙ СЕГОДНЯ</p>
        <div class="count">
          {{count}}
        </div>
      </div>
        <div class="main-registration_form main_form d-flex flex-column" id="form" name="popform">
          <input type="text" placeholder="Ваше Имя">
          <input type="text" placeholder="Ваше email">
          <vue-tel-input placeholder="+380 (96) 8798 685" v-model="value"></vue-tel-input>

          <a href="/registered" class="btn btn-consult" >Консультация</a>
          <a href="#" class="policy">Я ознакомлен с <span>политикой сайта</span></a>
        </div>

    </div>
    </div>
    </div>
    <!-- The Modal -->
    <div class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content" style="z-index: 1040;">

          <!-- Modal Header -->
<!--          <div class="modal-header">-->
<!--            <button type="button" class="close" data-dismiss="modal">&times;</button>-->
<!--          </div>-->
          <!-- Modal body -->
          <div class="modal-body">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6MfdjuzcPJA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" id="myModal2">
      <div class="modal-dialog">
        <div class="modal-content" style="z-index: 1040;">

          <!-- Modal Header -->
<!--          <div class="modal-header">-->
<!--            <button type="button" class="close" data-dismiss="modal">&times;</button>-->
<!--          </div>-->
          <!-- Modal body -->
          <div class="modal-body">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/TOwJWspR3Rs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<style>

  .vue-tel-input {
    border: none!important;
    width: 318px;
    margin-left: 20px;
    box-shadow: none!important;
  }

  .vue-tel-input input {
    margin-left: 0!important;
    width: 100% !important;
    padding-left: 75px!important;
  }

  input:focus .vue-tel-input {
    border: none!important;
  }

  .vti__dropdown {
    padding: 0!important;
    top: 7px;
    left: 70px;
  }

  .main {
    background: url('~@/assets/imgs/Rectangle21.png');
    max-height: 600px;
  }

  .main_linaer {
    background: linear-gradient(89.71deg, #424242 0.54%, rgba(63, 63, 63, 0.11) 88.29%);
    max-height: 600px;
  }

  .main-reviews {
    margin-top: 176px;
    text-align: left;
    margin-right: 34px;
    width: fit-content;
  }

  .main-reviews .carousel-inner{
    width: fit-content;
  }

  .main-reviews .carousel-inner .item-review {
    height: fit-content !important;
  }

  .main-reviews_user-data_logo {
    width: 61px;
    height: 61px;
    background: #C4C4C4;
    border-radius: 50%;
  }

  .main-reviews_user-data_name {
    text-align: left;
    padding-left: 18px;
    line-height: 1;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    margin-top: 12px;
  }

  .main-reviews_user-data_name p {
    color: #BFBFBF;
    font-size: 18px;
    margin-bottom: 5px;
    font-style: normal;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
  }

  .main-reviews_user-data_name span {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #9B9B9B;
    margin-top: 2px;
  }

  .main-reviews_user-text p {
    color: #DBDBDB;
    font-size: 14px;
    width: 290px;
    margin-top: 32px;
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: normal;
    line-height: 25px;
  }

  .main-reviews_video-btn {
    width: 163px;
    height: 44px;
    background: #C4C4C4;
    border-radius: 100px;
    text-align: left;
    padding-top: 12px;
    margin-top: 39px;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    color: #333333;
    cursor: pointer;
  }

  .main-reviews_video-btn:hover {
    background: #7C7C7C;
  }

  .main-reviews_video-btn i {
    padding-left: 25px;
    padding-right: 10px;
    font-size: 14px;
  }

  .main-reviews_all {
    font-size: 14px;
    color: #B6B6B6;
    margin-top: 43px;
    font-family: 'Open sans';
    border-bottom: 1px solid;
    width: fit-content;
    cursor: pointer;
  }

  .item-review {
    height: fit-content!important;
  }

  .main-logins {
    display: none;
  }

  .main-longway {
    background: #030016;
    border-radius: 10px;
    max-width: 692px;
    margin-top: 57px;
    z-index: 101;
    max-height: 600px;
  }

  .main-longway h3 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 25px;
    text-align: center;
    color: #fff;
    width: 550px;
    margin: 29px auto 38px;
    line-height: 33px;
    padding: 0 15px;
    height: 66px;
  }

  .main-longway_video {
    background: #A6A6A6;
    border-radius: 6px;
    max-width: 660px;
    width: 660px;
    height: 450px;
    margin: 0 16px 19px;
  }

  .main-registration {
    background: linear-gradient(104.15deg, #03001B 10.85%, #440450 87.11%);
    border-radius: 20px;
    max-width: 375px;
    height: 507px;
    margin-top: 104px;
    position: relative;
    right: 28px;
    z-index: 100;
  }

  .main-registration p {
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 25px;
    color: #E2E2E2;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.48);
    margin-left: 55px;
    margin-top: 36px;
    line-height: 29px;
  }

  .main-registration .count {
    min-width: 126px;
    min-height: 52px;
    background: #E75C5C;
    border-radius: 7px;
    margin-top: 36px;
    position: relative;
    left: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 27px;
    color: #EEEEEE;
    text-align: center;
    padding-top: 10px;
    margin-bottom: 28px;
    line-height: 32px;
  }

  .main-registration_form {
    font-family: 'Open Sans', sans-serif;

  }

  .main-registration_form input {
    width: 280px;
    height: 59px;
    background: rgba(160, 157, 163, 0.25);
    border-radius: 100px;
    margin-left: 55px;
    margin-top: 14px;
    padding-left: 36px;
    border: none;
    font-size: 14px;
    outline: none;
    color: #eaeaea;
    font-family: 'Open Sans';
  }

  .main-registration_form input::placeholder {
    color: #8D8D8D;
  }

  .main-registration_form input:hover {
    background: rgba(160, 157, 163, 0.35);
  }

  .main-registration_form input:active {
    background: rgba(160, 157, 163, 0.35);
  }

  .main-registration_form input:focus {
    background: rgba(160, 157, 163, 0.35);
  }

  .main-registration_form .btn-consult {
    margin-top: 41px;
    width: 280px;
    height: 59px;
    background: #ECE204;
    border-radius: 52px;
    margin-left: 55px;
    color: #303030;
    font-weight: 500;
    font-size: 14px;
    padding: 19px 18px 0 18px;
    text-transform: uppercase;
    font-family: Open Sans;
    font-style: normal;
    line-height: 19px;
  }

  .main-registration_form .btn-consult:hover {
    background-color: #ecbe04;
  }

  .main-registration_form .policy {
    color: #BCBCBC;
    font-weight: normal;
    font-size: 12px;
    margin-left: 95px;
    margin-top: 20px;
    font-family: 'Open Sans';
    line-height: 16px;
  }

  .main-registration_form .policy span {
    color: #4b8def;
  }

  @media only screen and (max-width: 1370px) {
    .main-longway_video {
      width: 560px;
    }
  }

  @media only screen and (max-width: 1270px) {
    .main-longway_video {
      width: 460px;
    }
  }

  @media only screen and (max-width: 1210px) {
    .main-longway h3 {
      width: fit-content;
    }
  }

  @media only screen and (max-width: 1199px) {
    .main-reviews {
      display: none;
    }
  }

  @media only screen and (max-width: 1025px) {
    #myCarousels .item {
      height: fit-content;
    }
  }

  @media only screen and (max-width: 861px) {

    #MazPhoneNumberInput-23_country_selector {
      margin-left: 35px;
    }
    #MazPhoneNumberInput-21_country_selector {
      margin-left: 35px;
    }

    .main_linaer .container {
      flex-direction: column;
    }

    .main_linaer {
      background: unset;
      max-height: 100%;
    }

    .main-longway {
      background: unset;
      max-width: 100%;
      border: none;
    }

    .main-longway h3 {
      display: none;
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

    .main {
      background: url("~@/assets/imgs//rectangle90.png");
      max-height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .main-logins {
      display: flex;
      justify-content: space-between;
      margin-top: 23px;
    }

    .carousel-inner {
      margin-right: 15px;
    }

    .main-logins_logo {
      width: 80px;
      height: 80px;
      /*background: #C4C4C4;*/
      border-radius: 46px;
      margin-left: 15px;
    }

    .main-logins_reg-users {
      width: 193px;
      height: 53px;
      background: #E4E4E4;
      border-radius: 4px;
      display: flex;
    }

    .main-logins_reg-users img {
      width: 40px;
      height: 40px;
      margin: 6px 9px;
    }

    .main-logins_reg-users_data p {
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 15px;
      color: #474747;
      text-align: left;
      margin-bottom: 0;
      margin-top: 5px;
    }

    .main-logins_reg-users_data span {
      font-family: 'Open Sans', sans-serif;
      font-weight: normal;
      font-size: 12px;
      color: #6C6C6C;
      text-align: left;
    }

    .main-longway_video {
      width: 100%;
      margin: 0;
    }

    .main-registration {
      right: 0;
      top: 20px;
      margin: 0 auto;
    }
  }

  @media only screen and (max-width: 500px) {
    .main-longway_video {
      height: 215px;
    }
  }

  @media (min-width: 576px) {
    .modal-dialog {
      max-width: 800px;
      margin: 1.75rem auto;
    }
  }

  .modal-body {
    height: 500px;
    padding: 0;
  }

  .modal-content {
    min-width: 800px;
    margin-top: 200px;
  }

  .carousel-fade .item-review {
    opacity: 0;
    transition-duration: .6s;
    transition-property: opacity;
  }
  #myCarousels .carousel-inner .item {
    height: fit-content!important;
  }

  #myCarousels {
    margin-top: 15px;
  }

  .rev-arrow {
    font-size: 50px;
    color: #9B9B9B;
  }

  .rev-arrow_right {
    transform: rotate(180deg);
  }
</style>

<script>

  import { VueTelInput } from 'vue-tel-input'

  import Form from "./Form";
  export default {

    data() {
      return {
        value: ''
      }
    },
    components: {Form, VueTelInput},
    props: ['count'],
    link: [
      // {rel: 'stylesheet', href: '~@/css/intlTelInput.scss'},
      {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/css/intlTelInput.css'},
    ],
    script: [
      // {src: '~@/js/intlTelInput.js'},
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/intlTelInput.js'},
    ],
    methods: {
      scrollToRev() {
        window.scroll({
          top: document.querySelector('.reviews').offsetTop - 200,
          left: 0,
          behavior: 'smooth'
        })
      }
    },

  }
</script>
