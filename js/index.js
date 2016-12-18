window.onload=function () {

var cd=document.querySelector("#cd");
cd.cd=setInterval(function () {
    var date=new Date();
    var a=date.getFullYear();
    var b=date.getMonth();
    var c=date.getDate();
    var d=date.getDay();
    var e=date.getHours();
    var f=date.getMinutes();
    var g=date.getSeconds();
    cd.innerHTML=a+'-'+b+'-'+c+'&nbsp;&nbsp;'+e+':'+f+':'+g+'&nbsp;&nbsp;星期'+d;
},1000);
function city(cx) {
    var cit=cx;
    var key='bf87e1c8832846b9bb5c35ae3fc49cc3';
    var ca=document.querySelector("#exampleInputEmail1");
    var cb=document.querySelector("#cb");
    var cc=document.querySelector("#cc");
    var ce=document.querySelector("#ce");
    var im=document.querySelector("#img");

    var xmlHttp = false;
    try {
        xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e2) {
            xmlHttp = false;
        }
    }
    if(!xmlHttp && typeof XMLHttpRequest != 'undefined'){
        xmlHttp = new XMLHttpRequest();
    }
    var url='https://free-api.heweather.com/v5/weather?city='+cit+'&key='+key;
    console.log(url);
    xmlHttp.open("GET", url, true);
    xmlHttp.onreadystatechange=function () {
        if (xmlHttp.readyState == 4) {
            var response = JSON.parse(xmlHttp.responseText);
            console.log(response);
            var jt = response.HeWeather5[0];
            if(jt.status=='ok'){
                ca.innerHTML=jt.basic.city;
                cb.innerHTML=jt.daily_forecast[0].cond.txt_d;
                cc.innerHTML=jt.daily_forecast[0].wind.dir;
                ce.innerHTML=jt.daily_forecast[0].tmp.min+" ~ "+jt.daily_forecast[0].tmp.max+"℃";
                im.src='http://files.heweather.com/cond_icon/'+jt.daily_forecast[0].cond.code_d+'.png';

            }
        }
    }
    xmlHttp.send(null);

}
city('上海');
if(window.addEventListener){
    document.querySelector("#exampleInputEmail1").addEventListener('blur',function () {
        city(this.value);

    });
}else {
    document.querySelector("#exampleInputEmail1").attachEvent('onblur',function () {

        city(this.value);
    });
};

}