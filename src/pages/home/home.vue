<template>
 <div>
<home-header></home-header>
<home-swiper :list='swiperList'></home-swiper>
<home-icons  :ilist='iconsList'></home-icons>
<home-recomment :list='RecommentList'></home-recomment>
<home-weekend :list='WeekendList'></home-weekend>
 </div>
</template>
<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecomment from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'


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
      msg: 'Welcome to Your Vue.js App',
      swiperList:[],
      iconsList:[],
      RecommentList:[],
      WeekendList:[]
    }
  },
  methods:{
    getHomeInfo(){
      axios.get('http://127.0.0.1:8888/api/index.json').then((res) => {
         res  = JSON.parse(res.data.index) 
        const data  = res.data
        console.log(data);
        this.iconsList = data.iconList
        this.swiperList = data.swiperList
        this.RecommentList = data.recommendList
        this.WeekendList = data.weekendList

      })
    }
  }
  ,
    mounted(){
      this.getHomeInfo()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
