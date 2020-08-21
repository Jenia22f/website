<template>
  <div class="main">
    <div class="main_linaer">
    <div class="container d-flex justify-content-around">
<!--    <div class="main-reviews">-->
<!--      <div class="main-reviews_user-data d-flex">-->
<!--        <div class="main-reviews_user-data_logo">-->
<!--          <img src="~@/assets/imgs/ellipse2.png" alt="">-->
<!--        </div>-->
<!--        <div class="main-reviews_user-data_name">-->
<!--          <p>-->
<!--            Алексей-->
<!--          </p>-->
<!--          <span>-->
<!--              5 дней назад-->
<!--          </span>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="main-reviews_user-text">-->
<!--        <p>-->
<!--          Начал работать с компанией две недели назад и результат не заставил себя ждать.-->
<!--          Сегодня вывел свои первые средства, и решил написать отзыв,-->
<!--          что все честно и без каких либо проблем.</p>-->
<!--      </div>-->
<!--      <div class="main-reviews_video-btn">-->
<!--        <i class="fas fa-play"></i> видео отзыв-->
<!--      </div>-->
<!--      <p class="main-reviews_all">All reviews</p>-->
<!--    </div>-->
      <div class="main-reviews">
      <div id="myCarousel2" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="item active">
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
              <p class="main-reviews_all">All reviews</p>
            </div>
          <div class="item">
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
              <div class="main-reviews_video-btn" data-toggle="modal" data-target="#myModal2">
                <i class="fas fa-play"></i> видео отзыв
              </div>
              <p class="main-reviews_all">All reviews</p>
          </div>

        </div>
      </div>
      </div>
      <div class="main-logins">
        <div class="main-logins_logo"></div>
        <div class="main-logins_reg-users">
          <img src="~@/assets/imgs/ellipse1.png" alt="">
          <div class="main-logins_reg-users_data">
            <p>Alex</p>
            <span>зарегистрировался</span>
          </div>
        </div>
      </div>
    <div class="main-longway">
      <h3>МЫ ШЛИ К ЭТОМУ ДОЛГОЕ ВРЕМЯ ЧТОБЫ СЕЙЧАС ВЫ ПОЛУЧИЛИ ВСЕ!</h3>
      <div class="main-longway_video"></div>
    </div>
    <div class="main-registration">
      <div class="main-registration_count d-flex">
        <p>РЕГИСТРАЦИЙ СЕГОДНЯ</p>
        <div class="count">
          {{count}}
        </div>
      </div>
        <form @submit.prevent="onSubmit" class="main-registration_form d-flex flex-column">
          <input type="text" placeholder="Ваше Имя">
          <input type="text" placeholder="Ваше email">
          <input type="text" placeholder="+380 (96) 8798 685">
          <button class="btn" type="submit">Консультация</button>
          <p class="policy">Я ознакомлен с <span>политикой сайта</span></p>
        </form>

    </div>
    </div>
    </div>
    <!-- The Modal -->
    <div class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content" style="z-index: 1040;">

          <!-- Modal Header -->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">

          </div>
        </div>
      </div>
    </div>
    <div class="modal" id="myModal2">
      <div class="modal-dialog">
        <div class="modal-content" style="z-index: 1040;">

          <!-- Modal Header -->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">

          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    props: ['count']
  }
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

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
    width: 260px;
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
    margin-bottom: 2px;
    font-style: normal;
    font-weight: 600;
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
    width: 269px;
    margin-top: 32px;
  }

  .main-reviews_video-btn {
    width: 163px;
    height: 44px;
    background: #C4C4C4;
    border-radius: 100px;
    text-align: center;
    padding-top: 14px;
    margin-top: 39px;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    color: #333333;
    cursor: pointer;
  }

  .main-reviews_all {
    font-size: 14px;
    color: #B6B6B6;
    /*padding-bottom: 60px;*/
    margin-top: 43px;
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
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 25px;
    text-align: center;
    color: #FFFFFF;
    max-width: 510px;
    margin: 29px auto 38px;
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
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 25px;
    color: #E2E2E2;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.48);
    margin-left: 55px;
    margin-top: 36px;
    line-height: 1.2;
  }

  .main-registration .count {
    width: 126px;
    height: 52px;
    background: #E75C5C;
    border-radius: 7px;
    margin-top: 36px;
    position: relative;
    left: 15px;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 27px;
    color: #EEEEEE;
    text-align: center;
    padding-top: 5px;
    margin-bottom: 28px;
  }

  .main-registration_form {
    font-family: 'Open Sans', sans-serif;

  }

  .main-registration_form input {
    width: 280px;
    height: 59px;
    background: rgba(160, 157, 163, 0.25);
    border-radius: 100px;
    color: #8D8D8D;
    margin-left: 55px;
    margin-top: 14px;
    padding-left: 36px;
    border: none;
  }

  .main-registration_form button {
    margin-top: 41px;
    width: 280px;
    height: 59px;
    background: #ECE204;
    border-radius: 52px;
    margin-left: 55px;
    color: #303030;
    font-weight: 600;
    font-size: 14px;
  }

  .main-registration_form .policy {
    color: #BCBCBC;
    font-weight: normal;
    font-size: 12px;
    margin-left: 95px;
    margin-top: 20px;
  }

  .main-registration_form .policy span {
    color: royalblue;
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

  @media only screen and (max-width: 1199px) {
    .main-reviews {
      display: none;
    }
  }

  @media only screen and (max-width: 861px) {
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

    .main {
      background: url("~@/assets/imgs//rectangle90.png");
      max-height: 100%;
    }

    .main-logins {
      display: flex;
      justify-content: space-between;
      margin-top: 23px;
    }

    .main-logins_logo {
      width: 60px;
      height: 60px;
      background: #C4C4C4;
      border-radius: 46px;
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
  }

  .modal-content {
    min-width: 800px;
    margin-top: 200px;
  }
</style>
