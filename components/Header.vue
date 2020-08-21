<template>
  <header class="header header-expand-lg ">
    <div class="header-content container">
      <p class="header-content_text"><span>ВНИМАНИЕ</span>: Регистрация скоро будет закрыта из-за высокого потока клиентов - <span>ПОСПЕШИТЕ</span>!</p>
      <div class="header-content_timer">
        <p>{{ hourCount }}:{{minutesCount}}:{{ timerCount }}</p>

      </div>
    </div>
  </header>
</template>


<style>
  .header {
    background-color: #F35757;
    position: fixed;
    width: 100%;
    z-index: 1000;
    height: 70px;
  }

  .header-content {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    color: #EFEFEF;
    padding-top: 0;
    padding-bottom: 8px;
  }

  .header-content_text {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-size: 18px;
    line-height: 21px;
    vertical-align: middle;
    margin-right: 19px;
    margin-top: 25px;
  }

  .header-content_text span {
    font-weight: bold;
  }

  .header-content_timer {
    background: #F66B6B;
    border-radius: 6px;
    height: 46px;
    width: 175px;
    margin-top: 12px;
    text-align: center;
  }

  .header-content_timer p {
    font-family: Roboto sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #F4F4F4;
    margin-top: 13px;
  }

  @media only screen and (max-width: 1200px) {

  }

  @media only screen and (max-width: 1025px) {
    .header-content {
      flex-direction: column;
      height: fit-content;
      text-align: center;
    }

    .header {
      height: fit-content;
    }

    .header-content_timer {
      margin: 0 auto;
    }

    .title {
      display: none;
    }

    .header {
      position: relative;
    }
  }
</style>

<script>

  export default {

    data() {
      return {
        hourCount: 6,
        minutesCount: 32,
        timerCount: 18,
      }
    },

    watch: {

      timerCount: {
        handler(value) {
          if (value > 0) {
            setTimeout(() => {
              this.timerCount--;
            }, 1000);
          }
          if (value === 0) {
            if (this.minutesCount !== 0) {
              this.minutesCount--;
              this.timerCount = 59;
            } else {
              if (this.hourCount !== 0) {
                this.hourCount--
                this.minutesCount = 59;
                this.timerCount = 59;
              } else {
                this.timerCount = 0;
              }
            }
          }
        },

        immediate: true
      }

    },
  }

</script>
