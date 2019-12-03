<template>
  <div class="home">
    <h1>{{msg}}</h1>
    <button @click="changeMsg">修改msg</button>
    <ul>
      <li v-for="(item, index) in pros" :key="index">{{item}}<button @click="removePros(index)">删除</button> </li>
    </ul>

    <!-- getters -->
    <h1>{{city}}</h1>
    <h2>{{cName}}</h2>
    <h3>{{cityCode}}</h3>
  </div>
</template>

<script>

export default {
  name: 'home',

  // data() {
  //   return {
  //     msg: 'home组件'
  //   };
  // }

  //计算属性
  computed: {

    msg() {
      //引用store的state的msg
      return this.$store.state.msg;
    },

    pros() {
      return this.$store.state.pros;
    },

    //引用store的getters的city
    city() {
      return this.$store.getters.city;
    },


    cName() {
      return this.$store.getters.capitalizeName;
    },


    cityCode() {
      return this.$store.getters.cityCode;
    }

  },

  methods: {

    changeMsg() {
      this.$store.state.msg = 'home的vuex';
    },


    removePros(index) {
      this.$store.state.pros.splice(index, 1);
    }

  }
}
</script>
