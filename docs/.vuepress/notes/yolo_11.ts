import { defineNoteConfig } from 'vuepress-theme-plume'

export const yolo11 = defineNoteConfig({
  dir: 'yolo_11',
  link: '/yolo_11/',
  sidebar: [
    {
        text: '从这里开始',
        collapsed: false,
        icon: 'carbon:idea',
        prefix: 'start',
        items: 'auto',
      },
  ]
})