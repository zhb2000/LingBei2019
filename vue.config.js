module.exports = {
  publicPath: './',
  pages: {
    worklist: {
      // page 的入口
      entry: 'src/views/worklist/main.js',
      // 模板来源
      template: 'src/views/worklist/index.html',
      // 在 dist/index.html 的输出
      filename: 'worklist.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <%= htmlWebpackPlugin.options.title %>
      title: '国漫作品列表',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'worklist']
    },
    paintingboard: {
      entry: 'src/views/paintingboard/main.js',
      template: 'src/views/paintingboard/index.html',
      filename: 'paintingboard.html',
      title: '画板-试一试！',
      chunks: ['chunk-vendors', 'chunk-common', 'paintingboard']
    },
    square: {
      entry: 'src/views/square/main.js',
      template: 'src/views/paintingboard/index.html',
      filename: 'square.html',
      title: '广场',
      chunks: ['chunk-vendors', 'chunk-common', 'square']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    subpage: 'src/subpage/main.js'
  }
}