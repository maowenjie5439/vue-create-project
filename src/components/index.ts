import SvgIcon from './svg-icon/index.vue'
import type { App, Component } from 'vue'
const components: { [name: string]: Component } = { SvgIcon }
export default {
  //务必要是install方法，否则无法在app.use后调用
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key])
    })
    console.log('app: ', app)
    console.log(Object.keys(components))
    console.log('插件被安装')
  }
}
