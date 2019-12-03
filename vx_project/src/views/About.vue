<template>
  <div>
    <h2>{{name}}</h2>
    <button @click="changeName">修改name</button>


    <h2>{{area}}</h2>
    <button @click="changeArea('天河区', 3)">修改Area</button>
    <button @click="changeArea('荔湾区', 4)">修改Area</button>
    <button @click="changeArea('海珠区', 5)">修改Area</button>
    
    <h3>{{weather}}</h3>
    <button @click="changeWeather('乌云密布')">修改weather</button>
    <button @click="cWeather">修改weather</button>
    <button @click="w">修改weather</button>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  export default {
    name: 'about',

    computed: {
      ...mapState({
        name: 'name',
        area: 'area'
      }),

      ...mapState(['weather'])
    },

    methods: {

      changeName() {
        this.$store.commit('cname');
      },

      //携带参数a发给mutations
      changeArea(a, b) {
        this.$store.commit('carea', {
          a,
          b
        });
      },

      //mapMutations
      ...mapMutations([
        'changeWeather',
        'cWeather'
      ]),

      ...mapMutations({
        //可以自定义名称w
        w: 'c1Weather'
      })

    }
  }
</script>

<style lang="less" scoped>

</style>