<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :hot='hotCities' :cities='cities' :letter='letter'></city-list>
        <city-alphabet :cities='cities' @letter='handleLetter'></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
    name:'city',
    data:function(){
        return {
            cities:{},
            hotCities:[]
            ,letter:""
        }
    },
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    methods:{
        getCityInfo :function(){
            axios.get('http://127.0.0.1:8888/api/city.json').then(res => {
                res  = JSON.parse(res.data.city)
                const data = res.data
                console.log(data);
                this.cities = data.cities
                this.hotCities =data.hotCities
            })
        },
        handleLetter(letter){
            console.log(letter);
            this.letter = letter
        }
    }
    ,
    mounted(){
       this.getCityInfo ()
    }
}
</script>
<style lang="stylus" scoped>

</style>