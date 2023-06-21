import { router } from '@/router'
import { createApp } from 'vue'
import InlineSvg from 'vue-inline-svg'
import App from '@/App.vue'

const app = createApp(App)
app.use(router)
app.component('InlineSvg', InlineSvg)
app.mount('#app')
