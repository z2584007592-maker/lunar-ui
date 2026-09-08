import DefaultTheme from 'vitepress/theme'
import LunarUI from '../../../src'
import '../../../src/styles/index.css'

export default { extends: DefaultTheme, enhanceApp({ app }) { app.use(LunarUI) } }
