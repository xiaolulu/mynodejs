
var siteTitle = '优品开源',
      pageTitle = {
		    '/': '首页',
		    '/index': '首页',
		    '/register': '注册',
		    '/login': '登录',
		    '/user/center': '用户中心',
		    '/user/info': '用户信息',
		    '/user/blog': '用户博客'
	    },
       basePath = 'http://www.mynodejs.com'; 

module.exports = {
	siteTitle: siteTitle,
	pageTitle: pageTitle,
	basePath: basePath, 
	setting: function( req, path, file ){
		return {
			title:       pageTitle[ req.path ] + '-' + siteTitle,
			basePath:    basePath,
			currentPage: ( path || '' ) + ( file || req.path.replace(/(\/[a-z|A-Z]*)?$/,function($1){ ;return $1 + $1}) ),
		}
	}
}
