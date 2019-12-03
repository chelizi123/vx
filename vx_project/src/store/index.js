import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//导出vuex仓库
export default new Vuex.Store({

  //定义组件的data数据模型
  state: {
    msg: 'home组件',
    pros: ['连衣裙', '卫衣', '羽绒服'],
    name: 'kevin',

    a: 1,
    b: 2,
    c: 3,
    d: 4,

    //上传本地图片数据
    imgDatas: [],


    area: '珠吉路',

    weather: '万里晴天',


    desk: '桌子'
  },

  //getters类似组件的计算属性
  //getters可以引用state
  getters: {

    city() {
      return '广州';
    },

    capitalizeName(state) {
      //第一个参数为 state
      console.log('state ==> ', state);
      return state.name.charAt(0).toLocaleUpperCase() + state.name.slice(1).toLowerCase();
    },

    cityCode(state, getter) {

      return '440987' + getter.city;
    },

    x() {
      return 'x';
    },
  
    y() {
      return 'y';
    },

    z() {
      return 'z';
    },

    i() {
      return 'i';
    }
  },

  //类似组件的methods
  mutations: {
    cname(state) {
      //state对象
      state.name = '车厘子';
    },

    carea(state, params) {
      //params：组件携带的参数
      console.log('params ==> ', params);
      state.area = params.a;
    },

    cWeather(state) {
      state.weather = '清风徐来';
    },


    changeWeather(state, w) {
      state.weather = w;
    },

    c1Weather(state) {
      state.weather = '多云';
    },


    //修改desk
    changeDesk(state, params) {
      
      state.desk = params === undefined ? '桌面' : params.hello;
    }
  },

  //actions: 提交mutations
  //类似组件的methods
  actions: {

    cd(context) {
      //获取state
      console.log('context.state.area ==> ', context.state.area);

      //获取getter
      console.log('context.getters.city ==> ', context.getters.city);

      //提交commit
      context.commit('changeDesk')
    },

    cd1({getters, commit, state}) {
      console.log('state.area ==> ', state.area);

      console.log('getters.city ==> ', getters.city);

      commit('changeDesk');
      //作为actions隐式返回promise的成功凝固的结果
      return getters.city;
    },

    cc(context, params) {

      console.log('params ==> ', params);

      //显式返回一个promise
      return new Promise((resolve, reject) => {

        //提交mutations
        context.commit('changeDesk', params);

        //成功凝固
        resolve(context.state.pros);
      })
    },

    c1(context) {
      context.commit('changeDesk');
    },

    c2(context) {
      context.commit('changeDesk');
    },

    c3(context, a) {
      console.log('a ==> ', a);
      context.commit('changeDesk', a);
    }

  }

})
