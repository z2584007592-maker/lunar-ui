import type { App } from 'vue'
import { LunarButton } from './components/button'
import { LunarCard } from './components/card'
import { LunarInput } from './components/input'
import './styles/index.css'

const components = [LunarButton, LunarInput, LunarCard]

export { LunarButton, LunarInput, LunarCard }
export * from './components/button'
export * from './components/input'
export * from './components/card'

export default {
  install(app: App) {
    components.forEach((component) => app.component(component.name!, component))
  }
}
