<template>
  <div class="reviews d-flex">
    <div class="reviews-consultation">
      <div class="float-right">
      <p class="reviews-consultation-title">У НАС УЖЕ БОЛЕЕ 50 000 ТИСЯЧ УСПЕШНЫХ КЛИЕНТОВ</p>
      <h3>ТУТ МОГ БЫТЬ ВАШ ОТЗЫВ</h3>
      <div @click='scrollToTop()' class="reviews-consultation_btn d-flex">
        <p>КОНСУЛЬТАЦИЯ</p> <i class="fas fa-long-arrow-alt-right"></i>
      </div>
      </div>
    </div>
    <div class="reviews-list">
      <div class="container">
        <ul class="nav ">
          <li class="active"><a data-toggle="tab" href="#menu0" class="d-flex">
            <img src="~@/assets/imgs/rectangle74.png" alt="">
            <div class="user-data">
              <p>Мирослава Цибуля</p>
              <span>продавец цибули</span>
            </div>
          </a></li>
          <li><a data-toggle="tab" href="#menu1" class="d-flex">
            <img src="~@/assets/imgs/rectangle74.png" alt="">
            <div class="user-data">
              <p>Мирослава Цибуля</p>
              <span>продавец цибули</span>
            </div>
          </a></li>
          <li><a data-toggle="tab" href="#menu2" class="d-flex">
            <img src="~@/assets/imgs/rectangle74.png" alt="">
            <div class="user-data">
              <p>Мирослава Цибуля</p>
              <span>продавец цибули</span>
            </div>
          </a></li>
        </ul>

        <div class="tab-content">
          <div id="menu0" class="tab-pane fade in active">
            <div class="d-flex">
            <div class="tab-content_video">
            </div>
              <div class="review-content">
                <div class="review-content_time"><p>отзыв оставлен 2 дня назад</p> <div class="videobtn"><i class="fas fa-play"></i> видео отзыв</div></div>
                <div class="starts d-flex">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <img src="~@/assets/imgs//format_quote.png" alt="">
                <p class="review-content_text">Безусловно когда я только начинал работать с брокерами я очень боялся потери денег.
                  Но с GlobalMaxis потерь у меня нет, а потому мне с этим брокеров бояться нечего!</p>
              </div>
            </div>
          </div>
          <div id="menu1" class="tab-pane fade">
            <div class="d-flex">
              <div class="tab-content_video">
              </div>
              <div class="review-content">
                <div class="review-content_time"><p>отзыв оставлен 3 дня назад</p> <div class="videobtn"><i class="fas fa-play"></i> видео отзыв</div></div>
                <div class="starts d-flex">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <img src="~@/assets/imgs//format_quote.png" alt="">
                <p class="review-content_text">Безусловно когда я только начинал работать с брокерами я очень боялся потери денег.
                  Но с GlobalMaxis потерь у меня нет, а потому мне с этим брокеров бояться нечего!</p>
              </div>
            </div>
          </div>
          <div id="menu2" class="tab-pane fade">
            <div class="d-flex">
              <div class="tab-content_video">
              </div>
              <div class="review-content">
                <div class="review-content_time"><p>отзыв оставлен 4 дня назад</p> <div class="videobtn"><i class="fas fa-play"></i> видео отзыв</div></div>
                <div class="starts d-flex">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <img src="~@/assets/imgs//format_quote.png" alt="">
                <p class="review-content_text">Безусловно когда я только начинал работать с брокерами я очень боялся потери денег.
                  Но с GlobalMaxis потерь у меня нет, а потому мне с этим брокеров бояться нечего!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>

  .reviews {
    font-family: 'Roboto', sans-serif;
    height: 600px;
  }

  .reviews-consultation {
    background: linear-gradient(149.4deg, #EFEFEF -0.6%, #090120 -0.59%, #40044D 78.1%);
    width: 30%;
    height: 100%;
  }

  .reviews-consultation-title {
    font-weight: normal;
    font-size: 16px;
    color: #D8D8D8;
    width: 252px;
    margin: 117px 89px 94px 0;
  }

  .reviews-consultation h3 {
    font-weight: 900;
    font-size: 40px;
    color: #E1E1E1;
    width: 300px;
    margin: 0 39px 0 0;
  }

  .reviews-consultation_btn {
    width: 220px;
    height: 57px;
    background: #ECE204;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    margin: 80px 121px 135px 0;
    padding: 20px 0 0 0;
    cursor: pointer;
  }

  .reviews-consultation_btn p {
    font-weight: normal;
    font-size: 14px;
    letter-spacing: 0.13em;
    color: #000000;
    padding: 0 0 18px 23px;;
  }

  .fa-long-arrow-alt-right {
    font-size: 20px;
    letter-spacing: 0.13em;
    color: #000000;
    padding-left: 18px;
  }

  .reviews-list {
    width: 70%;
    margin-left: 52px;
  }

  .nav {
    font-family: 'Roboto', sans-serif;
  }

  .nav>li {
    margin-right: 36px;
  }

  .nav>li>a {
    width: 292px;
    height: 77px;
    border-radius: 10px;
  }

  .nav>li>a img {
    margin-right: 17px;
  }

  .user-data p {
    font-weight: 500;
    font-size: 17px;
    color: #333333;
    text-decoration: none;
    margin-bottom: 0;
  }

  .user-data span {
    font-weight: normal;
    font-size: 13px;
    color: #808080;
  }

  .nav>.active {
    width: 292px;
    height: 77px;
    background: rgba(205, 205, 205, 0.19);
    border-radius: 10px;
  }

  .active {
    opacity: 1!important;
  }

  .tab-pane {
    width: 100%;
  }

  .tab-content {
    margin-top: 61px;
    margin-left: 9px;
  }

  .tab-content_video {
    width: 455px;
    height: 318px;
    background: #C4C4C4;
  }

  .videobtn {
    display: none;
  }

  .starts .fas {
    font-size: 25px;
    color: #FFDF34;
  }

   .review-content img {
     position: relative;
     right: 73px;
     top: 10px;
  }

  .review-content_text {
    font-family: 'Open Sans', sans-serif;
    font-style: italic;
    font-weight: normal;
    font-size: 17px;
    color: #343434;
    width: 317px;
    margin-top: 38px;
  }

  .review-content {
    margin-left: 50px;
  }

  .review-content_time {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    color: #7B7A7A;
    margin-top: 15px;
    margin-bottom: 8px;
  }

  @media only screen and (max-width: 1270px) {
    .review-content_text {
      width: 220px;
    }
  }

  @media only screen and (max-width: 1199px) {

    .reviews {
      flex-direction: column!important;
    }

    .float-right {
      float: none!important;
    }

    .reviews-consultation {
      width: 100% !important;
    }

    .tab-content_video {
      width: 455px;
    }

    .reviews-consultation-title {
      margin: 63px auto 30px;
      font-size: 16px;
      color: #D8D8D8;
    }

    .reviews-consultation h3 {
      margin: 0 auto;
      font-weight: 900;
      font-size: 30px;
      color: #E1E1E1;
      text-align: left;
      padding-bottom: 57px;
    }

    .review-content_text {
      width: 317px;
    }

    .reviews-consultation_btn {
      display: none!important;
    }

    .reviews-list {
      width: 100%;
      margin-left: 0;
    }

    .nav {
      flex-wrap: nowrap;
    }

    .nav>li {
      width: 100%;
      height: 66px;
      background: #F2F2F2;
      border-radius: 10px;
      position: relative;
      bottom: 20px;
    }

    .nav>.active {
      background: #F2F2F2;
    }

    .nav>li>a:focus, .nav>li>a:hover {
      text-decoration: none;
      background-color: rgba(205, 205, 205, 1);
    }

    }

  @media only screen and (max-width: 1025px) {
    .reviews-list {
      margin-left: 0;
    }

    .nav {
      flex-wrap: wrap;
    }

    .nav>li {
      width: 270px;
      height: 77px;
      margin-bottom: 10px;
    }

    .nav>li>a {
      width: 270px;
      height: 77px;
    }

    .nav>.active {
      width: 270px;
    }
  }

  @media only screen and (max-width: 861px) {
    .tab-content_video {
      display: none;
    }

    .review-content img {
      display: none;
    }

    .review-content {
      margin-left: 0;
      width: 100%;
    }

    .review-content_time {
      display: flex;
      justify-content: space-between;
    }

    .review-content_time p {
      padding-top: 10px;
    }

    .videobtn {
      display: block;
      width: 165px;
      height: 43px;
      background: rgba(233, 233, 233, 0.43);
      border: 1px solid #CBCBCB;
      box-sizing: border-box;
      border-radius: 33px;
      font-family: 'Open Sans', sans-serif;
      font-weight: normal;
      font-size: 14px;
      color: #7A7A7A;
      cursor: pointer;
      position: relative;
      top: 25px;
    }

    .videobtn i {
      padding: 15px 11px 15px 19px;
    }
  }

  @media only screen and (max-width: 450px) {
    .review-content_text {
      width: 290px;
    }
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
      },
    }
  }
</script>
