import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* 导入 UI 组件库样式 */
import '../lib/xenonui_vue_internetoverdose.css'

/* 导入光标库样式 */
import './assets/cursors.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
