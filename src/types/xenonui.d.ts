/**
 * XenonUI 组件库类型声明
 * 为 @lib/xenonui_vue_internetoverdose.es.js 提供 TypeScript 类型
 */
declare module '@lib/xenonui_vue_internetoverdose.es.js' {
  import type { DefineComponent } from 'vue'

  /** 背景组件 */
  export const BackgroundLibrary: DefineComponent<{
    tileSize?: number
    pixelated?: boolean
    opacity?: number
    zIndex?: number
    showSide?: boolean
    sideWidth?: number
  }>

  export const BackgroundPattern: DefineComponent<{
    tileSize?: number
    pixelated?: boolean
    opacity?: number
  }>

  /** 图片组件 */
  export const PixelImage: DefineComponent<{
    src: string
    width?: number
    height?: number
    pixelSize?: number
  }>

  /** 帖子组件 */
  export const PostItem: DefineComponent<{
    avatar?: string
    name?: string
    content?: string
    time?: string
    likes?: number
    replies?: number
  }>

  export const Poketter: DefineComponent<{
    posts?: unknown[]
    title?: string
  }>

  /** 窗口组件 */
  export const FloatingWindow: DefineComponent<{
    title?: string
    icon?: string
    showControls?: boolean
    closeOnClickOutside?: boolean
    initialX?: number
    initialY?: number
    width?: string
    height?: string
    modelValue?: boolean
    showStatusBar?: boolean
    opacity?: number
    selectable?: number
  }>

  /** 按钮组件 */
  export const GameButton: DefineComponent<{
    label?: string
    disabled?: boolean
  }>

  export const AppButton: DefineComponent<{
    icon?: string
    label?: string
    disabled?: boolean
  }>

  /** 手机组件 */
  export const MobilePageLayout: DefineComponent<{
    showBack?: boolean
    title?: string
    navItems?: unknown[]
    activeNavId?: string
    hideBottomNav?: boolean
    rightIcons?: unknown[]
    leftIcons?: unknown[]
  }>

  export const TopBar: DefineComponent<{
    showBack?: boolean
    title?: string
    rightIcons?: unknown[]
    leftIcons?: unknown[]
  }>

  export const BottomAppBar: DefineComponent<{
    items?: unknown[]
    activeId?: string
  }>

  export const MobileAppIcon: DefineComponent<{
    icon?: string
    name?: string
    hasNotification?: boolean
    disabled?: boolean
  }>

  export const WelcomeWidget: DefineComponent<{
    title?: string
    greeting?: string
    subtitle?: string
    statusText?: string
    showControls?: boolean
  }>

  export const AppPanel: DefineComponent<{
    title?: string
    statusText?: string
    appCount?: number
    columns?: number
    gap?: string
    showControls?: boolean
  }>

  /** 光标库 */
  export const CursorLibrary: DefineComponent<Record<string, never>>
}
