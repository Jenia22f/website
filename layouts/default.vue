<template>
  <div>
    <Header />
    <Title />
    <Main :count="count" />
    <Partners />
    <Slider />
    <NeededToKnow />
    <FirstResult />
    <Reviews />
    <Form :thousands="thousands" :hundreds="hundreds" :tens="tens" :units="units" />
    <main>
      <div class="container">
        <Nuxt />
      </div>
    </main>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Title from '@/components/Title'
  import Main from '@/components/Main'
  import Partners from '@/components/Partners'
  import Slider from '@/components/Slider'
  import NeededToKnow from '@/components/NeededToKnow'
  import FirstResult from '@/components/FirstResult'
  import Reviews from '@/components/Reviews'
  import Form from '@/components/Form'
  export default {

    component: {
      Header, Title, Main, Partners,
      Slider, NeededToKnow, FirstResult, Reviews, Form
    },
    data() {
      return {
        count: 5168,
        thousands: 5,
        hundreds: 1,
        tens: 6,
        units: 8
      }
    },
    mounted() {
      console.log(this.$route);
    },

    watch: {

      count: {
        handler(value) {
          if (value > 0) {
            setTimeout(() => {
              this.count = this.count + Math.floor(Math.random() * Math.floor(15));
              this.thousands = String(this.count).split('')[0]
              this.hundreds = String(this.count).split('')[1]
              this.tens = String(this.count).split('')[2]
              this.units = String(this.count).split('')[3]

            }, (Math.floor(Math.random() * Math.floor(7)) * 1000));
          }
        },
        immediate: true, // This ensures the watcher is triggered upon creation
      },

    }
  }
</script>

<style>

</style>
