<template>
 <div>
<home-header></home-header>
<home-swiper></home-swiper>
 </div>
</template>
<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'HelloWorld',
  components:{
    HomeHeader
    ,HomeSwiper
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
