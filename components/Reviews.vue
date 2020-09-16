<template>
  <div class="reviews d-flex">
    <div class="reviews-consultation">
      <div class="float-right">
      <p class="reviews-consultation-title">УЖЕ БОЛЕЕ 50 000 ТИСЯЧ ЛЮДЕЙ СТАЛИ НАШИМИ УСПЕШНЫМИ КЛИЕНТАМИ</p>
      <h3>ОТЗЫВЫ ПРО ПЕРВЫЙ ШАГ</h3>
      <div @click='scrollToTop()' class="reviews-consultation_btn d-flex">
        <p>КОНСУЛЬТАЦИЯ</p> <i class="fas fa-long-arrow-alt-right"></i>
      </div>
      </div>
    </div>
    <div class="reviews-list">
      <div class="container">
        <ul class="nav" id="nav">
          <li class="active"><a data-toggle="tab" href="#menu0" class="d-flex">
            <img src="~@/assets/imgs/rectangle74.png" alt="">
            <div class="user-data">
              <p>Андрей Козин</p>
              <span>пенсионер</span>
            </div>
          </a></li>
          <li><a data-toggle="tab" href="#menu1" class="d-flex">
            <img src="~@/assets/imgs/rectangle74.png" alt="">
            <div class="user-data">
              <p>Анастасия Каразина</p>
              <span>Фитнес - тренер</span>
            </div>
          </a></li>
          <li><a data-toggle="tab" href="#menu2" class="d-flex">
            <img src="~@/assets/imgs/rectangle74.png" alt="">
            <div class="user-data">
              <p>Анна Гольц</p>
              <span>Мама в декрете</span>
            </div>
          </a></li>
        </ul>

        <div class="tab-content">
          <div id="menu0" class="tab-pane fade in active">
            <span class="material-icons playbtn" id="playbtn1" v-on:click="onPlayVideo('firstVideo', 'playbtn1', 'poster1')">play_arrow</span>
            <div class="d-flex">
            <div class="tab-content_video">
              <img class="poster" id="poster1" v-on:click="onPlayVideo('firstVideo')" src="~@/assets/imgs/maxresdefault.jpg" alt="">
              <iframe class="unvisVideo" id="firstVideo" width="100%" height="100%" src="https://www.youtube.com/embed/6MfdjuzcPJA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
              <div class="review-content">
                <div class="review-content_time"><p>отзыв оставлен 2 дня назад</p> <div class="videobtn"><i class="fas fa-play"></i> видео отзыв</div></div>
                <div class="stars d-flex">
                  <span class="material-icons">grade</span>
                  <span class="material-icons">grade</span>
                  <span class="material-icons">grade</span>
                  <span class="material-icons">grade</span>
                  <span class="material-icons">grade</span>
                </div>
                <img src="~@/assets/imgs/format_quote.png" alt="">
                <p class="review-content_text">Очень жалею что раньше не работал с этой компанией. Очень доволен результатом.
                  А все началось с того что просто решил попробовать с малого! </p>
              </div>
            </div>
          </div>
          <div id="menu1" class="tab-pane fade">
            <span class="material-icons playbtn" id="playbtn2" v-on:click="onPlayVideo('secondVideo', 'playbtn2', 'poster2')">play_arrow</span>
            <div class="d-flex">
              <div class="tab-content_video">
                <img class="poster" id="poster2" v-on:click="onPlayVideo('secondVideo')" src="~@/assets/imgs/maxresdefault(1).jpg" alt="">
                <iframe class="unvisVideo" id="secondVideo"  width="100%" height="100%" src="https://www.youtube.com/embed/Lo0ELoepTCM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div class="review-content">
                <div class="review-content_time"><p>отзыв оставлен 3 дня назад</p> <div class="videobtn"><i class="fas fa-play"></i> видео отзыв</div></div>
                <div class="stars d-flex">
                  <span class="material-icons">grade</span>
                  <span class="material-icons">grade</span>
                  <span class="material-icons">grade</span>
                  <span class="material-icons">grade</span>
                  <span class="material-icons grey">grade</span>
                </div>
                <img src="~@/assets/imgs//format_quote.png" alt="">
                <p class="review-content_text">Рекомендую! Сама удовлетворена и знакомым посоветовала. Очень приятная компания, работа которой заслуживает внимания!
                  Одни из немногих, кому можно доверять.</p>
              </div>
            </div>
          </div>
          <div id="menu2" class="tab-pane fade">
            <span class="material-icons playbtn" id="playbtn3" v-on:click="onPlayVideo('thirdVideo', 'playbtn3', 'poster3')">play_arrow</span>
            <div class="d-flex">
              <div class="tab-content_video">
                <img class="poster" id="poster3" v-on:click="onPlayVideo('thirdVideo')" src="~@/assets/imgs/maxresdefault(1).jpg" alt="">
                <iframe class="unvisVideo" id="thirdVideo" width="100%" height="100%" src="https://www.youtube.com/embed/Lo0ELoepTCM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div class="review-content">
                <div class="review-content_time"><p>отзыв оставлен 4 дня назад</p> <div class="videobtn"><i class="fas fa-play"></i> видео отзыв</div></div>
                <div class="stars d-flex">
                  <span class="material-icons">grade</span>
                  <span class="material-icons">grade</span>
                  <span class="material-icons">grade</span>
                  <span class="material-icons">grade</span>
                  <span class="material-icons">grade</span>
                </div>
                <img src="~@/assets/imgs//format_quote.png" alt="">
                <p class="review-content_text">Безумно довольна результатом и помимо этого очень комфортно.
                  Не требует много времени, и в итоге получаю крутой результат!</p>
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
    min-width: 30%;
    height: 100%;
  }

  .reviews-consultation-title {
    font-weight: normal;
    font-size: 16px;
    color: #D8D8D8;
    width: 320px;
    margin: 117px 21px 94px 0;
    font-family: Roboto;
  }

  .reviews-consultation h3 {
    font-family: Roboto;
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

  .reviews-consultation_btn:hover {
    background-color: #ecbe04;
    overflow: hidden;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.95);
  }

  .reviews-consultation_btn:hover  .fa-long-arrow-alt-right {
    animation-name: arrow;
    animation-duration: .6s;
    position: relative;
    left: 50px;
  }

  @keyframes arrow {
    0% {left: 0}
    100% {left: 50px;}
  }
  .reviews-consultation_btn p {
    font-family: Roboto;
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
    min-width: 70%;
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
    padding: 10px 5px 7px 15px;
  }

  .nav>li>a img {
    margin-right: 17px;
    width: 60px;
    height: 60px;
    border-radius: 19px;
  }

  .user-data p {
    font-family: Roboto;
    font-weight: 500;
    font-size: 17px;
    color: #333333;
    text-decoration: none;
    margin-bottom: 0;
    line-height: 21px;
  }

  .user-data span {
    font-family: Roboto;
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

  .stars span {
    font-size: 25px;
    color: #FFDF34;
  }

  .stars .grey {
    color: #9A9A9A;
  }

   .review-content img {
     position: relative;
     right: 73px;
     top: 10px;
  }

  .review-content_text {
    font-family: Open Sans;
    font-style: italic;
    font-weight: normal;
    font-size: 17px;
    color: #343434;
    width: 317px;
    line-height: 30px;
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

  .review-content_time p {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 15px;
    color: #7B7A7A;
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

    .reviews-consultation h3 {
      max-width: 300px;
    }
  }

  @media only screen and (max-width: 861px) {
    .tab-content_video {
      display: none;
    }

    .playbtn {
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
      /*display: block;*/
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

  .unvisVideo {
    display: none;
  }

  .poster {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .playbtn {
    position: relative;
    top: 195px;
    left: 195px;
    font-size: 70px;
    color: #9A9A9A;
    cursor: pointer;
  }

  .dnone {
    display: none;
  }

  .invis {
    visibility: hidden;
    opacity: 0;
  }

  .user-data {
    padding-top: 8px;
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


      onPlayVideo(id, btn, frame) {
        if (document.querySelector(`#${id}`) && document.querySelector(`#${btn}`) && document.querySelector(`#${frame}`)) {
          document.querySelector(`#${id}`).classList.toggle('unvisVideo')
          document.querySelector(`#${btn}`).classList.toggle('invis')
          document.querySelector(`#${frame}`).classList.toggle('dnone')
        } else {
          return
        }
      }
    }
  }
</script>
