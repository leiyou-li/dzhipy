var rule = {
author: '黑可乐',
title: '火车36',
类型: '影视',
host: 'https://6m8.36huo165che.xyz',
hostJs: '',
headers: {'User-Agent': 'MOBILE_UA'},
编码: 'utf-8',
timeout: 5000,

homeUrl: '/topic',
url: '/vodtype/fyclass-fypage.html',
filter_url: '',
detailUrl: '',
searchUrl: '/vodsearch/**----------fypage---.html',
searchable: 1, 
quickSearch: 1, 
filterable: 1, 

class_parse: '.nav&&a;a&&Text;a&&href;vodtype/(\\d+)',
cate_exclude: '糖心Vlog',
filter_def: {},

tab_rename: {'道长在线': '在线播放'},
play_parse: true,
parse_url: '',
lazy: `js:
var kcode = JSON.parse(request(input).match(/var player_.*?=(.*?)</)[1]);
var kurl = kcode.url;
if (/m3u8|mp4/.test(kurl)) {
input = { jx: 0, parse: 0, url: kurl }
} else {
input = { jx: 0, parse: 1, url: kurl }
}`,

limit: 9,
double: false,
推荐: '*',
一级: '.vod;.vod-txt&&Text;img&&data-original;;a:eq(0)&&href',
二级访问前: `js:
if (/voddetail/.test(MY_URL)) {
MY_URL = MY_URL.replace('voddetail', 'vodplay').replace('.html', '-1-1.html')
}`,
二级: '*',
搜索: '*',

filter: {}
}