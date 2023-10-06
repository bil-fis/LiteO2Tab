 /*点击弹出按钮*/
    function popBox() {
        var popBox = document.getElementById("popBox");
        var popLayer = document.getElementById("popLayer");
        popBox.style.display = "block";
        popLayer.style.display = "block";
    };
 
    /*点击关闭按钮*/
    function closeBox() {
        var popBox = document.getElementById("popBox");
        var popLayer = document.getElementById("popLayer");
        popBox.style.display = "none";
        popLayer.style.display = "none";
    }

function showset(){
    document.getElementById("setBox").style.display = "block";
    document.getElementById("setLay").style.display = "block";
}

function hideset(){
    document.getElementById("setBox").style.display = "none";
    document.getElementById("setLay").style.display = "none";
}