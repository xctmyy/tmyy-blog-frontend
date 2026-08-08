<!--
  BackgroundSwitcher 背景切换组件
  根据屏幕纵横比自动切换 PC/Mobile 背景布局
  - 横屏（宽>高，PC 模式）：显示完整桌面背景，含侧边装饰图
  - 竖屏（高>宽，手机模式）：显示纯像素图块平铺背景，无侧边图
  通过 default slot 提供页面内容
  通过 provideOrientation 向子组件提供横竖屏状态
-->
<script setup lang="ts">
import { BackgroundLibrary, CursorLibrary } from '@lib/xenonui_vue_internetoverdose.es.js'
import { provideOrientation } from '../composables/useOrientation'

/** 初始化横竖屏检测并提供状态给子组件 */
const isLandscape = provideOrientation()
</script>

<template>
  <div class="background-switcher">
    <CursorLibrary />
    <BackgroundLibrary
      :tile-size="64"
      :pixelated="true"
      :opacity="100"
      :z-index="-1"
      :show-side="isLandscape"
      :side-width="200"
    />
    <div class="page-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.background-switcher {
  width: 100%;
  min-height: 100vh;
  position: relative;
}

.page-content {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  width: 100%;
}
</style>
