module.exports = {
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    nav: [
      {
        text: 'HTML/CSS',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'html', link: '/html' },
          { text: 'css', link: '/css' }
        ]
      },
      { text: 'JavaScript', link: 'JavaScript' }
    ],
    
  },
}
