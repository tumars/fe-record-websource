const NAV_DATA = [
	{
		title: '博客',
		list:[
			{name: 'CSS-Tricks', url: 'https://css-tricks.com/', intro: '大名鼎鼎，更新量很大，每日必看'},
			{name: 'codrops', url: 'http://tympanus.net/codrops/', intro: '设计的很漂亮的高质量前端博客'},
			{name: 'smashingmagazine', url: 'https://www.smashingmagazine.com/', intro: '涉及到很多设计内容的前端博客'},
			{name: '腾讯 AlloyTeam', url: 'http://www.alloyteam.com/', intro: '腾讯前端团队'},
			{name: '百度 FEX', url: 'http://fex.baidu.com/', intro: '百度前端团队'},
			{name: '淘宝 FED', url: 'http://taobaofed.org/', intro: '淘宝前端团队'},
			{name: '奇舞团', url: 'http://www.75team.com/', intro: '360 前端团队'},
			{name: '前端乱炖', url: 'http://www.html-js.com/', intro: '前端社区太多，乱炖还算做的不错的'},
			{name: '前端外刊评论', url: 'https://zhuanlan.zhihu.com/FrontendMagazine', intro: '知乎作为一个初期几乎全是程序员的网站，也是有相当多的前端开发'},
			{name: 'WEB前端开发', url: 'http://www.css88.com/', intro: '很多人都知道的 css88，收集了很多类库的中文文档'},
			{name: 'W3Cplus', url: 'http://www.w3cplus.com/', intro: '大漠(《图解 CSS3》作者，影响力杠杠的 Sass 专家级'},
			{name: '阮一峰', url: 'http://www.ruanyifeng.com/blog/', intro: '其文章简洁易懂深入浅出，关注多年，著作[《ECMAScript 6标准入门》'},
			{name: '张鑫旭', url: 'http://www.zhangxinxu.com/wordpress/', intro: '成名多年的、高产的前端大湿'},
			{name: '聂微东', url: 'http://www.fefork.com/', intro: '文章更新不多，但都是精品'},
			{name: '轩枫阁', url: 'http://www.xuanfengge.com/', intro: '设计跟内容做的很好的博客'},
			{name: '前端记录', url: 'http://www.ferecord.com/', intro: '本页前端导航作者的博客'}
		]
	},
	{
		title: 'JavaScript',
		list: [
			{name: 'React', url: 'http://reactjs.org/', intro: 'facebook 出品的前端框架'},
			{name: 'Angular', url: 'https://angularjs.org/.org/', intro: 'Google 出品的前端框架'},
			{name: 'Vue', url: 'https://vuejs.org.cn/', intro: '使用虚拟 dom 的前端框架，简单好用，比 react 体积小很多'},
			{name: 'Lodash', url: 'http://lodashjs.com/', intro: '具有一致接口、模块化、高性能等特性的JavaScript 工具库'},
			{name: 'SUI', url: 'http://m.sui.taobao.org/', intro: '阿里出品的轻量精巧的H5 UI 库，包含20多个常用组件'},
			{name: 'ANT DESIGN', url: 'http://ant.design/', intro: '蚂蚁金服出品的前端框架，组件全是 React 组件，相当赞'},
			{name: 'Amaze UI', url: 'http://amazeui.org/', intro: '有名的开源 HTML5 跨屏前端框架'},
			{name: 'Threejs', url: 'http://threejs.org/', intro: '知名的js 3D库，封装了底层的WebGL图形接口，提供简化、高效的三维图形程序开发'},
			{name: 'create.js', url: 'http://createjs.cc/', intro: '强大且轻量的动画游戏框架，包括 easeljs、preloadjs、tweenjs、soundjs'},
			{name: 'GSAP', url: 'http://greensock.com/', intro: '强劲流畅的动效库，官方宣称比 jquery 动画快 20 倍'},
			{name: 'parallax', url: 'http://matthew.wagerfield.com/parallax/', intro: '一个视差效果引擎，效果不错'},
			{name: 'textillate.js', url: 'http://textillate.js.org/', intro: '文字动画效果的库'},
			{name: 'ECharts', url: 'http://echarts.baidu.com/', intro: '百度出品的图表、可视化库，简单好用功能强大'},
			{name: 'Heightcharts', url: 'http:/www.hcharts.cn/', intro: '强大的图表库，echart 的前辈'},			
			{name: 'AlloyFinger', url: 'https://github.com/AlloyTeam/AlloyFinger', intro: '腾讯出品的移动端手势操作库，含无依赖版跟 react '},
			{name: 'hammer.js', url: 'http://hammerjs.github.io/', intro: '移动端手势库'},
			{name: 'Touch.js', url: 'http://touch.code.baidu.com/', intro: '移动端手势库 '},
			{name: 'Swipper', url: 'http://www.swiper.com.cn/', intro: '开源、免费、强大的移动端触摸滑动插件，微信里的多数滑动类的 H5 都是用这个 '},
			{name: 'FullPage', url: 'http://alvarotrigo.com/fullPage/#firstPage', intro: '另一款强大的滑动插件'},
			{name: 'PhotoSwipe', url: 'http://photoswipe.com/', intro: '另一款强大的滑动插件'},
			{name: 'Pace', url: 'http://github.hubspot.com/pace/docs/welcome/', intro: '加载进度条的插件，通过请求量判断页面加载进度，可以自定义进度条样式'},
			{name: 'watch.js', url: 'https://github.com/melanke/Watch.JS/', intro: '监控对象属性变化的小库，“每当对象属性改变的时候，执行你的函数”'},
			{name: 'artTemplate', url: 'http://aui.github.io/artTemplate/', intro: '超快的前端模板引擎，而且支持预编译'},
			{name: 'CountUp.js', url: 'https://inorganik.github.io/countUp.js/', intro: '让数字由大到小或小到大递进变化'},
			{name: 'RandomColor', url: 'https://randomcolor.llllll.li/', intro: '可以随机各种颜色的 js，很有意思'},
			{name: 'smoothscroll', url: 'https://github.com/iamdustan/smoothscroll', intro: '使网页平滑滚动到指定位置，小巧，无任何依赖'}
		]
	},
	{
		title: 'CSS',
		list: [
			{name: 'PostCSS', url: 'https://github.com/postcss/postcss', intro: '大名鼎鼎的 css 处理器，有 200 多个 css 处理插件'},
			{name: 'CSS Modules', url: 'https://css-tricks.com/css-modules-part-1-need/', intro: 'css 模块化，前端组件模块化的最后一道坎'},
			{name: 'Less', url: 'http://lesscss.org/', intro: 'css 预处理器，入门简单，功能强大'},
			{name: 'Sass', url: 'http://sass-lang.com/', intro: 'css 预处理器，比 less 更强大'},
			{name: 'Autoprefixer', url: 'https://github.com/postcss/autoprefixer', intro: '自动生成 css 的浏览器前缀'},
			{name: 'cssnano', url: 'http://cssnano.co/', intro: '样式级别的 css 压缩工具'},
			{name: 'postcss-sprites', url: 'https://github.com/2createStudio/postcss-sprites', intro: '雪碧图生成工具，可生成各种类雪碧图'},
			{name: 'stylelint', url: 'https://github.com/stylelint/stylelint', intro: 'css 检测纠错工具'},
			{name: 'anicollection', url: 'http://anicollection.github.io/#/', intro: 'CSS3 动画库，收集了常用的 CSS3 进入、退出、闪动等动画'},
			{name: 'CSS3 loading', url: 'http://www.yunrui.co/26261.html', intro: '文章收集了很多 css loading 动画'},
			{name: 'css & svg loading', url: 'https://codegeekz.com/best-css-svg-loaders-and-spinners/', intro: '也很全面 css & svg 动画'},
			{name: 'css3-icons', url: 'http://www.uiplayground.in/css3-icons/', intro: '使用 css3 做的各种小图标'},
			{name: 'css3gen', url: 'http://css3gen.com/', intro: 'css3 工具，调整一些细致的 css3 动画、3D效果、滤镜、阴影时可以使用这个'},
			{name: '字蛛 font-spider', url: 'http://font-spider.org/', intro: '腾讯出品的中文字体压缩器，把需要的文字从字体文件里挑出来，大幅压缩字体文件'},
			{name: 'bootstrap', url: 'http://www.bootcss.com/)', intro: 'twitter 出品的前端 UI 框架'},
			{name: 'Material-UI', url: 'http://www.material-ui.com/', intro: 'Google Material 风格的前端 UI 框架'}
		]
	},
	{
		title: '构建工具',
		list: [
			{name: 'Gulp', url: 'http://www.gulpjs.com.cn/', intro: '强大的前端自动化构建工具'},
			{name: 'WebPack', url: 'http://tympanus.net/codrops/', intro: '强大的打包构建工具'},
			{name: 'Yeoman', url: 'http://yeoman.io/', intro: '强大的前端综合构建工具，包含了 npm、gulp 及一些常用插件'},
			{name: 'FIS', url: 'http://fex-team.github.io/fis3/', intro: '百度出品的前端工程构建工具，本土出品，更易使用'},
			{name: 'weflow', url: 'https://weflow.io/', intro: '腾讯出品的高效、强大、跨平台的前端开发工作流工具'},
			{name: 'AlloyLever', url: 'https://github.com/AlloyTeam/AlloyLever', intro: '腾讯出品的移动端调试工具'}
		]
	},
	{
		title: '语言',
		list: [
			{name: 'Node.js', url: 'https://nodejs.org/en/', intro: '一个开放源代码、跨平台的、可用于伺服器端和网络应用的运行环境'},
			{name: 'Python', url: 'http://tympanus.net/codrops/', intro: '一种面向对象的，直译式的电脑语言'},
			{name: 'Ruby', url: 'https://www.ruby-lang.org/zh_cn/', intro: '一门开源的动态编程语言，注重简洁和效率。Ruby 的句法优雅，读起来自然，写起来舒适。'},
			{name: 'Git', url: 'http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000', intro: '分布式版本控制软件， github 是全球最大同性交友平台'},
			{name: 'markdown', url: 'http://www.appinn.com/markdown/', intro: '非常流行的标记语言'}
		]
	},
	{
		title: 'React',
		list: [
			{name: 'Redux', url: 'http://redux.js.org/', intro: '跟 react 配合的最好的状态容器，解决了 react 的 props 不能跨 components 传递的问题'},
			{name: 'React-Native', url: 'https://github.com/ele828/react-native-guide', intro: '新玩意层出不穷... 对于能持续学习的童鞋，这是个美好的时代'},
			{name: 'React 编程规范', url: 'https://github.com/dwqs/react-style-guide', intro: 'React 编程的各种基本规则'},
			{name: 'react-boilerplate', url: 'https://github.com/mxstbr/react-boilerplate', intro: '非常全面的 react 项目构建模板'}

		]
	},
	{
		title: 'Sublime',
		list: [
			{name: 'Sublime Text 详解', url: 'https://nodejs.org/en/', intro: '我自己的博客文章，当时总结的很详细'},
			{name: 'package control', url: 'https://packagecontrol.io/', intro: 'sublime 的插件网站，所有的插件、主题等都在上面了'},
			{name: 'emmet 快捷键文档', url: 'http://docs.emmet.io/cheat-sheet/', intro: 'emmet 的快捷键文档，极大提升敲代码速度'},
			{name: 'Sublime搭 React 环境', url: 'https://segmentfault.com/a/1190000003698071', intro: '开发 react 项目时必装的几个ST插件'}
		]
	},
	{
		title: 'GitHub',
		list: [
			{name: ' Git 教程-廖雪峰', url: 'http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000', intro: '全面易懂的Git教程'},
			{name: ' Git 学习资料整理', url: 'https://github.com/xirong/my-git', intro: '内容包括很多 Git 的相关资料，star 1200+'},
			{name: ' Travis CI', url: 'https://travis-ci.org/', intro: '主流的持续集成工具'},
			{name: ' Circle CI', url: 'https://circleci.com/', intro: '另一款主流的持续集成工具'},
			{name: ' Coveralls', url: 'http://coveralls.io/', intro: '它可以帮你生成一个展示代码覆盖率的徽章'},
			{name: ' SauceLabs', url: 'https://saucelabs.com/', intro: '跨浏览器集成测试 ,提供了多重浏览器环境，帮助你在多个浏览器中自动运行脚本'}
		]
	},
	{
		title: '佳软推荐',
		list: [
			{name: 'Evernote', url: 'https://www.yinxiang.com/?returning', intro: '配合 chrome 浏览器的 剪藏 插件，把网上看到的文章分类收藏'},
			{name: 'Ditto', url: 'https://xbeta.info/ditto.htm', intro: ' Ditto 是最好的免费剪贴板增强软件，是提高效率的首选方案！！'},
			{name: 'Total Commander', url: 'https://xbeta.info/studytc/', intro: '善用佳软唯一大力推广的非免费软件 (第二力推广的软件是 Vim)，个人认为是最好用的资源管理软件'},
			{name: 'Listary', url: 'https://xbeta.info/listary4.htm', intro: '极优秀的工具！让Windows的静态列表，变作了动态交互,让原始的视觉定位，变成了即输即搜的实时过滤。'},
			{name: 'XMind', url: 'https://xbeta.info/xmind.htm', intro: ' 顶级商业品质的思维导图（mindmap）和头脑风暴（brainstorm）软件'},
			{name: 'IrfanView', url: 'https://xbeta.info/irfanview-v441.htm', intro: '顶级免费看图软件，功能跟速度上完爆其他同类软件'}
		]
	},
	{
		title: '杂七杂八',
		list: [
			{name: 'A collection of HTML head elements', url: 'https://github.com/joshbuchea/HEAD', intro: '详细介绍了HEAD中的各元素'}
		]
	}
]


export default NAV_DATA;
