import { defineConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE || '/lunar-ui-doc/'
const repository = process.env.GITHUB_REPOSITORY || 'your-name/lunar-ui'

export default defineConfig({
  title: 'Lunar UI',
  description: 'Vue 3 component library inspired by Element Plus',
  base,
  themeConfig: {
    nav: [{ text: '指南', link: '/guide/' }, { text: '组件', link: '/components/button' }],
    sidebar: [
      { text: '基础', items: [{ text: '快速开始', link: '/guide/' }] },
      { text: '组件', items: [{ text: 'Button 按钮', link: '/components/button' }, { text: 'Input 输入框', link: '/components/input' }, { text: 'Card 卡片', link: '/components/card' }] }
    ],
    socialLinks: [{ icon: 'github', link: `https://github.com/${repository}` }]
  }
})
