function baidusearch() {
    document.getElementById('searchform').action = 'https://www.baidu.com/s'
    document.getElementById('search').name = "wd"
    document.getElementById('baidu').innerHTML = '<center id="baiduIconselect" class="youyuantext"><a tabindex="1" href="javascript:baidusearch()">百度</a></center>';
    localStorage.LiteO2_search = "baidu"
    document.getElementById('sogou').innerHTML = '<span id="sogou"><center id="sogouIcon" class="youyuantext"><a tabindex="3" href="javascript:sogousearch()">搜狗</a></center></span>';
    document.getElementById('bing').innerHTML = '<center id="bingIcon" class="youyuantext"><a tabindex="2" href="javascript:bingsearch()">必应</a></center>';
    document.getElementById('so').innerHTML = '<center id="soIcon"><a href="javascript:sosearch();" tabindex="4" class="youyuantext">360搜索</center>';
}

function sogousearch() {
    document.getElementById('searchform').action = 'https://www.sogou.com/web'
    document.getElementById('search').name = "query"
    document.getElementById('sogou').innerHTML = '<span id="sogou"><center id="sogouIconselect" class="youyuantext"><a tabindex="3" href="javascript:sogousearch()">搜狗</a></center></span>';
    localStorage.LiteO2_search = "sougou"
    document.getElementById('baidu').innerHTML = '<center id="baiduIcon" class="youyuantext"><a tabindex="1" href="javascript:baidusearch()">百度</a></center>';
    document.getElementById('bing').innerHTML = '<center id="bingIcon" class="youyuantext"><a tabindex="2" href="javascript:bingsearch()">必应</a></center>';
    document.getElementById('so').innerHTML = '<center id="soIcon"><a href="javascript:sosearch();" tabindex="4" class="youyuantext">360搜索</center>';
}

function bingsearch() {
    document.getElementById('searchform').action = 'https://www.bing.com/search'
    document.getElementById('search').name = "q"
    document.getElementById('bing').innerHTML = '<center id="bingIconselect" class="youyuantext"><a tabindex="2" href="javascript:bingsearch()">必应</a></center>';
    localStorage.LiteO2_search = "bing"
    document.getElementById('baidu').innerHTML = '<center id="baiduIcon" class="youyuantext"><a tabindex="1" href="javascript:baidusearch()">百度</a></center>';
    document.getElementById('sogou').innerHTML = '<span id="sogou"><center id="sogouIcon" class="youyuantext"><a tabindex="3" href="javascript:sogousearch()">搜狗</a></center></span>';
    document.getElementById('so').innerHTML = '<center id="soIcon"><a href="javascript:sosearch();" tabindex="4" class="youyuantext">360搜索</center>';
}

function sosearch() {
    document.getElementById('searchform').action = 'https://www.so.com/s'
    document.getElementById('search').name = "q"
    document.getElementById('so').innerHTML = '<center id="soIconselect" class="youyuantext">360搜索</center>';
    localStorage.LiteO2_search = "360so"
    document.getElementById('baidu').innerHTML = '<center id="baiduIcon" class="youyuantext"><a tabindex="1" href="javascript:baidusearch()">百度</a></center>';
    document.getElementById('sogou').innerHTML = '<span id="sogou"><center id="sogouIcon" class="youyuantext"><a tabindex="3" href="javascript:sogousearch()">搜狗</a></center></span>';
    document.getElementById('bing').innerHTML = '<center id="bingIcon" class="youyuantext"><a tabindex="2" href="javascript:bingsearch()">必应</a></center>';
}