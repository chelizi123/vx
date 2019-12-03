<template>
  <div id="app">

    <!-- 一级路由 -->
    <router-view/>
  </div>
</template>

<style lang="less">
  body{
    margin: 0 auto;
  }
  // 定义一些全局样式
  .fl{
    float: left;
  }

  .fr{
    float: right;
  }

  .clearfix::after{
    display: block;
    content: '';
    clear: both;
  }

  .auto-img{
    display: block;
    width: 100%;
  }
</style>
