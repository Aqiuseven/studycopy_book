import { defineNotesConfig } from 'vuepress-theme-plume'
import { yolo11 } from './yolo_11'

export default defineNotesConfig({
  dir: 'notes',
  link: '/',
  // 在这里添加 note 配置
  notes: [ 
    yolo11,
  ]
})