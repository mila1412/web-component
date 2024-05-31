import { defineCustomElement } from 'vue'
import MyCount from './components/MyCount.ce.vue'

// 綁在 window
// window.customElements.define('my-super-count', defineCustomElement(MyCount))

// export function
const CustomElement = defineCustomElement(MyCount)
export { CustomElement }

export function register() {
  customElements.define('my-count', CustomElement)
}
