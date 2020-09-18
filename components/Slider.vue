<template>
  <div class="slider">
    <div class="slider_round-imges ellipse4"></div>
    <div class="slider_round-imges ellipse5"></div>
    <div class="slider_round-imges ellipse6"></div>
    <div class="slider_round-imges ellipse7"></div>
    <div class="slider_round-imges ellipse8"></div>
    <div class="slider_round-imges ellipse10"></div>
    <div class="slider_round-imges ellipse9"></div>
    <div class="slider_why-slider container">
        <div id="myCarousel" class="carousel slide carousel-fade"  data-ride="carousel" data-interval="5000" data-pause="hover">

          <!-- Wrapper for slides -->
          <div class="carousel-inner carousel-inner-rev">
            <div class="item item-slider active">
              <div class="item-container d-flex">
              <div class="item-img item-img_firstslide"></div>
              <div class="item_content">
                <div class="item_content-small-info d-flex">
                  <img src="~@/assets/imgs/story/slide3/image.jpg" alt="">
                  <div class="item_content-small-info_name">
                    <p>Александр Линник</p>
                    <span>Владелец СТО</span>
                  </div>
                </div>
                <h3 class="item_content-info_title">Мечты материальны. Главное действовать!</h3>
                <p class="item_content-info_text">Я всегда твердил, что в этой жизни возможно всё!
                  Перед вами всегда открыты все горизонты и вы сами прокладываете себе путь.
<!--                  Я не обладаю каким-то сверх талантом, я просто стараюсь брать от жизнь все!-->
                  Началось мое сотрудничество с этой компанией ровно пол года назад.
                  За это время они сделали для меня весьма не мало, хотя порог входа у меня был минимальный.
<!--                  Тем не менее, свои основные цели я уже достиг, дальше новая ступень!-->
                </p>
                <p class="item_content-info_time">Время сотрудничества <span>пол года</span></p>
              </div>
              </div>
            </div>
            <div class="item item-slider">
              <div class="item-container d-flex">
                <div class="item-img item-img_thirdslide"></div>
                <div class="item_content">
                  <div class="item_content-small-info d-flex">
                    <img src="~@/assets/imgs/story/slide2/image(13).jpg" alt="">
                    <div class="item_content-small-info_name">
                      <p>Алина Колесникова </p>
                      <span>Открыла занятия по Йоге</span>
                    </div>
                  </div>
                  <h3 class="item_content-info_title"> Мой первый капитал для бизнеса</h3>
                  <p class="item_content-info_text">Я, как и любая  уважающая  себя женщина,
                    хотела больше уделять  внимания  себе,
                    забыть что такое усталость и не приходить с работы с испорченным настроением.
                    Зарплатой я бы не похвасталась, но ее вполне хватило,
                    для того чтобы начать работать с этой компанией и получать результат.
                    Спасибо вам, без вас мне было бы очень сложно!</p>
                  <p class="item_content-info_time">Время сотрудничества <span> год</span></p>
                </div>
              </div>
            </div>

            <div class="item item-slider">
              <div class="item-container d-flex">
              <div class="item-img item-img_secondslide"></div>
              <div class="item_content">
                <div class="item_content-small-info d-flex">
                  <img src="~@/assets/imgs/story/slide1/icon.jpg" alt="">
                  <div class="item_content-small-info_name">
                    <p>Никита Алексеев</p>
                    <span></span>
                  </div>
                </div>
                <h3 class="item_content-info_title"></h3>
                <p class="item_content-info_text">Все оказалось намного проще чем оно есть.
                  Наверное это потому, что мы привыкли усложнять,
                  а потом жаловаться что все дается с трудом.
                  Все проблемы в нашей голове. Мы много чего упускаем, а потом оправдываемся.
                  Мне выпал шанс, и я им воспользовался. И сегодня я могу позволить себе то,
                  в чем пару лет назад себе отказывал.
                  Мое почтение этой компании,
                  так как вы делаете людей по-настоящему счастливее! </p>
                <p class="item_content-info_time">Время сотрудничества <span>2 года</span></p>
              </div>
              </div>
            </div>

          </div>
          <!-- Left and right controls -->
          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="material-icons arrow-keyboard arrow-keyboard_left">keyboard_arrow_left</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="material-icons arrow-keyboard arrow-keyboard_right">keyboard_arrow_left</span>
          </a>
        </div>
    </div>
  </div>
</template>


<style>

  .slider {
    height: 710px;
    display: flex;
    justify-content: center;
  }

  /*.slider_round-imges {*/
  /*  filter: blur(4px);*/
  /*}*/

  .ellipse4 {
    background: url("~@/assets/imgs/ellipse4.png") no-repeat;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 163px;
    top: 1170px;
    max-width: 120px;
    max-height: 120px;
  }

  .ellipse5 {
    background: url("~@/assets/imgs/ellipse5.png") no-repeat;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 40px;
    top: 1456px;
    max-height: 95px;
    max-width: 95px;
  }

  .ellipse6 {
    background: url("~@/assets/imgs/ellipse6.png") no-repeat;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 1220px;
    max-height: 90px;
    max-width: 90px;
  }

  .ellipse7 {
    background: url("~@/assets/imgs/ellipse7.png") no-repeat;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 273px;
    top: 1422px;
    max-width: 164px;
    max-height: 174px;
  }

  .ellipse8 {
    background: url("~@/assets/imgs/ellipse8.png") no-repeat;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 1112px;
    top: 1147px;
    max-height: 236px;
    max-width: 236px;
  }

  .ellipse9 {
    background: url("~@/assets/imgs/ellipse9.png") no-repeat;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 1313px;
    top: 1450px;
    max-width: 118px;
    max-height: 118px;
  }

  .ellipse10 {
    background: url("~@/assets/imgs/ellipse10.png") no-repeat;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 1478px;
    top: 1215px;
    max-width: 60px;
    max-height: 60px;
  }

  .carousel-inner {
    height: 590px;
    width: 975px;
  }

  #myCarousel {
    margin: 0 auto;
  }

  .item {
    height: 590px!important;
    width: 100%!important;
  }

  .active{
    width: 975px;
  }

  .item-container {
    height: 100%;
  }

  .item-img {
    background-repeat: no-repeat;
    min-width: 50%;
    height: 100%;
    background-position: center;
  }

  .item-img_firstslide {
    background: url("~@/assets/imgs/story/slide3/578_yakhta-estra.jpg") no-repeat center;
    background-size: cover;
  }

  .item-img_secondslide {
    background: url("~@/assets/imgs/story/slide1/slidebig.jpg") no-repeat center;
    background-size: cover;
  }

  .item-img_thirdslide {
    background: url("~@/assets/imgs/story/slide2/girl.jpg") no-repeat center;
    background-size: cover;
  }

  .carousel-control {
    width: 189px;
    height: 189px;
    background: rgba(5, 1, 29, 0.24) !important;
    border-radius: 50%;
    position: absolute;
    top: 200px;
  }

  .carousel-control:hover {
    background: rgba(5, 1, 29, 0.24) !important;
  }

  .left {
    left: -75px;
  }

  .right {
    right: -80px!important;
  }

  .glyphicon {
    color: #A6A6A6;
  }

  .glyphicon:before {
    content: none;
  }

  .fa-angle-left:before {
    position: absolute;
    top: 0;
    right: 60px;
    color: rgba(6, 1, 29, 0.35);
  }

  .fa-angle-right:before {
    position: absolute;
    top: 0;
    left: 60px;
    color: rgba(6, 1, 29, 0.35);
  }

  .fa-angle-left:before:hover {
    color: rgba(6, 1, 29, 0.35);
  }

  .fa-angle-right:before:hover {
    color: rgba(6, 1, 29, 0.35);
  }

  .item {
    z-index: 100;
  }

  .slider_why-slider {
    position: relative;
    top: -60px;
    display: flex;
  }

  .item_content {
    border-radius: 0px;
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(94.49deg, #02001B 3.09%, #5B0563 132.69%);
  }

  .item_content-small-info {
    position: relative;
    right: 49px;
    width: 380px;
    height: 82px;
    background: linear-gradient(91.35deg, #120849 0.34%, rgba(13, 0, 92, 0) 114.42%);
    filter: drop-shadow(10px 10px 40px rgba(0, 0, 0, 0.25));
    border-radius: 10px;
    margin: 30px 159px 0 0;
  }

  .item_content-small-info img {
    border-radius: 10px;
    width: 60px;
    height: 60px;
    margin: 11px 0 11px 12px;
  }

  .item_content-small-info p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #EEEEEE;
    margin: 20px 0 5px 12px;
    line-height: 21px;
  }

  .item_content-small-info span {
    font-weight: normal;
    font-size: 14px;
    color: #C8C8C8;
    margin: 0 24px 20px 10px;
    font-family: Roboto;
    line-height: 16px;
  }

  .item_content-info_title {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    color: #DEDEDE;
    /*max-width: 288px;*/
    margin: 45px 169px 30px 33px;
    line-height: 39px;
  }

  .item_content-info_text {
    font-family: 'Open Sans', sans-serif;
    font-weight: normal;
    font-size: 15px;
    color: #C5C5C5;
    max-width: 411px;
    margin-left: 35px;
    line-height: 28px;
  }

  .item_content-info_time {
    font-family: Roboto;
    font-weight: normal;
    font-size: 16px;
    line-height: 34px;
    color: #BFBFBF;
    margin: 62px 0 39px 38px;
    padding-left: 20px;
    border-left: 5px solid #626262;;
  }

  .item_content-info_time span {
    font-weight: bold;
  }

  @media only screen and (max-width: 1500px) {
    .ellipse10 {
      display: none;
    }
  }

  @media only screen and (max-width: 1370px) {
    .ellipse9 {
      display: none;
    }
  }

  @media only screen and (max-width: 1330px) {
    .ellipse8 {
      display: none;
    }
  }

  @media only screen and (max-width: 1199px) {
    .carousel-control {
      display: none;
    }

    .slider_round-imges {
      display: none;
    }
  }

  @media only screen and (max-width: 1025px) {
    .slider_why-slider {
      margin-right: 50px;
    }

    .slider {
      height: auto;
      width: 100%;
    }
  }

  @media only screen and (max-width: 991px) {
    .slider {
      justify-content: unset;
    }

    .slider_why-slider {
      margin: 10px auto;
      width: 100%;
      display: block;
    }

    .active {
      width: 100%;
    }

    .item-container {
      flex-direction: column;
      height: 100%;
    }

    .item_content-small-info {
      max-width: 90%;
      width: 90%;
      margin: 0 auto;
      bottom: 120px;
      right: 0;
      background: linear-gradient(91.35deg, #120849 0.34%, #080035 114.42%);
      box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
    }

    .carousel-inner {
      width: 100%;
      height: 100%;
    }

    .item-img {
      min-height: 400px;
      max-height: 400px;
      width: 100%;
      background-size: cover;

    }

    .active {
      width: 100%;
      height: 100%;
    }

    #myCarousel .item {
      height: 800px!important;
    }

    .item_content-info_text {
      margin-left: 11px;
    }

    .item_content-info_title {
      margin: 0 0 0 11px;
      font-size: 26px;
    }

    .item_content-info_time {
      border-left: 4px solid #626262;
      padding-left: 16px;
      margin-left: 11px;
      margin-top: 45px;
    }

  }

  @media only screen and (max-width: 450px) {
    .item-img {
      height: 300px;
      min-height: 300px;
      }

    .item_content-small-info  {
      height: 61px;
      width: 340px;
    }
    .item_content-small-info span {
      font-size: 12px;
      margin: 0 12px 10px 5px;
    }

    .item_content-small-info img {
      width: 40px;
      height: 40px;
    }

    .item_content-small-info p {
      margin: 10px 0 5px 6px;
      font-size: 16px;
    }

    .slider_why-slider {
      padding-left: 0;
      padding-right: 0;
    }

    .item_content-info_text {
      margin-left: 15px;
    }
    }

  /*#myCarousel .carousel-inner>.item {*/
  /*  transition: transform .8s ease-in-out,-webkit-transform .8s ease-in-out,-o-transform .8s ease-in-out;*/
  /*}*/

  .carousel-inner-rev {
    background: linear-gradient(94.49deg, #02001B 3.09%, #5B0563 132.69%);
    /*box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.24);*/
    z-index: 1;
  }

  /*.carousel-fade .carousel-inner .item-slider {*/
  /*  opacity: 0;*/
  /*  transition-duration: .6s!important;*/
  /*  transition-property: opacity!important;*/
  /*}*/

  .arrow-keyboard {
    font-weight: normal;
    font-size: 50px;
    line-height: 50px;
    color: rgba(6, 1, 29, 0.35);
  }

  .arrow-keyboard_right {
    transform: rotate(180deg);
    margin: 69px 26px 70px 113px;
  }

  .arrow-keyboard_left {
    margin: 69px 113px 70px 26px;
  }
</style>
