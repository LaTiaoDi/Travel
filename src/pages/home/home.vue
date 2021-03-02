<template>
 <div>
<home-header></home-header>
<home-swiper></home-swiper>
<home-icons></home-icons>
<home-recomment></home-recomment>
<home-weekend></home-weekend>
 </div>
</template>
<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecomment from './components/Recommend'
import HomeWeekend from './components/Weekend'



export default {
  name: 'HelloWorld',
  components:{
    HomeHeader
    ,HomeSwiper
    ,HomeIcons
    ,HomeRecomment
    ,HomeWeekend
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
