<template>
  <div class="registered-page">
    <h1 class="registered-page_title">Поздравляем! <br> Регистрация прошла успешно. В ближайшее время с вами свяжется администратор!</h1>
    <a href="/" class="registered-page_back-btn">Назад</a>
  </div>
</template>


<style>
  .registered-page {
    background: linear-gradient(104.15deg,#03001b 10.85%,#440450 87.11%);
    min-height: calc(100vh);
    display: flex;
    flex-direction: column;
  }

  .registered-page_title {
    color: #BFBFBF;
    font-family: 'Open Sans', sans-serif;
    font-size: 34px;
    font-weight: 600;
    width: 800px;
    text-align: center;
    line-height: 36px;
    padding: 10px;
    max-width: 90%;
    display: block;
    margin: 2rem auto 4rem;
  }

  .registered-page_back-btn {
    margin: 41px auto;
    width: 280px;
    height: 59px;
    background: #ECE204;
    border-radius: 52px;
    color: #303030;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    padding-top: 19px;
    cursor: pointer;
    outline: none;
    text-decoration: none;
  }

  .registered-page_back-btn:hover {
    color: black;
    text-decoration: none;
  }
</style>
