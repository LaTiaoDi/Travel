<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item" v-for="item of recommendList" :key='item.id'>
        <img
          class="item-img"
          :src="item.imgUrl"
          alt=""
        />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详细</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "recommend",
  data() {
    return {
      recommendList: [
       {
          id: '0001',
          imgUrl:'//imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg',
          title:'惊险有趣的大型斗兽表演',
        desc:'惊险有趣的大型斗兽表演惊险有趣的大型斗兽表演'
        },{
          id: '0002',
          imgUrl:'//imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg',
          title:'惊险有趣的大型斗兽表演',
        desc:'惊险有趣的大型斗兽表演惊险有趣的大型斗兽表演'
        },{
          id: '0003',
          imgUrl:'//imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg',
          title:'惊险有趣的大型斗兽表演',
        desc:'惊险有趣的大型斗兽表演惊险有趣的大型斗兽表演'
        },{
          id: '0004',
          imgUrl:'//imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg',
          title:'惊险有趣的大型斗兽表演',
        desc:'惊险有趣的大型斗兽表演惊险有趣的大型斗兽表演'
        },
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin-top: .2rem
  line-height: .8rem
  background: #eee
  text-indent: .2rem
.item
  overflow: hidden
  display: flex
  height: 1.9rem
  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: .1rem
  .item-info
    flex: 1
    padding: .1rem
    min-width: 0
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
    .item-button
      line-height: .44rem
      margin-top: .16rem
      background: #ff9300
      padding: 0 .2rem
      border-radius: .06rem
      color: #fff
</style>
