<!--
  DesktopPage.vue 桌面/手机首页
  根据横竖屏显示不同内容：
  - 横屏（PC）：显示桌面欢迎页面
  - 竖屏（手机）：显示手机端 UI 布局（MobilePageLayout）
-->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useOrientation } from '../composables/useOrientation'
import {
  MobilePageLayout,
  WelcomeWidget,
  AppPanel,
  MobileAppIcon,
  FloatingWindow
} from '@lib/xenonui_vue_internetoverdose.es.js'
import zsmImage from '../assets/zsm.png'

/** 获取横竖屏状态 */
const isLandscape = useOrientation()

/** 当前时间 */
const currentTime = ref(new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }))

/** 更新时间的定时器 */
let timeTimer: ReturnType<typeof setInterval> | null = null

/** GitHub 弹窗显示状态 */
const showGithubPopup = ref(false)
/** 赞赏弹窗显示状态 */
const showDonatePopup = ref(false)
/** 联系弹窗显示状态 */
const showContactPopup = ref(false)

/** 点击 GitHub 图标，打开确认弹窗 */
function openGithub() {
  showGithubPopup.value = true
}

/** 确认跳转 GitHub */
function confirmGithub() {
  window.open('https://github.com', '_blank')
  showGithubPopup.value = false
}

/** 点击赞赏图标，打开图片弹窗 */
function openDonate() {
  showDonatePopup.value = true
}

/** 点击联系图标，打开联系信息弹窗 */
function openContact() {
  showContactPopup.value = true
}

/** 复制文本到剪贴板 */
function copyText(text: string) {
  navigator.clipboard.writeText(text).catch(() => {
    // 降级方案
    const textarea = document.createElement('textarea')
    textarea.value = text
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
  })
}

/** 启动时间更新 */
onMounted(() => {
  timeTimer = setInterval(() => {
    currentTime.value = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
  }, 10000)
})
onUnmounted(() => {
  if (timeTimer) clearInterval(timeTimer)
})
</script>

<template>
  <!-- PC 横屏模式：桌面图标从左上排列 -->
  <div v-if="isLandscape" class="desktop-page">
    <div class="desktop-icons">
      <div class="desktop-icon">
        <img src="/icons/article.svg" alt="文章" class="desktop-icon-img" />
        <span class="desktop-icon-label">文章</span>
      </div>
      <div class="desktop-icon" @click="openGithub">
        <img src="/icons/github.svg" alt="GitHub" class="desktop-icon-img" />
        <span class="desktop-icon-label">GitHub</span>
      </div>
      <div class="desktop-icon" @click="openContact">
        <img src="/icons/contact.svg" alt="联系" class="desktop-icon-img" />
        <span class="desktop-icon-label">联系</span>
      </div>
      <div class="desktop-icon" @click="openDonate">
        <img src="/icons/donate.svg" alt="赞赏" class="desktop-icon-img" />
        <span class="desktop-icon-label">赞赏</span>
      </div>
    </div>
    <!-- 桌面右侧广告位招租 -->
    <div class="desktop-ad-bar">
      <span>广告位招租</span>
    </div>
  </div>

  <!-- 手机竖屏模式 -->
  <MobilePageLayout
    v-else
    :title="currentTime"
    hide-bottom-nav
  >
    <template #topbar-title>
      <span class="mobile-time">{{ currentTime }}</span>
    </template>

    <WelcomeWidget
      title="_tmyy's Blog"
      greeting="我饿了，请我吃饭"
      subtitle="お腹空いた、ご飯をおごって"
      status-text="就绪"
    />

    <AppPanel title="アプリ" :app-count="4" :columns="4" gap="3vw">
      <MobileAppIcon icon="/icons/article.svg" name="文章" />
      <MobileAppIcon icon="/icons/github.svg" name="GitHub" @click="openGithub" />
      <MobileAppIcon icon="/icons/contact.svg" name="联系" @click="openContact" />
      <MobileAppIcon icon="/icons/donate.svg" name="赞赏" @click="openDonate" />
    </AppPanel>

    <div class="ad-bar">
      <span>广告位招租</span>
    </div>
  </MobilePageLayout>

  <!-- GitHub 跳转确认弹窗 -->
  <FloatingWindow
    v-model="showGithubPopup"
    title="跳转确认"
    width="300px"
    height="160px"
    :initial-x="40"
    :initial-y="200"
    :show-status-bar="false"
    :show-controls="false"
  >
    <div class="popup-content">
      <p class="popup-text">是否跳转到 GitHub？</p>
      <div class="popup-buttons">
        <button class="win95-btn" @click="confirmGithub">确定</button>
        <button class="win95-btn" @click="showGithubPopup = false">取消</button>
      </div>
    </div>
  </FloatingWindow>

  <!-- 赞赏图片弹窗 -->
  <FloatingWindow
    v-model="showDonatePopup"
    title="赞赏"
    width="300px"
    height="340px"
    :initial-x="40"
    :initial-y="100"
    :show-status-bar="false"
    @close="showDonatePopup = false"
  >
    <div class="popup-content donate-content">
      <img :src="zsmImage" alt="赞赏码" class="donate-image" />
      <p class="donate-hint">感谢您的支持！</p>
    </div>
  </FloatingWindow>

  <!-- 联系方式弹窗 -->
  <FloatingWindow
    v-model="showContactPopup"
    title="联系我"
    width="300px"
    height="240px"
    :initial-x="40"
    :initial-y="100"
    :show-status-bar="false"
    @close="showContactPopup = false"
  >
    <div class="popup-content contact-content">
      <div class="contact-item">
        <span class="contact-label">QQ群</span>
        <span class="contact-value">1094954837</span>
        <button class="win95-btn copy-btn" @click="copyText('1094954837')">复制</button>
      </div>
      <div class="contact-item">
        <span class="contact-label">微信</span>
        <span class="contact-value">mzxzzsx</span>
        <button class="win95-btn copy-btn" @click="copyText('mzxzzsx')">复制</button>
      </div>
      <div class="contact-item">
        <span class="contact-label">钉钉</span>
        <span class="contact-value">xiyue2631</span>
        <button class="win95-btn copy-btn" @click="copyText('xiyue2631')">复制</button>
      </div>
      <div class="contact-item">
        <span class="contact-label">Telegram</span>
        <span class="contact-value">@_tmyy</span>
        <button class="win95-btn copy-btn" @click="copyText('@fuckfuck_tmyy')">复制</button>
      </div>
    </div>
  </FloatingWindow>
</template>

<style scoped>
.desktop-page {
  width: 100%;
  min-height: 100vh;
  padding: 16px 0 0 200px;
  font-family: 'MS Sans Serif', 'Microsoft Sans Serif', sans-serif;
}

.desktop-icons {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 80px;
}

.desktop-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 6px 4px;
  cursor: var(--cursor-pointer, pointer);
  user-select: none;
  text-align: center;
}

.desktop-icon:hover {
  background: rgba(75, 40, 198, 0.1);
  outline: 1px dashed #4B28C6;
  outline-offset: -1px;
  cursor: var(--cursor-pointer, pointer);
}

.desktop-icon:active {
  background: rgba(75, 40, 198, 0.2);
}

.desktop-icon-img {
  width: 48px;
  height: 48px;
  image-rendering: pixelated;
}

.desktop-icon-label {
  font-size: 12px;
  color: #4B28C6;
  line-height: 1.2;
  word-break: break-all;
}

.mobile-time {
  font-weight: bold;
}

/* 桌面右侧广告位招租 */
.desktop-ad-bar {
  position: fixed;
  right: 200px;
  top: 50%;
  transform: translateY(-50%);
  writing-mode: vertical-lr;
  padding: 16px 8px;
  background: #C0C0C0;
  border: 2px solid;
  border-color: #FFF #808080 #808080 #FFF;
  text-align: center;
  font-family: 'MS Sans Serif', 'Microsoft Sans Serif', sans-serif;
  font-size: 14px;
  color: #4B28C6;
  cursor: var(--cursor-pointer, pointer);
  z-index: 10;
  letter-spacing: 4px;
}

.desktop-ad-bar:hover {
  background: #AAA;
  border-color: #808080 #FFF #FFF #808080;
}

.ad-bar {
  position: fixed;
  bottom: 140px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 24px);
  max-width: 456px;
  padding: 6px 0;
  background: #C0C0C0;
  border: 2px solid;
  border-color: #FFF #808080 #808080 #FFF;
  text-align: center;
  font-family: 'MS Sans Serif', 'Microsoft Sans Serif', sans-serif;
  font-size: 12px;
  color: #4B28C6;
  cursor: var(--cursor-pointer, pointer);
  z-index: 10;
}

.ad-bar:hover {
  background: #AAA;
  border-color: #808080 #FFF #FFF #808080;
}

/* 弹窗内容样式 */
.popup-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  height: 100%;
  font-family: 'MS Sans Serif', 'Microsoft Sans Serif', sans-serif;
}

.popup-text {
  font-size: 14px;
  color: #4B28C6;
  margin-bottom: 16px;
  text-align: center;
}

.popup-buttons {
  display: flex;
  gap: 12px;
}

.win95-btn {
  min-width: 70px;
  padding: 4px 16px;
  background: #C0C0C0;
  border: 2px solid;
  border-color: #FFF #808080 #808080 #FFF;
  font-family: 'MS Sans Serif', 'Microsoft Sans Serif', sans-serif;
  font-size: 12px;
  color: #4B28C6;
  cursor: var(--cursor-pointer, pointer);
  outline: none;
}

.win95-btn:active {
  border-color: #808080 #FFF #FFF #808080;
}

.donate-content {
  padding: 8px;
}

.donate-image {
  width: 100%;
  max-width: 240px;
  height: auto;
  image-rendering: pixelated;
  border: 1px solid #808080;
}

.donate-hint {
  font-size: 12px;
  color: #4B28C6;
  margin-top: 8px;
  text-align: center;
}

/* 联系方式弹窗样式 */
.contact-content {
  padding: 8px;
  gap: 8px;
}

.contact-item {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;
  font-size: clamp(15px, 4.5vw, 22px);
}

.contact-label {
  color: #4B28C6;
  font-weight: bold;
  min-width: 60px;
  flex-shrink: 0;
}

.contact-value {
  color: #000;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.copy-btn {
  min-width: 48px;
  padding: 2px 8px;
  font-size: clamp(11px, 2.8vw, 16px);
  flex-shrink: 0;
}
</style>
