import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  // { text: '首页', link: '/' },
  // { text: '博客', link: '/blog/' },
  // { text: '标签', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },
  // {
  //   text: '笔记',
  //   items: [{ text: '示例', link: '/notes/demo/README.md' }]
  // },

  { text: '首页', link: '/', icon: 'material-symbols:home-outline' },
  {
    text: '指南',
    icon: 'icon-park-outline:guide-board',
    link: '/notes/yolo_11/start/1.基本环境.md',
    activeMatch: '^/yolo_11/',
  },
  { text: '博客', link: '/blog/', icon: 'material-symbols:article-outline' },
  // {
  //   text: '技术文档',
  //   icon: 'mdi:idea',
  //   items: [
  //     {
  //       text: 'Vuepress Plugin',
  //       icon: 'mingcute:plugin-2-fill',
  //       badge: { text: '徽章', type: 'warning' },
  //       items: [
  //         {
  //           text: 'caniuse',
  //           link: '/vuepress-plugin/caniuse/',
  //           icon: 'pajamas:feature-flag',
  //         },
  //       ],
  //     },
  //   ],
  // },
])