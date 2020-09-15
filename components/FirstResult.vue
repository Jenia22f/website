<template>
  <div class="first-result countTop">
   <div class="first-result_container container d-flex justify-content-between">
    <div class="first-result_numbers">
      <div class="first-result_numbers-data">
        <div class="underline-num"></div>
        <h3><span class="count1">50 000</span>+</h3>
      <p>Клиентов уже работают с нами</p>
      </div>
      <div class="first-result_numbers-data">
        <div class="underline-num underline-num_short"></div>
        <h3><span class="count2">20</span>+</h3>
      <p>Лет опыта работы с клиентами</p>
      </div>
      <div class="first-result_numbers-data">
        <div class="underline-num"></div>
        <h3><span class="count3">200 000</span>+</h3>
      <p>Клиентов уже заработало с нами</p>
      </div>
      <div class="first-result_numbers-data">
        <div class="underline-num underline-num_short"></div>
        <h3><span class="count4">100</span>+</h3>
      <p>Отделов которые работают с клиентами.</p>
      </div>
    </div>
    <div class="first-result_week-result">
      <h3>ПЕРВЫЙ <span>РЕЗУЛЬТАТ</span> УЖЕ ЧЕРЕЗ НЕДЕЛЮ</h3>
      <p class="first-result_week-result_txt">ПЕРВЫЕ ШАГИ К СОТРУДНИЧЕСТВУ</p>
      <div class="first-result_week-result_steps">
      <div class="first-result_week-result_steps-onestep">
        <h2>01</h2>
        <div class="first-result_week-result_steps-onestep_info">
        <h3>Бесплатная Консультация</h3>
        <p>Наши эксперты ответят на все ваши вопросы перед тем как предложить вам сотрудничество.</p>
        </div>
      </div>
      <div class="first-result_week-result_steps-onestep">
        <h2>02</h2>
        <div class="first-result_week-result_steps-onestep_info">
        <h3>Расчет вашего дохода</h3>
        <p>Мы предоставляем вам расчёт от вашей вложенной суммы на выбранный период.</p>
        </div>
      </div>
      <div class="first-result_week-result_steps-onestep">
        <h2>03</h2>
        <div class="first-result_week-result_steps-onestep_info">
        <h3>Сотрудничество и первый результат</h3>
        <p> Сделать первый шаг и получить результат, который был представлен в расчёте без рисков.</p>
        </div>
      </div>
      </div>
    </div>
    <div class="first-result_calculator">
      <div class="el-region-calc">
        <div>
          <div>
            <div class="wpb_wrapper">
              <div class="thsn-ihbox thsn-ihbox-style-hsbox   thsn-reverse-heading-yes">

              </div>

              <div class="wpb_text_column wpb_content_element ">
                <div class="wpb_wrapper">
                  <form action="index.html#" class="qis_form none" method="POST"
                        id="qis_2" enctype="multipart/form-data"><input
                    type="hidden" name="submitted_form" value="qis_2"/>
                    <div class="qis-sections qis-float ">
                      <div class="qis-inputs qis-float-columns"><input
                        type="hidden" name="interesttype"
                        value="simple"/>
                        <div class="range qis-slider-term">
                          <div class="qis-slideroutput qis-loan">
                            <span class="qis-sliderleft qis-min">1 Месяц</span>
                            <span class="qis-slidercenter"><output>{{month}} месяц</output></span>
                            <span class="qis-sliderright qis-max">12 Месяц</span>
                          </div>
                          <input type="range" class="range" name="loan-period" min="1" max="12" value="6"
                                 step="1" v-model="month" v-on:change="monthVal" v-on:input="monthVal">
                          <progress id="monthProg"  min="1" max="12" value="6"></progress>
                        </div>
                        <div class="range qis-slider-principal">
                          <div class="qis-slideroutput qis-loan">
                            <span class="qis-sliderleft qis-min">$250 </span>
                            <span class="qis-slidercenter"><output>{{moneyArr[money]}}$</output></span>
                            <span class="qis-sliderright qis-max">$10000 </span>
                          </div>
                          <input type="range" class="range" name="loan-money" min="0" max="11" value="5"
                                 step="1" v-model="money" v-on:change="moneyVal" v-on:input="moneyVal">
                          <progress id="moneyProg" min="0" max="11" value="5"
                                    step="1"></progress>
                        </div>
                        <div class="qis-repayments">
                          <div class="row justify-content-between">
                            <div class="val">Период:  <span
                              class="term">{{month}} месяца</span></div>
                            <div class="val">Вклад: <span
                              class="principle">{{this.moneyArr[this.money]}}$</span></div>
                            <div class="val val-total d-flex justify-content-between"><p>Прибыль:</p> <span
                              class="final_total">{{result}}$</span></div>
                          </div>
                        </div>
                        <div class="qis-total"></div>
                      </div>
                      <input type="hidden" name="repayment" value=""/>
                      <input type="hidden" name="totalamount" value=""/>
                      <input type="hidden" name="formname" value="one"/>
                      <div id="filechecking">

                      </div>
                    </div>
                    <h3 class="individual" v-on:click="scrollToTop()">
                      ИНДИВИДУАЛЬНЫЙ РАСЧЕТ  <i class="fas fa-long-arrow-alt-right"></i>
                    </h3>
                    <p class="individual_comment">Цифры представлены могут незначительно отличаться от итогового дохода.</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="el-region-calc_consultation">
          <h3 class="el-region-calc_consultation-h3">Хотите что-то уточнить?</h3>
          <p class="el-region-calc_consultation-p">Консультация бесплатна*</p>
          <div @click='scrollToTop()' class="el-region-calc_consultation-btn d-flex">
            <p>КОНСУЛЬТАЦИЯ</p>
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
      </div>
    </div>
   </div>
  </div>
</template>


<style>

  .first-result_numbers {
    margin-top: 538px;
  }

  .first-result {
    font-family: 'Roboto', sans-serif;
    padding-bottom: 147px;
  }

  .first-result_numbers-data h3 {
    font-style: normal;
    font-weight: 900;
    font-size: 50px;
    color: #000000;
    width: 184px;
    font-family: Roboto;
    position: relative;
    z-index: 1;
  }

  .first-result_numbers-data p {
    font-weight: normal;
    font-size: 16px;color: #494949;
    max-width: 185px;
    font-family: Roboto;
  }

  .underline-num {
    width: 174px;
    height: 22px;
    background: #ECE204;
    position: relative;
    top: 55px;
    left: 32px;
  }

  .underline-num_short {
    width: 63px;
  }

  .first-result_week-result {
    margin-top: 256px;
    margin-left: 170px;
    width: 600px;
  }

  .first-result_week-result h3 {
    font-family: Roboto;
    font-weight: 900;
    font-size: 40px;
    color: #333333;
    width: 435px;
  }

  .first-result_week-result h3 span {
    color: #ECE204;
  }

  .first-result_week-result p {
    font-weight: 500;
    font-size: 20px;
    color: #505050;
    margin-top: 42px;
    font-family: Roboto;
    margin-bottom: 55px;
  }

  .first-result_week-result_steps {
    background: #F2F2F2;
    width: 614px;
    height: 756px;
  }

  .first-result_week-result_steps-onestep {
    display: flex;
  }

  .first-result_week-result_steps-onestep:first-child {
    padding-top: 42px;
  }

  .first-result_week-result_steps-onestep:last-child {
    padding-bottom: 85px;
  }

  .first-result_week-result_steps-onestep h2 {
    font-family: Roboto;
    font-weight: 900;
    font-size: 60px;
    color: #090120;
    border: 3px solid #ECE204;
    box-sizing: border-box;
    border-radius: 100px;
    width: 124px;
    height: 124px;
    text-align: center;
    padding-top: 25px;
    position: relative;
    right: 15px;
  }

  .first-result_week-result_steps-onestep_info {
    width: 260px;
    margin-left: 34px;
  }

  .first-result_week-result_steps-onestep_info h3 {
    font-weight: 500;
    font-size: 25px;
    color: #303030;
    padding-top: 20px;
    width: 182px;
    font-family: Roboto;
  }

  .first-result_week-result_steps-onestep_info p {
    font-weight: normal;
    font-size: 15px;
    color: #5A5A5A;
    margin-top: 30px;
    font-family: Roboto;
  }

  output {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #D1D1D1;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.53);
    padding-bottom: 5px;
    position: relative;
    bottom: 25px;
  }

  #calc-1::after {
    content: "";
    position: absolute;
    left: 96px;
    top: 41%;
    /*background: url(assets/images/s6.png);*/
    background-repeat: no-repeat;
    height: 270px;
    width: 271px;
    z-index: 999;
    -webkit-animation: alltuchtopdown 1.5s ease-in-out 0s infinite alternate;
    animation: alltuchtopdown 1.5s ease-in-out 0s infinite alternate;
    -webkit-animation-duration: 2.5s;
    animation-duration: 2.5s;
    z-index: -1;
    opacity: 0.3;
  }
  body.kc-css-system .kc-css-504035, body.kc-css-system .kc-css-504035 p {
    font-family: 'Open Sans', sans-serif;
  }

  body.kc-css-system .kc-css-265552 {
    border-left: 1px solid #bbbbbb;
  }

  #calc-1 {
    background: #e2e2e2;
    font-family: 'Open Sans', sans-serif;
    padding-bottom: 100px;
  }

  #calc-1 .el-context {
    float: left;
    width: 31%;
    padding-right: 25px;
  }

  #calc-1 .el-wrap-col {
    display: flex;
    flex-flow: wrap row;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    margin-top: -135px;
  }

  #calc-1 .el-feedback {
    float: left;
    width: 30%;
    padding: 100px 0;
  }

  #calc-1 .el-feedback form .apointment-form-title {
    text-align: left;
  }

  .qis-slider-term {
    margin-bottom: 74px;
  }

  .final_total {
    width: 198px;
    height: 61px;
    background: rgba(196, 196, 196, 0.14);
    border-radius: 7px;
    font-family: 'Roboto', sans-serif !important;
    font-weight: bold!important;
    font-size: 35px !important;
    color: #E0E0E0!important;
    text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.47) !important;
    text-align: center;
    padding-top: 7px;
    margin-right: 16px;
  }

  .val-total {
    width: 100%;
    margin-left: 25px!important;
  }

  .val-total p {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
    padding-top: 20px;
    color: #C9C9C9;
    font-family: Roboto;
  }

  .individual {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 14px;
    color: #D9D9D9;
    border-bottom: 1px solid #BCB3B3;
    padding-bottom: 7px;
    width: 250px;
    margin: 40px 10px 50px;
    cursor: pointer;
    display: flex;
  }

  .individual i {
    font-size: 20px;
    color: #AFAFAF;
    margin-left: 12px;
  }

  .individual_comment {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 13px;
    color: #B4B4B4;
    margin-left: 10px;
    padding-bottom: 38px;
  }

  .first-result_calculator {
    position: relative;
    right: 100px;
  }

  .el-region-calc_consultation {
    width: 457px!important;
    height: 218px!important;
    background: linear-gradient(132.44deg, #090120 12.06%, #40044D 88.18%) !important;
    margin-top: 20px!important;
    padding: 0!important;
  }

  .el-region-calc > div {
    padding:60px 40px 20px;
    background: #272359;
    width: 457px;
    height: 648px;
    background: linear-gradient(132.44deg, #090120 12.06%, #40044D 88.18%);
  }

  #calc-1 .form-area.apppontment-form {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding-right: 15px;
    padding-left: 30px;
  }

  .qis-slidercenter,
  .qis-sliderleft,
  .qis-sliderright {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 13px;
    color: #767676;
  }

  .qis-slideroutput {
    display: flex;
    justify-content: space-between;
  }

  .el-region-calc {
    padding: 204px 0;
    float: left;
    width: 100%;
    color: #fff;
  }

  .el-region-calc_consultation-h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: #E7E7E7;
    padding: 37px 0 10px 57px;
  }

  .el-region-calc_consultation-p {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #C5C5C5;
    margin: 0 0 32px 57px;
  }

  .el-region-calc_consultation-btn {
    width: 220px;
    height: 57px;
    background: #ECE204;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    margin: 0 0 43px 57px;
    cursor: pointer;
  }

  .el-region-calc_consultation-btn:hover {
    background-color: #ecbe04;
    overflow: hidden;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.95);
  }

  .el-region-calc_consultation-btn:hover  .fa-long-arrow-alt-right {
    animation-name: arrow;
    animation-duration: .6s;
    position: relative;
    left: 50px;
  }

  @keyframes arrow {
    0% {left: 0}
    100% {left: 50px;}
  }

  .el-region-calc_consultation-btn p {
    padding: 20px 0 18px 23px;
    font-family: Roboto;
    font-weight: normal;
    font-size: 14px;
    letter-spacing: 0.13em;
    color: #000000;
  }

  .el-region-calc_consultation-btn i {
    font-size: 20px;
    color: #000000;
    padding-top: 20px;
    padding-left: 18px;
  }

  .qis {
    height: 12px;
    box-shadow: none;
    background: #e6e6e61c;
  }

  .qis__fill {

    height: 12px;
    box-shadow: none;
    background: rgba(64, 109, 222, 0.74);
  }

  #calc-1 .range {
    margin-bottom: 70px;
  }

  input[type='range'] {
    background-color: transparent;
    border-radius: 21px;
    -webkit-appearance: none;
    height: 11px;
    /*background-color: #9a905d;*/
    outline: none;
    position: relative;
    z-index: 100;
  }

  input[type='range']::-webkit-slider-runnable-track {
    -webkit-appearance: none;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    cursor: ew-resize;
    width: 28px;
    height: 28px;
    background: #1D0330!important;
    border-radius: 50%;
    border: 6px solid #C4C4C4;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.53);
    z-index: 1000;
  }


  .qis__handle {
    border: 6px solid #eaeaea;
    background: #406dde;
  }
  .qis-slidercenter{
    color: #fff;
  }
  .qis-repayments .val {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 18px;
    color: #939393;
    margin-top: 36px;
    margin-left: 10px;
  }
  .qis-repayments .val:not(:last-child) {
    width: 45%;
  }

  .qis-repayments .val span {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    color: #EBEBEB;
  }

  .qis-repayments .term,
  .qis-repayments .principle {
    display: block;
    width: 100%;
    font-weight: 700;
    font-size: 30px;
    color: #333;
    padding-top: 7px;
  }

  .qis-repayments .col-sm-4:last-child {
    left: 0;
    padding: 20px 15px;
    font-size: 17px;
    font-weight: 700;
    background: none;
    box-shadow: none;
    color: #efefef;
    max-width: calc(100% + 25px);
    width: calc(100% + 25px);
    flex: none;
    padding-left: 70px;
    margin-top: 5px;
    position: relative;
  }

  .qis-repayments .col-sm-4:last-child span {
    color: #ececec;
    text-shadow: 2px 2px 10px #171717;
    display: block;
    font-size: 40px;
    font-weight: 800;
  }

  @media only screen and (max-width: 1540px) {
    .first-result_week-result {
      margin-left: 50px;
    }
  }

  @media only screen and (max-width: 1270px) {
    .first-result_week-result_steps {
      margin-left: 10px;
      width: 530px;
    }

    .first-result_week-result_steps-onestep_info p {
      width: 200px;
    }
  }

  @media only screen and (max-width: 1199px) {
    .first-result_numbers {
      display: none;
    }

    .first-result_week-result_steps {
      background: transparent;
      position: relative;
      top: 1000px;
    }

    .first-result {
      padding-bottom: 100px;
    }

    .first-result_container {
      flex-direction: column!important;
    }

    .first-result_calculator {
      position: relative;
      bottom: 830px;
      right: 0;
    }

    .el-region-calc {
      padding: 0;
    }

    .el-region-calc > div {
      margin: 0 auto;
    }

    .first-result_week-result_txt {
      position: relative;
      top: 1020px;

    }

    .first-result_week-result p {
      text-align: center;
    }

    .first-result_week-result_steps-onestep_info p {
      text-align: left!important;
    }

    .first-result_week-result_steps-onestep {
      justify-content: center;
    }

    }

  @media only screen and (max-width: 1025px) {
    .first-result_week-result {
      margin: 200px auto 0;
    }

    .first-result_week-result h3 {
      font-size: 30px;
      font-weight: 900;
      padding-top: 0;
    }

    .first-result_week-result_steps-onestep_info {
      margin-left: 20px;
    }

    .first-result_week-result_steps-onestep h2 {
      width: 73px;
      height: 73px;
      font-size: 35px;
      right: 0;
      padding-top: 15px;
    }

    .individual {
      display: none;
    }

    .el-region-calc_consultation {
      position: relative;
      bottom: 65px;
      background: linear-gradient(132.44deg, #090120 12.06%, #40044D 88.18%) !important;
      box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.25);
      border-radius: 12px;
      width: 345px!important;
    }

    .first-result_week-result .first-result_week-result_txt {
      font-weight: 900;
      color: #505050;
      font-family: Roboto;
      margin-top: 0;
      position: relative;
      top: 900px;
    }

    .first-result_week-result_steps {
      top: 835px;
    }
  }

  @media only screen and (max-width: 992px) {
    #calc-1 .el-wrap-col {
      max-width: 800px;
      margin: 0 auto;
      padding-top: 40px;
    }

    #calc-1 .el-context {
      padding-right: 0;
      width: 100%;
    }

    .el-region-calc {
      width: 55%;
    }

    #calc-1 .el-feedback {
      width: 45%;
    }
  }

  @media only screen and (max-width: 861px) {
    .first-result_week-result {
      margin-left: 0;
      margin-right: auto;
      width: 100%;
    }

    .first-result_week-result_steps {
      width: 100%;
    }
  }

  @media only screen and (max-width: 768px){
    .el-region-calc{
      padding-top: 50px;
    }
    .el-region-calc{
      width: 100%;
      max-width: 480px;
      float: none;
      margin: 0 auto;
      margin-bottom: 30px;
      padding-bottom: 0;
    }
    #calc-1 .el-feedback{
      width: 100%;
      display: none;
      max-width: 480px;
      float: none;
      margin: 0 auto;
      padding-top: 0;
    }

    .el-region-calc > div {
      width: 100%;
    }

    .el-region-calc_consultation {
      width: 100% !important;
    }

  }

  @media only screen and (max-width: 480px){
    .qis-repayments .term, .qis-repayments .principle{
      font-size: 22px;
    }
    .qis-slidercenter, .qis-sliderleft, .qis-sliderright{
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 400px) {
    .first-result_week-result_steps-onestep_info {
      max-width: 200px;
    }

    .first-result_week-result h3 {
      font-size: 24px;
      max-width: 306px;
      margin: 0 auto;
    }
  }

  progress {
    width: 100%;
    height: 11px;
    background: #4b2d58;
    border-radius: 21px;
    position: relative;
    bottom: 11px;
    z-index: 0;
    border: 0.1px solid rgba(196, 196, 196, 0.22);
  }

  progress[value]::-webkit-progress-value {
    background: rgba(196, 196, 196, 0.63);
    border-radius: 21px;
  }

  #moneyProg {
    border-radius: 21px!important;
  }

  #monthProg {
    border-radius: 21px!important;
  }

</style>

<script>
  export  default {

    data() {
      return {
        month: 6,
        money: 5,
        moneyArr: [250,500,750,1000 ,1500 ,2000 ,2500, 3000, 3500, 4000, 4500 ,5000],
        result: '12 000'
      }
    },

    mounted() {
      var target = $('.count');
      var targetPos = target.offset().top + 100;
      var winHeight = $(window).height();
      var scrollToElem = targetPos - winHeight;
      $(window).scroll(function(){
        var winScrollTop = $(this).scrollTop();
        if(winScrollTop > scrollToElem){
          counter('.count1', 50000)
          counter('.count2', 20)
          counter('.count3', 200000)
          counter('.count4', 100)
        }
        return
      });

      function counter(counter, value) {
        $(counter).each(function () {
          $(this).prop('Counter', 0).animate({
            Counter: value,
          }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
              if ($(this).text(Math.ceil(+now)) === counter) return
            }
          });
        })
      }
    },


    methods: {
      scrollToTop() {
        window.scroll({
          top: document.querySelector('.main-registration').clientHeight - 400,
          left: 0,
          behavior: 'smooth'
        })
      },
      monthVal(event) {
        document.querySelector('#monthProg').value = event.target.value
        this.calculateTotal()
      },
      moneyVal(event) {
        document.querySelector('#moneyProg').value = event.target.value
        this.calculateTotal()
      },
      calculateTotal() {
        let preparVal = (this.month * this.moneyArr[this.money]).toString().split('')
        if (preparVal.length > 3) {
          if (preparVal.length === 4) {
            preparVal.splice(1, 0, " ");
          } else if (preparVal.length === 5) {
            preparVal.splice(2, 0, " ");
          }

        }
        this.result = preparVal.join('')
      }
    }
  }
</script>
