<template>
   <div> <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="item of list" :key='item.id'><img :src="item.imgUrl"></swiper-slide>

  
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
	</div>
</template>

<script>
 export default {
    name: 'HomeSwiper',
		props:{
			list:Array
		},
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
					loop:true
          // Some Swiper option/callback...
        },
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
  }
</script>
<style lang="stylus" scoped>
	img {
		width: 100%;
		height:100%;
	}
	div >>> .swiper-pagination-bullet-active {
		background-color: #fff !important
	}
</style>