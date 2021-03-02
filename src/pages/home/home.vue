<template>
 <div>
<home-header></home-header>
 </div>
</template>
<script>
import HomeHeader from './components/header'
export default {
  name: 'HelloWorld',
  components:{
    HomeHeader
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
