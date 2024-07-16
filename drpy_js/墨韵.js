var rule = {
模板:'自动',
模板修改: $js.toString(() => {
        muban.自动.二级.desc = '.video-info-items:eq(4)&&Text;.tag-link:eq(2)&&Text;.tag-link:eq(3)&&Text;.video-info-items:eq(1)&&Text;.video-info-items&&Text';
}),
title:'墨韵',
host:'http://106.14.138.181',
url:'/index.php/vod/show/id/fyclass/page/fypage.html',
class_parse: '.nav-menu-items&&li:gt(2):lt(6);a&&Text;a&&href;.*/(.*?).html',
searchUrl:'index.php/vod/search/page/fypage/wd/**.html',
cate_exclude:'体育|纪录片|直播',
搜索: '.module-list .module-search-item;a&&title;img&&data-src;.video-serial&&Text;.video-serial&&href',
}