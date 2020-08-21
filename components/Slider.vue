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
        <div id="myCarousel" class="carousel slide" data-ride="carousel">

          <!-- Wrapper for slides -->
          <div class="carousel-inner">
            <div class="item active">
              <div class="item-container d-flex">
              <div class="item-img item-img_firstslide"></div>
              <div class="item_content">
                <div class="item_content-small-info d-flex">
                  <img src="~@/assets/imgs/story/slide3/image.jpg" alt="">
                  <div class="item_content-small-info_name">
                    <p>Алексей Минин</p>
                    <span>стал финансово независим в свои 35 лет</span>
                  </div>
                </div>
                <h3 class="item_content-info_title">ПОЧЕМУ Я ВЫБРАЛ GLOBALMAXIS</h3>
                <p class="item_content-info_text">Счастлив тот, у кого хороший брокер! И для меня это так,
                  потому что после стольких неудачных попыток и полного разочарования,
                  найти такого брокера как GlomalMaxis было просто счастье!
                  До нашей встречи я перелопатила кучу форумов, чатов,
                  и другие источники но так и не нашла не одного брокера,
                  который бы сравнился с GlobalMaxis</p>
                <p class="item_content-info_time">Время сотрудничества 4 года</p>
              </div>
              </div>
            </div>

            <div class="item">
              <div class="item-container d-flex">
              <div class="item-img item-img_secondslide"></div>
              <div class="item_content">
                <div class="item_content-small-info d-flex">
                  <img src="~@/assets/imgs/story/slide1/icon.jpg" alt="">
                  <div class="item_content-small-info_name">
                    <p>Олег Макаренко</p>
                    <span>стал финансово независим в свои 38 лет</span>
                  </div>
                </div>
                <h3 class="item_content-info_title">ПОЧЕМУ Я ВЫБРАЛ GLOBALMAXIS</h3>
                <p class="item_content-info_text">Счастлив тот, у кого хороший брокер! И для меня это так,
                  потому что после стольких неудачных попыток и полного разочарования,
                  найти такого брокера как GlomalMaxis было просто счастье!
                  До нашей встречи я перелопатила кучу форумов, чатов,
                  и другие источники но так и не нашла не одного брокера,
                  который бы сравнился с GlobalMaxis</p>
                <p class="item_content-info_time">Время сотрудничества 2 года</p>
              </div>
              </div>
            </div>

            <div class="item">
              <div class="item-container d-flex">
              <div class="item-img item-img_thirdslide"></div>
              <div class="item_content">
                <div class="item_content-small-info d-flex">
                  <img src="~@/assets/imgs/story/slide2/image(13).jpg" alt="">
                  <div class="item_content-small-info_name">
                    <p>Ирина Ковалык</p>
                    <span>стала финансово независимой в свои 29</span>
                  </div>
                </div>
                <h3 class="item_content-info_title">ПОЧЕМУ Я ВЫБРАЛ GLOBALMAXIS</h3>
                <p class="item_content-info_text">Счастлив тот, у кого хороший брокер! И для меня это так,
                  потому что после стольких неудачных попыток и полного разочарования,
                  найти такого брокера как GlomalMaxis было просто счастье!
                  До нашей встречи я перелопатила кучу форумов, чатов,
                  и другие источники но так и не нашла не одного брокера,
                  который бы сравнился с GlobalMaxis</p>
                <p class="item_content-info_time">Время сотрудничества 3 года</p>
              </div>
              </div>
            </div>

          </div>
          <!-- Left and right controls -->
          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"> <i class="fas fa-angle-left"></i> </span>
          </a>
          <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"> <i class="fas fa-angle-right"></i> </span>
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

  .slider_round-imges {
    filter: blur(4px);
  }

  .ellipse4 {
    background: url("~@/assets/imgs/ellipse4.png");
    position: absolute;
    width: 110px;
    height: 110px;
    left: 163px;
    top: 1170px;
  }

  .ellipse5 {
    background: url("~@/assets/imgs/ellipse5.png");
    position: absolute;
    width: 87px;
    height: 87px;
    left: 40px;
    top: 1456px;
  }

  .ellipse6 {
    background: url("~@/assets/imgs/ellipse6.png");
    position: absolute;
    width: 69px;
    height: 69px;
    left: 0px;
    top: 1220px;
  }

  .ellipse7 {
    background: url("~@/assets/imgs/ellipse7.png");
    position: absolute;
    width: 154px;
    height: 154px;
    left: 273px;
    top: 1422px;
  }

  .ellipse8 {
    background: url("~@/assets/imgs/ellipse8.png");
    position: absolute;
    width: 216px;
    height: 216px;
    left: 1112px;
    top: 1147px;
  }

  .ellipse9 {
    background: url("~@/assets/imgs/ellipse9.png");
    position: absolute;
    width: 108px;
    height: 108px;
    left: 1313px;
    top: 1450px;
  }

  .ellipse10 {
    background: url("~@/assets/imgs/ellipse10.png");
    position: absolute;
    width: 49px;
    height: 49px;
    left: 1478px;
    top: 1215px;
  }

  .carousel-inner {
    height: 590px;
    width: 975px;
  }

  #myCarousel {
    margin: 0 auto;
  }

  .item {
    height: 590px;
    width: 975px;
  }

  .active{
    width: 975px;
  }

  .item-container {
    height: 100%;
  }

  .item-img {
    background-repeat: no-repeat;
    width: 100%;
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
    background: rgba(5, 1, 29, 0.24);
    border-radius: 50%;
    position: absolute;
    top: 190px;
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
  }

  .fa-angle-right:before {
    position: absolute;
    top: 0;
    left: 60px;
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
    background: linear-gradient(94.49deg, #02001B 3.09%, #5B0563 132.69%);
    border-radius: 0px;
    font-family: 'Roboto', sans-serif;
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
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #EEEEEE;
    margin: 20px 0 5px 12px;
  }

  .item_content-small-info span {
    font-weight: normal;
    font-size: 14px;
    color: #C8C8C8;
    margin: 0 24px 20px 10px;
  }

  .item_content-info_title {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    color: #DEDEDE;
    max-width: 288px;
    margin: 45px 169px 30px 33px;
  }

  .item_content-info_text {
    font-family: 'Open Sans', sans-serif;
    font-weight: normal;
    font-size: 15px;
    color: #C5C5C5;
    max-width: 412px;
    margin-left: 35px;
    line-height: 28px;
  }

  .item_content-info_time {
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: #BFBFBF;
    margin: 62px 0 39px 38px;
    padding-left: 20px;
    border-left: 4px solid #626262;;
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
      margin: 0 auto;
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
      max-width: 380px;
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
      height: 100%;
      min-height: 700px;
      width: 100%;
      background-size: cover;
    }

    .active {
      width: 100%;
      height: 100%;
    }

    .item_content-info_title {
      margin-top: 0;
    }

    .item_content-info_time {
      border-left: 4px solid #626262;
      padding-left: 16px;
      margin-left: 42px;
    }

  }

  @media only screen and (max-width: 450px) {
    .item-img {
      height: 500px;
      min-height: 500px;
      }
    .item_content-small-info {
      max-width: 300px;
    }
    .item_content-small-info span {
      font-size: 12px;
      margin: 0 12px 10px 5px;
    }

    .item_content-small-info img {
      width: 30px;
      height: 30px;
    }

    .item_content-small-info p {
      margin: 10px 0 5px 6px;
    }

    .slider_why-slider {
      padding-left: 0;
      padding-right: 0;
    }

    .item_content-info_text {
      margin-left: 15px;
    }
    }
</style>
