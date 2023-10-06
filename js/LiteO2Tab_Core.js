function initUserSets() {
    //默認設置
    if (localStorage.LiteO2_prem == 'true') { } else {
        localStorage.LiteO2_hitoko = true;
        localStorage.LiteO2_prem = true;
    }
    if (localStorage.LiteO2_idbg != 'false' && localStorage.LiteO2_idbg != undefined) {
        document.getElementById("nobing").style.backgroundImage = "url(" + localStorage.LiteO2_idbg + ")";
        document.getElementById("indexTab_bginput").value = localStorage.LiteO2_idbg;
    }

    if (localStorage.LiteO2_idse_1) {
        document.getElementById("indexTab_seinput_1").value = localStorage.LiteO2_idse_1;
        document.getElementById("indexTab_seinput_2").value = localStorage.LiteO2_idse_2;
        document.getElementById("search").name = localStorage.LiteO2_idse_2;
        document.getElementById("searchform").action = localStorage.LiteO2_idse_1;
        document.getElementById("searchTargets").style.display = "none";
    }
    if (localStorage.LiteO2_font) {
        document.getElementById("nobing").style.fontFamily = localStorage.LiteO2_font;
        document.getElementById("indexTab_font").value = localStorage.LiteO2_font;
    }
    // if (localStorage.LiteO2_hitoko) {
    //     fetchHitokoto();
    //     document.getElementById("usehitoko").checked = true;
    // }

    if (localStorage.LiteO2_search = "baidu") {
        baidusearch();
    } else if (localStorage.LiteO2_search = "sougou") {
        sogousearch();
    } else if (localStorage.LiteO2_search = "bing") {
        bingsearch();
    } else if (localStorage.LiteO2_search = "360so") {
        sosearch();
    } else if (localStorage.LiteO2_idse_1) {
        //Nothing To Do.
    }
    fetchHitokoto();
    // if (localStorage.LiteO2_showdate == true) {
    //     document.getElementById("showdate").checked = true;
    // }
    // if (localStorage.LiteO2_accuratetosec == true) {
    //     document.getElementById("accurate-to-sec").checked = true
    // }
}

async function fetchHitokoto() {
    const response = await fetch('https://v1.hitokoto.cn')
    const { uuid, hitokoto: hitokotoText } = await response.json()
    const hitokoto = document.querySelector('#hitokoto_text')
    hitokoto.href = `https://hitokoto.cn/?uuid=${uuid}`
    hitokoto.innerText = hitokotoText
}

function saveSets() {
    try {
        if (document.getElementById("indexTab_bginput").value == '') {
            localStorage.LiteO2_idbg = false;
        } else {
            localStorage.LiteO2_idbg = document.getElementById("indexTab_bginput").value;
        }

        localStorage.LiteO2_idse_1 = document.getElementById("indexTab_seinput_1").value;
        localStorage.LiteO2_idse_2 = document.getElementById("indexTab_seinput_2").value;

        //保存字体
        localStorage.LiteO2_font = document.getElementById("indexTab_font").value;
        //保存一言
        // if (document.getElementById("usehitoko").checked) {
        //     localStorage.LiteO2_hitoko = true;
        // } else {
        //     localStorage.LiteO2_hitoko = false;
        // }
        //保存背景图
        // if (document.getElementById("usebitbad").checked) {
        //     localStorage.LiteO2_bitbad = true;
        // } else {
        //     localStorage.LiteO2_bitbad = false;
        // }
        // if (document.getElementById("useimlazy").checked) {
        //     localStorage.LiteO2_imlazy = true;
        // } else {
        //     localStorage.LiteO2_imlazy = false;
        // }

        // if (document.getElementById("accurate-to-sec").checked == true) {
        //     localStorage.LiteO2_accuratetosec = true;
        // } else {
        //     localStorage.LiteO2_accuratetosec = false;
        // }

        // if (document.getElementById("showdate").checked == true) {
        //     localStorage.LiteO2_showdate = true;
        // } else {
        //     localStorage.LiteO2_showdate = false;
        // }
        layer.msg("保存成功！", { icon: 1 });
        window.location.reload();
    } catch (e) {
        layer.msg("保存失败！(" + e + ")", { icon: 5 });
    }
}
