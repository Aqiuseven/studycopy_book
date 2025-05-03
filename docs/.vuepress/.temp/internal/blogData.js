export const blogPostData = [{"path":"/en/demo/t6y16i1q/","title":"foo","createTime":"2025/05/03 09:47:06","lang":"en-US","excerpt":""},{"path":"/en/demo/w8rcgn2i/","title":"bar","createTime":"2025/05/03 09:47:06","lang":"en-US","excerpt":""},{"path":"/en/article/bxses6mg/","title":"Markdown","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["markdown"],"createTime":"2025/05/03 09:47:06","lang":"en-US","excerpt":""},{"path":"/en/article/mlnpnzvd/","title":"Custom Component","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["preview","component"],"createTime":"2025/05/03 09:47:06","lang":"en-US","excerpt":""},{"path":"/article/m018a59o/","title":"Markdown","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["markdown"],"createTime":"2025/05/03 09:47:06","lang":"zh-CN","excerpt":""},{"path":"/article/2lunro1o/","title":"自定义组件","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["预览","组件"],"createTime":"2025/05/03 09:47:06","lang":"zh-CN","excerpt":""}]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogPostData) {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ blogPostData }) => {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  })
}
