function startTime(){
    var today=new Date();
    var years=today.getFullYear();
    var months=today.getMonth();
    var d=today.getDate();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    // add a zero in front of numbers<10
    months=months+1;
    months=checkTime(months);
    d=checkTime(d);
    m=checkTime(m);
    s=checkTime(s);
    var weekday=new Array(7);
    weekday[0]="星期日";
    weekday[1]="星期一";
    weekday[2]="星期二";
    weekday[3]="星期三";
    weekday[4]="星期四";
    weekday[5]="星期五";
    weekday[6]="星期六";
    var w=weekday[today.getDay()];
    if(localStorage.LiteO2_accuratetosec == true){
        document.getElementById('clock').innerHTML='<center><h2 style="color: white;font-size: 40px;cursor:arrow;" onselectstart="return false; ">'+h+":"+m+":"+s+"</h2><center>";
    }else{
        document.getElementById('clock').innerHTML='<center><h2 style="color: white;font-size: 200px;cursor:arrow;" onselectstart="return false; ">'+h+":"+m+"</h2><center>";
    }
    if(localStorage.LiteO2_showdate==true){
        document.getElementById('date').innerHTML=years+months+d+w;
    }
    t=setTimeout('startTime()',500)
    }
    function checkTime(i){
        if (i<10){
            i="0" + i
        }
    return i
}