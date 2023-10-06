/*站点临时关闭*/
function closefew() {
    var popBox = document.getElementById("closefewbox");
    var popLayer = document.getElementById("closefew");
    popBox.style.display = "block";
    popLayer.style.display = "block";
}

function closeall() {
    document.getElementById('closeallbox').innerHTML = "<h1>永远的离开</h1><br /><span>本站已于 {开始时间} 完全关停。重新上线时间 {结束时间}，请注意关注本站</span>";
    var popBox = document.getElementById("closeallbox");
    var popLayer = document.getElementById("closeall");
    popBox.style.display = "block";
    popLayer.style.display = "block";
}

function autoCopyrightYear() {
    var date = new Date();
    var thisyear = date.getFullYear();
    document.getElementById("copyri").innerHTML = '&copy; 2020-' + thisyear + ' <a class="nobr" target="_blank" href="https://space.bilibili.com/586310538">bil_fis</a> | 仅作参考学习使用，禁止用于任何商业活动 |&nbsp;&nbsp;<a href="javascript:popBox()">关于</a>';
}

function random_bg() {
    var picarr = ['https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/4737484/pexels-photo-4737484.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/2480072/pexels-photo-2480072.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/334978/pexels-photo-334978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'http://5b0988e595225.cdn.sohucs.com/images/20180709/a5e53f5550ec45ccb1feb9155e7f5354.jpeg', 'https://cdn.pixabay.com/photo/2020/04/07/17/01/birds-5014150_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/07/06/06/57/field-5375784_960_720.jpg', 'https://cdn.pixabay.com/photo/2022/02/12/19/58/cat-7009836_960_720.jpg'];
    var numpic = Math.floor(Math.random() * 10);
    document.getElementById("nobing").style.backgroundImage = "url(https://uploadstatic.mihoyo.com/ys-obc/2022/12/14/4359827/4c6540a604b4522b240e3a448721e8a1_5688197791216689312.jpg)";
}

function closefewBox() {
    var popBox = document.getElementById("closefewbox");
    var popLayer = document.getElementById("closefew");
    popBox.style.display = "none";
    popLayer.style.display = "none";
}

function closeallBox() {
    var popBox = document.getElementById("closeallbox");
    var popLayer = document.getElementById("closeall");
    popBox.style.display = "none";
    popLayer.style.display = "none";
}

// var setAutoBgApiOnlyOneCanCheck_count = 0;

// var setAutoBgApiOnlyOneCanCheck = setInterval(function () {
//     if (document.getElementById("usebitbad").checked && setAutoBgApiOnlyOneCanCheck_count == 0) {
//         document.getElementById("useimlazy").checked = false;
//         setAutoBgApiOnlyOneCanCheck_count = 1;
//     }
//     if (document.getElementById("useimlazy").checked && setAutoBgApiOnlyOneCanCheck_count == 1) {
//         document.getElementById("usebitbad").checked = false;
//         setAutoBgApiOnlyOneCanCheck_count = 0;
//     }
// })


//上面的屎山代码我实在看不下去了 TaT

window.onload = function () {
    document.getElementById("nobing").style.backgroundImage ="url('https://api.imlazy.ink/img')";
    document.getElementById("nobing").style.overflow = "hidden";
    var new_date = new Date(); //新建一个日期对象，默认现在的时间
    var old_date = new Date("2021-8-6 09:30:00"); //设置过去的一个时间点，"yyyy-MM-dd HH:mm:ss"格式化日期
    var difftime = (new_date - old_date) / 1000; //计算时间差,并把毫秒转换成秒
    var days = parseInt(difftime / 86400); // 天  24*60*60*1000 
    var hours = parseInt(difftime / 3600) - 24 * days;    // 小时 60*60 总小时数-过去的小时数=现在的小时数 
    var minutes = parseInt(difftime % 3600 / 60); // 分钟 -(day*24) 以60秒为一整份 取余 剩下秒数 秒数/60 就是分钟数
    var seconds = parseInt(difftime % 60);  // 以60秒为一整份 取余 剩下秒数
    var nowyear = new_date.getFullYear();


    console.log("%c" + "LiteO2      Version 3.2 \n本站从本地优化制作至今共：" + days + "天 " + hours + "小时 \n © 2020-" + nowyear + " bil_fis 仅作参考学习使用，禁止用于任何商业活动", "color: rgb(0,187,255);");
    startTime();
    autoCopyrightYear();
    // random_bg();
    // random_bg();
    /*setInterval(function() {
        if (window.outerWidth - window.innerWidth > threshold || 
        window.outerHeight - window.innerHeight > threshold) {
            // 如果打开控制台，则刷新页面
            window.location.reload();
        }
    }, 1e3);*/

    document.getElementById("jinripoem").style.display = "none";
    // document.getElementById("indexTab_btn").onclick = showset();
    initUserSets();
}