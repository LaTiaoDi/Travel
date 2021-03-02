<template>
   <div> <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="item of swiperList" :key='item.id'><img :src="item.imgUrl"></swiper-slide>

  
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
	</div>
</template>

<script>
 export default {
    name: 'HomeSwiper',
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
					loop:true
          // Some Swiper option/callback...
        },
				swiperList:[{
					id:'0001',
					imgUrl:'//imgs.qunarzz.com/vs_ceph_vcimg/f03f5ac90ae59d0d9c6332a2bfd9782e.jpeg'
				},{
					id:'0002',
					imgUrl:'//imgs.qunarzz.com/vs_ceph_vcimg/569cae4ae98e9793f7341e85eed73c54.jpeg'
				}]
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