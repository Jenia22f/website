<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
</style>

<template>
  <div>
    <Header/>
    <Title/>
    <Main :count="count"/>
    <Partners/>
    <Slider/>
    <NeededToKnow/>
    <FirstResult/>
    <Reviews/>
    <Form :thousands="thousands" :hundreds="hundreds" :tens="tens" :units="units"/>
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
  // import cookies from '@/middleware/cookies'


  export default  {
    // middleware: 'cookies',
    component: {
      Header, Title, Main, Partners,
      Slider, NeededToKnow, FirstResult, Reviews, Form,
    },

    data() {
      // if (process.client) {
      //   let reg = localStorage.getItem('registr')
      // }
      return {
        count: '',
        thousands: 1,
        hundreds: 1,
        tens: 6,
        units: 8
      }
    },

    created() {
      if (process.client) {
            this.count = localStorage.getItem('registr') ? +localStorage.getItem('registr') : 5168
      }

    },

    watch: {

      count: {
        handler(value) {
          if (value > 0) {
            setTimeout(() => {
              this.count = this.count + Math.floor(Math.random() * Math.floor(90));
              if (process.client) localStorage.setItem('registr', this.count)
              this.thousands = String(this.count).split('')[0]
              this.hundreds = String(this.count).split('')[1]
              this.tens = String(this.count).split('')[2]
              this.units = String(this.count).split('')[3]

            }, (Math.floor(Math.random() * Math.floor(5)) * 1000));
          }

        },
        immediate: true, // This ensures the watcher is triggered upon creation
      },

    }
  }
</script>


