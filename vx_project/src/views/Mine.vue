<template>
  <div>
    <h2>actions</h2>
    <h3>{{desk}}</h3>
    <button @click="cdesk">修改desk</button>
    <button @click="cd1desk">修改desk</button>
    <button @click="ccdesk">修改desk</button>
    <button @click="c1">修改desk</button>
    <button @click="c2">修改desk</button>
    <button @click="ccc({hello: 'kevin'})">修改desk</button>
  </div>
</template>

<script>
  //对象解构
  // let {a, b, c} = {a: 1, b: 2, c: 3};
  // console.log('a ==> ', a);

  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'mine',
    
    computed: {
      ...mapState(['desk'])
    },

    methods: {
      
      cdesk() {
        this.$store.dispatch('cd');
      },

      cd1desk() {
        this.$store.dispatch('cd1').then(function (v) {
          console.log('dispatch返回一个promise');

          console.log('v ==> ', v);
        })

        console.log('aaaa');
      },

      ccdesk() {
        let self = this;

        //携带载荷(参数)
        this.$store.dispatch('cc', {hello: '你好', world: '世界'})
          .then(data => {
            console.log('data ==> ', data);

            // self.$store.dispatch('xxx');

          })
      },

      ...mapActions(['c1', 'c2']),

      ...mapActions({
        ccc: 'c3'
      })

    }

  }
</script>

<style lang="less" scoped>

</style>