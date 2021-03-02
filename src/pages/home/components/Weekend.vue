<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of WeekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:"weekend",
    data(){
        return {
          WeekendList:[
            {
              id:'0001',
              imgUrl:'//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/fd16ccffb2e2376ff370bda3bebebd71.jpg'
              ,title:"嘎达照相就不嘎达啊啊啊"
              ,desc:'嘎达翔就嘎达嘎达照相不嘎达，嘎达朝夕那个嘎达啊嘎阿道夫'
            },{
              id:'0002',
              imgUrl:'//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/fd16ccffb2e2376ff370bda3bebebd71.jpg'
              ,title:"嘎达照相就不嘎达啊啊啊"
              ,desc:'嘎达翔就嘎达嘎达照相不嘎达，嘎达朝夕那个嘎达啊嘎阿道夫'
            },{
              id:'0003',
              imgUrl:'//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/fd16ccffb2e2376ff370bda3bebebd71.jpg'
              ,title:"嘎达照相就不嘎达啊啊啊"
              ,desc:'嘎达翔就嘎达嘎达照相不嘎达，嘎达朝夕那个嘎达啊嘎阿道夫'
            },{
              id:'0004',
              imgUrl:'//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/fd16ccffb2e2376ff370bda3bebebd71.jpg'
              ,title:"嘎达照相就不嘎达啊啊啊"
              ,desc:'嘎达翔就嘎达嘎达照相不嘎达，嘎达朝夕那个嘎达啊嘎阿道夫'
            }
          ]
        }
    }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  line-height: .8rem
  background: #eee
  text-indent: .2rem
.item-img-wrapper
  overflow: hidden
  height: 0
  padding-bottom: 37.09%
  .item-img
    width: 100%
.item-info
  padding: .1rem
  .item-title
    line-height: .54rem
    font-size: .32rem
    ellipsis()
  .item-desc
    line-height: .4rem
    color: #ccc
    ellipsis()
</style>
