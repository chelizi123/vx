<template>
  <div>
    <h1>mapGetter</h1>
    <h2>{{city}}</h2>
    <h3>{{x}}</h3>
    <h4>{{y}}</h4>
    <h5>{{z1}}</h5>
  </div>
</template>

<script>

  //导入mapGetters辅助函数
  import {mapGetters, mapState} from 'vuex'

  export default {

    name: 'mapgetter',

    /*
    computed: {

      city() {

        return this.$store.getters.city;

      }

    }
    */

    computed: {

      ...mapState(['b', 'c']),
      
      ...mapGetters(['x', 'y']),

      ...mapGetters({
        z1: 'z'
      }),

      city() {

        return this.$store.getters.city;

      }

    }

    
  }
</script>

<style lang="less" scoped>

</style>