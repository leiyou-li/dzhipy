var rule = {
    title: 'Pornhub',
    host: 'https://www.17caan.com:8888',
    url: '/category/1.html?category_id=fyclass&page=fypage',
    searchUrl: '/search/1.html?keyword=**&page=fypage',
    searchable: 1,
    quickSearch: 0,
    filterable: 0,
    headers: {
        'User-Agent': 'Mozilla/5.0',
    },
    lazy:$js.toString(() => {
        var html = request(input).match(/https?:\/\/\S+\.m3u8/)[0]
        var url = html;
        input = {parse: 0, url: unescape(url), js: ''};
    }),
    图片来源: $()
        .image(() => {
        const CryptoUtil = $.require("hiker://assets/crypto-java.js");
        let decode = function(data) {
            let key = 0x88;
            let binary = '';
            let bytes = data;
            let len = bytes.byteLength;
            for (let i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i] ^ key);
            }
            let src = window0.btoa(binary);
            return src;
        }
        let textData = CryptoUtil.Data.parseInputStream(input)
            .toUint8Array();
        let base64Text = decode(textData);
        let encrypted0 = CryptoUtil.Data.parseBase64(base64Text, _base64.NO_WRAP);
        return encrypted0.toInputStream();
    }),
    class_parse: $js.toString(() => {
        let cl = {
            title: '首 页&原创&AI换脸&主播&国产主播&韩国主播&AV解说',
            id: '0&40&6&7&7＆＆category_child_id=37&7＆＆category_child_id=36&8'
        }
        //log(lis);
        let navs = [];
        let names = cl.title.split("&");
        let ids = cl.id.split("&")
            .map(v => v.replace("＆＆", "&"));
        names.forEach((it, i) => {
            navs.push({
                type_id: ids[i],
                type_name: it,
            })
        });
        input = navs;

    }),
    play_parse: true,
    limit: 6,
    //double: true,
    一级: 'div[class$=item-vide-n];.rank-title&&Text;img&&data-src;.pre-eye&&Text;a&&href',
    二级: "*",
    
    搜索: '.ran-box>div:has(.rank-a);.rank-title&&Text;img&&data-src;;a&&href',
}