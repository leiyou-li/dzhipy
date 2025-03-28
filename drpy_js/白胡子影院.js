var rule = {
  title: '白胡子影院',
  host: 'http://www.ardvd.com',
  url: '/lanmu/fyclass_fypage.html',
  searchUrl: '/search.php#searchword=**;post',
  cate_exclude:'伦理',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'UC_UA',
  },
  class_parse: '.stui-header__menu li:gt(0):lt(7);a&&Text;a&&href;/(\\d+).html',
  play_parse: true,
  lazy: '',
  limit: 6,
  推荐: 'ul.stui-vodlist.clearfix;li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
  double: true,
  一级: '.stui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
  二级: {
    title: 'h1&&Text;.stui-content__detail a&&Text',
    img: '.stui-content__thumb .lazyload&&data-original',
    desc: '.pic-text&&Text;.stui-content__detail p&&Text;.stui-content__detail p:eq(1)&&Text;.stui-content__detail p:eq(1)&&Text;.stui-content__detail p:eq(2)&&Text',
    content: '.detail&&Text',
    tabs: '.nav-tabs li',
    lists: '.stui-content__playlist:eq(#id) li',
  },
  搜索: 'ul.stui-vodlist__media:eq(0),ul.stui-vodlist:eq(0),#searchList li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
}