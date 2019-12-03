//导入路由组件
import {routesComponent} from './routesComponent';

//路由配置
export const routes = [

  {
    //根路径
    path: '/home',

    //路由名称，命名路由, 辅助跳转路由
    name: 'home',

    // component: function () {
    //   return import('../views/Home.vue');
    // }

    //路由被匹配时，该组件才会被加载(懒加载组件)
    component: routesComponent.homeComponent

  },

  {
    path: '/mapstate',
    name: 'mapstate',
    component: routesComponent.mapStateComponent
  },

  {
    path: '/mapgetter',
    name: 'mapgetter',
    component: routesComponent.mapGetterComponent
  },

  {
    path: '/upload',
    name: 'upload',
    component: routesComponent.uploadComponent
  },

  {
    path: '/about',
    name: 'about',
    component: routesComponent.aboutComponent
  },

  {
    path: '/mine',
    name: 'mine',
    component: routesComponent.mineComponent
  },

  {
    path: '*',
    redirect: {name: 'mine'}
  }

];