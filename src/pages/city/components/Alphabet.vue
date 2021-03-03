<template>
  <ul class="list">
    <li
      class="item"
      @click="handleLetterClick"
      v-for="(item, keys) of cities"
      :key="keys"
    >{{keys}}</li>
  </ul>
</template>

<script>
export default {
  name: "alphabet",
  props: {
    cities: Object
  },

  methods: {
    handleLetterClick(e) {
      this.$emit("letter", e.target.innerHTML);
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
