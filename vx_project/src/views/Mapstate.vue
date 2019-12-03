<template>
  <div>
    <h1>mapState辅助函数</h1>
    <h2>{{a}}</h2>
    <h3>{{b}}</h3>
    <h4>{{c}}</h4>
    <h5>{{d}}</h5>
    <h6>{{code}}</h6>
    <p>{{msg}}</p>
    <p>{{name}}</p>
  </div>
</template>

<script>

  //导入mapState辅助函数, 用于快速生成state
  import {mapState} from 'vuex'

  export default {
    name: 'mapstate',

    /*
    computed: mapState({

      a1: function (s) {
        let n = 10;
        //s: store的state
        return s.a + n;
      },

      b1(s) {
        return s.b;
      },

      c1: s => s.c,

      d1: 'd'

    })
    */

   /*
   computed: mapState(['a', 'b', 'c', 'd', 'msg'])
   */

  computed: {

    code() {
      console.log('this.a ==> ', this);
      return this.a + 'A001' + this.b;
    },

    //使用对象传参混入
    ...mapState({
      a: state => state.a,
      b: state => state.b,
      c(state) {

        //非箭头函数写法可以访问组件局部的计算属性
        console.log('c this.code ==> ', this.code);
        return state.c;
      },
      d: state => {
        //箭头函数写法不能访问组件的实例
        console.log('this ==> ', this);
        return state.d;
      }
    }),

    ...mapState({
      msg: state => state.msg
    }),

    ...mapState(['name'])

  }

  }
</script>

<style lang="less" scoped>

</style>