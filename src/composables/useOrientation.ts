/**
 * useOrientation 横竖屏状态 composable
 * 提供 provide/inject 方式共享横竖屏状态
 * 供 BackgroundSwitcher 和页面组件使用
 */
import { ref, onMounted, onUnmounted, provide, inject, type Ref } from 'vue'

/** 注入键名 */
const ORIENTATION_KEY = Symbol('orientation')

/** 当前是否为横屏模式 */
const isLandscape = ref(true)
let resizeTimer: ReturnType<typeof setTimeout> | null = null

/** 检测横竖屏 */
function checkOrientation() {
  isLandscape.value = window.innerWidth > window.innerHeight
}

/** 防抖处理窗口变化 */
function handleResize() {
  if (resizeTimer) clearTimeout(resizeTimer)
  resizeTimer = setTimeout(checkOrientation, 100)
}

/**
 * 在 BackgroundSwitcher 中调用，初始化横竖屏检测并提供状态
 * 返回横竖屏 ref，供模板使用
 */
export function provideOrientation(): Ref<boolean> {
  provide(ORIENTATION_KEY, isLandscape)

  onMounted(() => {
    checkOrientation()
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    if (resizeTimer) clearTimeout(resizeTimer)
  })

  return isLandscape
}

/**
 * 在页面组件中调用，获取横竖屏状态
 */
export function useOrientation(): Ref<boolean> {
  const orientation = inject<Ref<boolean>>(ORIENTATION_KEY)
  if (!orientation) {
    console.warn('[useOrientation] 未找到 provideOrientation，返回默认横屏')
    return ref(true)
  }
  return orientation
}
