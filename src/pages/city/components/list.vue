<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, keys) of cities" :key="keys" :ref="keys">
        <div class="title">{{ keys }}</div>
        <div class="item-list" v-for="items of item" :key="items.id">
          <div class="item border-topbottom">{{ items.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";

export default {
  name: "list",
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  data: function() {
    return {};
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      movable: true,
      zoom: true
    });
  },
  watch: {
    letter() {
      const element = this.$refs[this.letter][0];
      if (this.letter) {
        this.scroll.scrollToElement(element)
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
 .border-topbottom
   &:before
     border-color: #ccc
   &:after
     border-color: #ccc
 .border-bottom
   &:before
     border-color: #ccc
 .list
   overflow: hidden
   position: absolute
   top: 1.58rem
   left: 0
   right: 0
   bottom: 0
   .title
     line-height: .54rem
     background: #eee
     padding-left: .2rem
     color: #666
     font-size: .26rem
   .button-list
     overflow: hidden
     padding: .1rem .6rem .1rem .1rem
     .button-wrapper
       float: left
       width: 33.33%
       .button
         margin: .1rem
         padding: .1rem 0
         text-align: center
         border: .02rem solid #ccc
         border-radius: .06rem
   .item-list
     .item
       line-height: .76rem
       padding-left: .2rem
</style>
