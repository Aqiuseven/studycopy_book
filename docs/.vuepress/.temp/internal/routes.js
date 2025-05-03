export const redirects = JSON.parse("{\"/preview/markdown.html\":\"/article/m018a59o/\",\"/en/preview/markdown.html\":\"/en/article/bxses6mg/\",\"/notes/demo/foo.html\":\"/demo/9gl80t3v/\",\"/notes/demo/\":\"/demo/\",\"/en/notes/demo/foo.html\":\"/en/demo/t6y16i1q/\",\"/en/notes/demo/\":\"/en/demo/\"}")

export const routes = Object.fromEntries([
  ["/article/m018a59o/", { loader: () => import(/* webpackChunkName: "article_m018a59o_index.html" */"F:/mybook/my-project/docs/.vuepress/.temp/pages/article/m018a59o/index.html.js"), meta: {"title":"Markdown"} }],
  ["/en/article/bxses6mg/", { loader: () => import(/* webpackChunkName: "en_article_bxses6mg_index.html" */"F:/mybook/my-project/docs/.vuepress/.temp/pages/en/article/bxses6mg/index.html.js"), meta: {"title":"Markdown"} }],
  ["/demo/9gl80t3v/", { loader: () => import(/* webpackChunkName: "demo_9gl80t3v_index.html" */"F:/mybook/my-project/docs/.vuepress/.temp/pages/demo/9gl80t3v/index.html.js"), meta: {"title":"foo"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"F:/mybook/my-project/docs/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/en/demo/t6y16i1q/", { loader: () => import(/* webpackChunkName: "en_demo_t6y16i1q_index.html" */"F:/mybook/my-project/docs/.vuepress/.temp/pages/en/demo/t6y16i1q/index.html.js"), meta: {"title":"foo"} }],
  ["/en/demo/", { loader: () => import(/* webpackChunkName: "en_demo_index.html" */"F:/mybook/my-project/docs/.vuepress/.temp/pages/en/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/mybook/my-project/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"F:/mybook/my-project/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"F:/mybook/my-project/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"F:/mybook/my-project/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"F:/mybook/my-project/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
  ["/en/blog/", { loader: () => import(/* webpackChunkName: "en_blog_index.html" */"F:/mybook/my-project/docs/.vuepress/.temp/pages/en/blog/index.html.js"), meta: {"title":"Blog"} }],
  ["/en/blog/tags/", { loader: () => import(/* webpackChunkName: "en_blog_tags_index.html" */"F:/mybook/my-project/docs/.vuepress/.temp/pages/en/blog/tags/index.html.js"), meta: {"title":"Tags"} }],
  ["/en/blog/archives/", { loader: () => import(/* webpackChunkName: "en_blog_archives_index.html" */"F:/mybook/my-project/docs/.vuepress/.temp/pages/en/blog/archives/index.html.js"), meta: {"title":"Archives"} }],
  ["/en/blog/categories/", { loader: () => import(/* webpackChunkName: "en_blog_categories_index.html" */"F:/mybook/my-project/docs/.vuepress/.temp/pages/en/blog/categories/index.html.js"), meta: {"title":"Categories"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}

  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
