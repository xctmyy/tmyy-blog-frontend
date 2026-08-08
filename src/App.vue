<!--
  App.vue 根组件
  使用 BackgroundSwitcher 作为全局背景容器
  页面内容通过 router-view 渲染
-->
<script setup lang="ts">
import BackgroundSwitcher from './components/BackgroundSwitcher.vue'
</script>

<template>
  <BackgroundSwitcher>
    <router-view />
  </BackgroundSwitcher>
</template>

<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

#app {
  width: 100%;
  min-height: 100vh;
}
</style>
