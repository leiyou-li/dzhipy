var rule = {
  title: '策驰影院',
  host: 'https://www.cecidy.cc',
  url: 'vodtype/fyclass-fypage/',
  searchUrl: 'vodsearch/**----------fypage---/',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  class_parse: '.nav-list&&li;a&&Text;a&&href;/vodtype/(.*?)/',
  play_parse: true,
  lazy: '',
  limit: 6,
  推荐: 'ul.myui-vodlist.clearfix;li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
  double: true,
  一级: '.myui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
  二级: {
    title: '.myui-content__detail .title&&Text;.myui-content__detail p:eq(-2)&&Text',
    img: '.myui-content__thumb .lazyload&&data-original',
    desc: '.myui-content__detail p:eq(0)&&Text;.myui-content__detail p:eq(1)&&Text;.myui-content__detail p:eq(2)&&Text',
    content: '.content&&Text',
    tabs: '.nav-tabs:eq(0) li',
    lists: '.myui-content__list:eq(#id) li',
  },
  搜索: '#searchList li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
}