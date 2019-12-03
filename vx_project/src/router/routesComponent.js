// 路由组件
class RoutesComponent {

  //构造器
  constructor() {

  }

  //home组件
  homeComponent() {
    return import('../views/Home.vue');
  }

  //Mapstate组件
  mapStateComponent() {
    return import('../views/Mapstate.vue');
  }

  //Mapgetter组件
  mapGetterComponent() {
    return import('../views/Mapgetter.vue');
  }

  //upload组件
  uploadComponent() {
    return import('../views/Upload.vue');
  }

  //about组件
  aboutComponent() {
    return import('../views/About.vue');
  }

   //mine组件
   mineComponent() {
    return import('../views/Mine.vue');
  }


}

export const routesComponent = new RoutesComponent();
