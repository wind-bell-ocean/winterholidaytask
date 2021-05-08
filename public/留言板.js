window.onload = function (){
    getData();
    var postRequest = new XMLHttpRequest();
    var Baseurl = 'api/wjl';
    postRequest.open('get', Baseurl + '/user',true);
    var nickname = document.getElementById("nickname").value;
    var message = document.getElementById("note").value;
    var time = getTime();
    var data = {
        nickname:nickname,
        message:message,
        time:time
    }
    postRequest.setRequestHeader('content-type', 'application/json'); 
    postRequest.get(data);
    if(userName=="null"){
        alert("参数缺失，注册失败");
        return;
    }
}
function onSummit(){
    var postRequest = new XMLHttpRequest();
    var Baseurl = 'api/wjl';
    postRequest.open('post', Baseurl + '/user',true);
    var nickname = document.getElementById("nickname").value;
    var message = document.getElementById("note").value;
    var time = getTime();
    var data = {
        nickname:nickname,
        message:message,
        time:time
    }
    postRequest.setRequestHeader('content-type', 'application/json'); 
    postRequest.send(data);
    
}
function getData(){
    var postRequest = new XMLHttpRequest();
    var Baseurl = 'api/wjl';
    postRequest.open('get', Baseurl + '/user',true);
    var nickname = document.getElementById("nickname").value;
    var message = document.getElementById("note").value;
    var time = getTime();
    var data = {
        nickname:nickname,
        message:message,
        time:time
    }
    postRequest.setRequestHeader('content-type', 'application/json'); 
    postRequest.get(data);
}
function getTime(){
    var today  = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var date1  = today.getDate();
    var hours = today.getHours();
    var minutes = today.getMinutes()<10?"0"+today.getMinutes():today.getMinutes();
    var seconds = today.getSeconds()<10?"0"+today.getSeconds():today.getSeconds();
    var dateTime = year+"年"+(month+1)+"月"+date1+"日"+hours+":"+minutes+":"+seconds;    
    return dateTime;
}